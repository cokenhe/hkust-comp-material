#ifndef GAMEINSTANCE_H
#define GAMEINSTANCE_H

#include <QString>
#include <QObject>
#include <queue>

#include "block.h"

class GameWindow;

class GameInstance : public QObject
{
    Q_OBJECT

 public:
    GameInstance(int _level, int _min_step);
    ~GameInstance();
    void block_pressed(int y, int x);
    int get_result();
    enum Direction {UP, RIGHT, DOWN, LEFT};
    enum PipeResult {SUCCESS, LEAKAGE, FAIL};
    struct Coordinate { int y; int x; };

 private:
    static const QString map_path;
    static const int MAP_SIZE = 8;
    Block *blocks[MAP_SIZE][MAP_SIZE];
    GameWindow *game_gui;
    QTimer* timer;
    std::queue<Coordinate>* q;
    int waterpressure[MAP_SIZE][MAP_SIZE];
    int used_step;
    int min_step;
    int level;
    int result;
    bool isGameOvered;
    void init_block(int _type, int _orientation, int _y, int _x);
    void load_map(int dest_level);

 signals:
    void game_over();

 private slots:
    void on_done_button_clicked();
    void quit();
    void updateBlockImage();

 private:
    int getOutputDirection(int y, int x, Block* blocks[MAP_SIZE][MAP_SIZE], Direction dir[4]);
    bool isLeakageExist(GameInstance::Direction from, int y, int x, Block* blocks[MAP_SIZE][MAP_SIZE]);
    PipeResult piping(GameInstance::Direction from, int y, int x, Block* blocks[MAP_SIZE][MAP_SIZE], int val, int pressure[MAP_SIZE][MAP_SIZE]);
    bool isToward(GameInstance::Direction dir, GameInstance::Direction dirs[], int numOutput);
    bool isToward(int y, int x, Direction Dir);
    bool isConnected(int y, int x, Direction dir);
    void enqueue(int y, int x, std::queue<Coordinate>& q, int pressure[MAP_SIZE][MAP_SIZE]);
    void dequeue(std::queue<Coordinate>& q, int pressure[MAP_SIZE][MAP_SIZE]);
    void displayResult();

};

#endif // GAMEINSTANCE_H
