#include <QFile>
#include <QString>
#include <QObject>
#include <QCloseEvent>
#include <QMessageBox>

#include "gameinstance.h"
#include "gamewindow.h"

const QString map_path = ":/resources/maps/maps.txt";

GameInstance::GameInstance(int _level, int _min_step):
    game_gui(new GameWindow(nullptr)),
    used_step(0),
    min_step(_min_step),
    level(_level),
    result(-1)
{
    game_gui -> show();
    game_gui -> set_lcd(GameWindow::USED_STEP_LCD, 0);
    game_gui -> set_lcd(GameWindow::MIN_STEP_LCD, _min_step == -1 ? 999 : _min_step);
    game_gui -> set_lcd(GameWindow::LEVEL_LCD, _level);
    load_map(_level);
    connect(game_gui -> get_done_button(), SIGNAL(clicked()), this, SLOT(on_done_button_clicked()));
    connect(game_gui, SIGNAL(closed()), this, SLOT(quit()));
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

void GameInstance::load_map(int dest_level)
{
}

GameInstance::~GameInstance()
{
}

void GameInstance::block_pressed(int y, int x)
{
}

int GameInstance::get_result()
{
}

void GameInstance::on_done_button_clicked()
{
}
