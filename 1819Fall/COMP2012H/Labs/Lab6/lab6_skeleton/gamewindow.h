#ifndef GAMEWINDOW_H
#define GAMEWINDOW_H

#include <QWidget>
#include <QCloseEvent>
#include <QFont>

namespace Ui {
class GameWindow;
}

class Square;

class GameWindow : public QWidget
{
    Q_OBJECT
public:
    explicit GameWindow(QWidget *parent = nullptr);
    ~GameWindow();

private:

    // TODO: override void closeEvent(QCloseEvent*)
    void closeEvent(QCloseEvent*);

    void make_grid();

    Ui::GameWindow *ui;
    Square* square[8][8];

// TODO: Use special macro for signals and slots
    // TODO: define signal closed()

signals:
    void closed();
};

#endif // GAMEWINDOW_H
