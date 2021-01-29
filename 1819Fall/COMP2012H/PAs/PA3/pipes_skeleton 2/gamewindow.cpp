#include <string>
#include <QString>
#include <QPainter>
#include <QCloseEvent>
#include <QStyleOption>

#include "gamewindow.h"
#include "ui_gamewindow.h"

GameWindow::GameWindow(QWidget *parent):
    QWidget(parent),
    ui(new Ui::GameWindow)
{
    ui -> setupUi(this);
    show();
}

GameWindow::~GameWindow()
{
    delete ui;
}

void GameWindow::paintEvent(QPaintEvent *event)
{
    QStyleOption opt;
    opt.init(this);
    QPainter p(this);
    style() -> drawPrimitive(QStyle::PE_Widget, &opt, &p, this);
}

void GameWindow::set_outlet(bool condition)
{
    if (condition) {
        ui -> outlet -> setStyleSheet("border-image: url(\":/resources/images/outlet_f.png\");");
    } else {
        ui -> outlet -> setStyleSheet("border-image: url(\":/resources/images/outlet.png\");");
    }
}

void GameWindow::set_lcd(int type, int value)
{
    QLCDNumber *lcds[3] = {ui -> steps_lcd, ui -> minstep_lcd, ui -> level_lcd};
    lcds[type] -> display(value);
    lcds[type] -> show();
}

QPushButton* GameWindow::get_done_button()
{
    return ui -> done_button;
}

void GameWindow::closeEvent(QCloseEvent *event)
{
    emit closed();
    event -> accept();
}
