#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

#include "gamewindow.h"

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    GameWindow *game_window;

// TODO: Use special macro for signals and slots
    // TODO: Declare the handler for pressing the start button.
    // TODO: Declare the handler for closing the GameWindow.

private slots:
    void mouseClickHandler(); // show()
    void gameWindowClosed();  // hide()

};

#endif // MAINWINDOW_H
