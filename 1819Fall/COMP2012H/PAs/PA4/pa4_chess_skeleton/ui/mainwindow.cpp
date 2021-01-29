#include <QFont>
#include <QFontDatabase>

#include "mainwindow.h"
#include "ui_mainwindow.h"

#include "ChessGame.h"

QFont* chess_font;

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow),
    chess_game(nullptr)
{
    ui->setupUi(this);
    chess_font = new QFont(QFontDatabase::applicationFontFamilies(QFontDatabase::addApplicationFont(":/fonts/usual.ttf")).at(0), 40);
    QFont title_font{QFontDatabase::applicationFontFamilies(QFontDatabase::addApplicationFont(":/fonts/CURLZ___.TTF")).at(0), 50};
    ui->titleLabel->setFont(title_font);

    connect(this->ui->startButton, &QPushButton::clicked, this, &MainWindow::startButton_clicked_handler);
}

MainWindow::~MainWindow()
{
    if (this->chess_game != nullptr) delete this->chess_game;
    delete chess_font;

    delete this->ui;
}

void MainWindow::startButton_clicked_handler()
{
    if (this->chess_game) delete this->chess_game;
    this->chess_game = new ChessGame;
    this->chess_game->startGraphicUI();
    connect(this->chess_game->get_game_window(), &GameWindow::closed, this, &MainWindow::game_window_closed_handler);
    this->hide();
}

void MainWindow::game_window_closed_handler() {
    this->show();
}
