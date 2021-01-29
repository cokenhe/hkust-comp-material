#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

#include "gamewindow.h"

namespace Ui {
class MainWindow;
}

class ChessGame;

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    ChessGame* chess_game;

private slots:
    void startButton_clicked_handler();
    void game_window_closed_handler();
};

#endif // MAINWINDOW_H
