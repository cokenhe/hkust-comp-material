#ifndef GAMEINSTANCE_H
#define GAMEINSTANCE_H

#include <QString>
#include <QObject>

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

 private:
    static const QString map_path;
    static const int MAP_SIZE = 8;
    Block *blocks[MAP_SIZE][MAP_SIZE];
    GameWindow *game_gui;
    int used_step;
    int min_step;
    int level;
    int result;
    void init_block(int _type, int _orientation, int _y, int _x);
    void load_map(int dest_level);

 signals:
    void game_over();

 private slots:
    void on_done_button_clicked();
    void quit();
};

#endif // GAMEINSTANCE_H
