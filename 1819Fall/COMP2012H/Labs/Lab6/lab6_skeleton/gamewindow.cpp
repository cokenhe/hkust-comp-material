#include <QFont>

#include "gamewindow.h"
#include "ui_gamewindow.h"
#include "square.h"

extern QFont* chess_font;

GameWindow::GameWindow(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::GameWindow)
{
    ui->setupUi(this);
    this->make_grid();
}

GameWindow::~GameWindow() {
    delete ui;
    for (int x=0; x<8; x++)
        for (int y=0; y<8; y++)
            delete square[y][x];
}

/**
 * Override closeEvent.
 * You need to emit the closed() signal.
 */

void GameWindow::closeEvent(QCloseEvent *event) {
    emit closed();
    event->accept();
}

void GameWindow::make_grid() {
    for (int x=0; x<8; x++) {
        for (int y=0; y<8; y++) {
            this->square[y][x] = new Square(this, x, y);
        }
    }
}
