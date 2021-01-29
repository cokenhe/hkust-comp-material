#include <QFile>
#include <QString>
#include <QObject>
#include <QTextStream>
#include <QCloseEvent>
#include <QMessageBox>
#include <QRegExpValidator>
#include <QTimer>
#include <QDebug>
#include <queue>

#include "gameinstance.h"
#include "gamewindow.h"

const QString map_path = ":/resources/maps/maps.txt";

GameInstance::GameInstance(int _level, int _min_step):
    game_gui(new GameWindow(nullptr)),
    timer(new QTimer()),
    q(new std::queue<Coordinate>),
    used_step(0),
    min_step(_min_step),
    level(_level),
    result(-1),
    isGameOvered(false)
{
    game_gui -> show();
    game_gui -> set_lcd(GameWindow::USED_STEP_LCD, 0);
    game_gui -> set_lcd(GameWindow::MIN_STEP_LCD, _min_step == -1 ? 999 : _min_step);
    game_gui -> set_lcd(GameWindow::LEVEL_LCD, _level);
    load_map(_level);
    timer->setInterval(100);

    for (int i = 0; i < MAP_SIZE * MAP_SIZE; ++i)
        waterpressure[i / MAP_SIZE][i % MAP_SIZE] = 0;

    connect(game_gui -> get_done_button(), SIGNAL(clicked()), this, SLOT(on_done_button_clicked()));
    connect(game_gui, SIGNAL(closed()), this, SLOT(quit()));
    connect(timer, SIGNAL(timeout()), this, SLOT(updateBlockImage()));

}

void GameInstance::init_block(int _type, int _orientation, int _y, int _x)
{
    Block* ret = new Block(game_gui, _y, _x, this, _type, _orientation);
    connect(ret, SIGNAL(clicked()), ret, SLOT(pressed()));
    blocks[_y][_x] = ret;
}

void GameInstance::quit()
{
    emit game_over();
}

void GameInstance::updateBlockImage() {
    if (q->empty()) {
        displayResult();
        return;
    }

    Coordinate coor = q->front();

    int y = coor.y;
    int x = coor.x;

    dequeue(*q, waterpressure);

    if (y < 0 || y >= MAP_SIZE) return;
    if (x < 0 || x >= MAP_SIZE) return;

    blocks[y][x]->set_highlighted(true);
    string path = blocks[y][x]->get_path();
    blocks[y][x]->set_image(path);

    if (blocks[MAP_SIZE - 2][MAP_SIZE - 1]->get_type() != 4)
    {isGameOvered = (blocks[MAP_SIZE - 2][MAP_SIZE - 1]->get_highlighted()); qDebug() << "1 : " << isGameOvered;}
    if (blocks[MAP_SIZE - 1][MAP_SIZE - 2]->get_type() != 4)
    {isGameOvered &= (blocks[MAP_SIZE - 1][MAP_SIZE - 2]->get_highlighted()); qDebug() << "2 : " << isGameOvered;}
    isGameOvered &= (blocks[MAP_SIZE - 1][MAP_SIZE - 1]->get_highlighted());
     qDebug() << "3 : " << isGameOvered;

    if (isGameOvered) {
        displayResult();
        return;
    }

    timer->start();
}

void GameInstance::load_map(int dest_level)
{
    QFile file(":/resources/maps/maps.txt");
    file.open(QIODevice::ReadOnly);
    QTextStream in(&file);
    QString line;

    for (int i = 1; i < dest_level; ++i)
        while (in.readLine() != "]");

    line = in.readLine();
    for (int i = 0; i < MAP_SIZE; ++i) {
        line = in.readLine();
        QStringList list = line.split(QRegularExpression("\\)?,?\\s*\\(?"), QString::SkipEmptyParts);

        for (int j = 0; j < MAP_SIZE; ++j) {
            int type = list[j * 2].toInt();
            int orientation = list[j * 2 + 1].toInt();
            init_block(type, orientation, i, j);
        }
    }
}

GameInstance::~GameInstance()
{
    for (int i = 0; i < MAP_SIZE * MAP_SIZE; ++i) {
        int y = i / MAP_SIZE;
        int x = i % MAP_SIZE;
        if (blocks[y][x] != nullptr) {
            delete blocks[y][x];
            blocks[y][x] = nullptr;
        }
    }
    game_gui->deleteLater();
    timer->deleteLater();
    delete q;
}

void GameInstance::block_pressed(int y, int x)
{
    blocks[y][x]->rotate();
    used_step += 1;
    game_gui->set_lcd(GameWindow::USED_STEP_LCD, used_step);
}

int GameInstance::get_result()
{
    return result;
}

void GameInstance::displayResult() {
    int pressure[MAP_SIZE][MAP_SIZE] = {};
    PipeResult gameResult = piping(LEFT, 0, 0, blocks, -1, pressure);

    QString gr = gameResult == 0 ? "SUCCESS" :
                 gameResult == 1 ? "LEAKAGE" : "FAIL";
    qDebug() << gr;

    switch (gameResult) {
        case SUCCESS:
            game_gui->set_outlet(true);
            QMessageBox::information(nullptr, "", "Congratulations!");
            result = used_step;
            break;
        case LEAKAGE:
            QMessageBox::information(nullptr, "", "There's leakage in the maze.\nGame Over!");
            break;
        case FAIL:
            QMessageBox::information(nullptr, "", "It seems that water can not flow into the outlet.\nGame Over!");
    }

    // game_gui->close();
     quit();
}

void GameInstance::on_done_button_clicked()
{
    if (isToward(0, 0, LEFT))
        enqueue(0, 0, *q, waterpressure);

    timer->start();
}

