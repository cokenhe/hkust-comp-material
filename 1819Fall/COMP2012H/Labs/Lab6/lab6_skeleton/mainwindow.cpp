#include <QFont>
#include <QFontDatabase>

#include "mainwindow.h"
#include "ui_mainwindow.h"

QFont* chess_font;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow),
    game_window(nullptr)
{
    ui->setupUi(this);
    chess_font = new QFont(QFontDatabase::applicationFontFamilies(QFontDatabase::addApplicationFont(":/fonts/usual.ttf")).at(0), 40);

    // TODO: Connect the clicked() signal of ui->startButton to the corresponding slot of this class.
    connect(ui->startButton, SIGNAL(clicked()), this, SLOT(mouseClickHandler()));

}

MainWindow::~MainWindow()
{
    if (this->game_window != nullptr) delete this->game_window;
    delete chess_font;

    delete this->ui;
}

/**
 * Create the handler for pressing the start button.
 * You need to create and show() the GameWindow, connect the closed() signal
 * of the GameWindow you defined to the corresponding handler of this class,
 * and hide() this window.
 */
void MainWindow::mouseClickHandler() {
    game_window = new GameWindow;
    connect(game_window, SIGNAL(closed()), this, SLOT(gameWindowClosed()));

    game_window->show();
    this->hide();
}

/**
  * Create the handler for closing the GameWindow.
  * You need to show() the main window.
  */

void MainWindow::gameWindowClosed() {
    this->show();
    //delete game_window;
    game_window->deleteLater();
    game_window = nullptr;
}