int GameInstance::getOutputDirection(int y, int x, Block* blocks[][MAP_SIZE], Direction dir[]) {
    int type = blocks[y][x]->get_type();
    int orientation = blocks[y][x]->get_orientation();

    Direction outputs[] = {UP, RIGHT, DOWN, LEFT};
    int numOutputs = 0;
    int offset = 0;
    int factor = 1;

    switch (type) {
        case 0:
            numOutputs =3; break;
        case 2:
            offset = 1;
            factor = 2;
        case 1:
            numOutputs = 2; break;
        case 3:
            numOutputs = 4; break;
        default:
            numOutputs = 0; break;
    }

    for (int i = 0; i < numOutputs; ++i)
        dir[i] = outputs[(orientation + offset + i * factor) % 4];

    return numOutputs;
}

bool GameInstance::isLeakageExist(Direction from, int y, int x, Block* blocks[][MAP_SIZE]) {

    int type = blocks[y][x]->get_type();
    Direction outputDir[4];

    if (type == 4) return true;
    if (type == 3) return false;

    int numOutputs = getOutputDirection(y, x, blocks, outputDir);
    if (numOutputs == 0) return true;
    if (numOutputs == 4) return false;

    for (int i = 0; i < numOutputs; ++i )
        if (from == outputDir[i]) return false;

    return true;
}


GameInstance::PipeResult GameInstance::piping(Direction from, int y, int x, Block* blocks[][MAP_SIZE], int val, int pressure[][MAP_SIZE]) {
    QString sFrom = from == 0 ? "UP" :
                    from == 1 ? "RIGHT" :
                    from == 2 ? "DOWN" : "LEFT";
    qDebug() << val << " : From " << sFrom << " ----------------------------------";

    qDebug() << val << " : Will return due to x / y out of bound";
    if (x < 0 || x >= MAP_SIZE) return FAIL;
    if (y < 0 || y >= MAP_SIZE) return FAIL;

    qDebug() << val << " : Will return due to low pressure";
    if (pressure[y][x] != 0 && pressure[y][x] >= val) return FAIL;

    Direction outputDir[4];
    int numOutput = getOutputDirection(y, x, blocks, outputDir);

    qDebug() << val << " : Will reutrn due to Leakage";
    if (isLeakageExist(from, y, x, blocks)) return LEAKAGE;

    qDebug() << val << " : Will return due to Success";
    if (y == MAP_SIZE - 1 && x == MAP_SIZE - 1 && isToward(RIGHT, outputDir, numOutput)) return SUCCESS;

    pressure[y][x] = val;

    for (int i = 0; i < numOutput; ++i) {
        PipeResult result;
        switch (outputDir[i]){
            case UP:
                result = piping(DOWN, y - 1, x, blocks, val - 1, pressure); break;
            case RIGHT:
                result = piping(LEFT, y, x + 1, blocks, val - 1, pressure); break;
            case DOWN:
                result = piping(UP, y + 1, x, blocks, val - 1, pressure); break;
            case LEFT:
                result = piping(RIGHT, y, x - 1, blocks, val - 1, pressure); break;
        }
        if (result != FAIL) return result;
    }

    qDebug() << val << " : Will return due to End of Function";
    return FAIL;
}

bool GameInstance::isToward(Direction dir, Direction dirs[], int numOutput) {
    for (int i = 0; i < numOutput; ++i)
        if (dir == dirs[i]) return true;
    return false;
}

bool GameInstance::isToward(int y, int x, Direction dir) {
    Direction outputDir[4];
    int numOutputs = getOutputDirection(y, x, blocks, outputDir);

    for (int i = 0; i < numOutputs; ++i)
        if (dir == outputDir[i]) return true;
    return false;
}

void GameInstance::enqueue(int y, int x, std::queue<Coordinate>& q, int pressure[][MAP_SIZE]) {
    if (x < 0 || x >= MAP_SIZE) return;
    if (y < 0 || y >= MAP_SIZE) return;

    if ( pressure[y][x] != 0 ) return;

    pressure[y][x] = 1;

    q.push(Coordinate {y, x});
}

void GameInstance::dequeue(std::queue<Coordinate>& q, int pressure[][MAP_SIZE]) {
    Coordinate coor = q.front();

    int y = coor.y;
    int x = coor.x;

    Direction outputDir[4];
    int numOutputs = getOutputDirection(y, x, blocks, outputDir);
    for (int i = 0; i < numOutputs; ++i)
        switch (outputDir[i]){
            case UP:
                if (isConnected(y, x, UP))
                    enqueue(y - 1, x, q, pressure); break;
            case RIGHT:
                if (isConnected(y, x, RIGHT))
                    enqueue(y, x + 1, q, pressure); break;
            case DOWN:
                if (isConnected(y, x, DOWN))
                    enqueue(y + 1, x, q, pressure); break;
            case LEFT:
                if (isConnected(y, x, LEFT))
                    enqueue(y, x - 1, q, pressure); break;
        }
    q.pop();
}

 bool GameInstance::isConnected(int y, int x, Direction dir) {
     int targetY, targetX;
     Direction targetDir;
     switch(dir) {
         case UP:
             targetY = y - 1; targetX = x; targetDir = DOWN; break;
         case RIGHT:
             targetY = y; targetX = x + 1; targetDir = LEFT; break;
         case DOWN:
             targetY = y + 1; targetX = x; targetDir = UP; break;
         case LEFT:
             targetY = y; targetX = x - 1; targetDir = RIGHT; break;
     }

     if (x < 0 || x >= MAP_SIZE) return false;
     if (y < 0 || y >= MAP_SIZE) return false;

     if (targetY < 0 || targetY >= MAP_SIZE) return false;
     if (targetX < 0 || targetX >= MAP_SIZE) return false;

     return (isToward(y, x, dir) && isToward(targetY, targetX, targetDir));

 }
