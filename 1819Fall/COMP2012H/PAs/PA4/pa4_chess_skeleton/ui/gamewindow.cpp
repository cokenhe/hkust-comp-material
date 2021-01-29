#include <QFont>
#include <string>
#include <QDebug>

#include "gamewindow.h"
#include "ui_gamewindow.h"
#include "square.h"
#include "ChessGame.h"
#include "promotiondialog.h"

using std::string;

extern QFont* chess_font;

GameWindow::GameWindow(QWidget *parent, ChessGame* _chess_game) :
    QWidget(parent),
    ui(new Ui::GameWindow),
    chess_game(_chess_game)
{
    ui->setupUi(this);
    ui->bIndicator->setFont(*chess_font);
    ui->wIndicator->setFont(*chess_font);
    ui->wIndicator->setStyleSheet("border-style:solid;border-color:black;border-width:5px");
    this->make_grid();
    ui->checkmate->hide();
    ui->stalemate->hide();
}

GameWindow::~GameWindow() {
    delete ui;
    for (int i=0; i<8; i++)
        for (int j=0; j<8; j++)
            delete square[i][j];
}

void GameWindow::closeEvent(QCloseEvent *event) {
    emit closed();
}

void GameWindow::make_grid() {
    for (int i=0; i<8; i++) {
        for (int j=0; j<8; j++) {
            this->square[i][j] = new Square(this, i, j);
        }
    }
}

void GameWindow::set_current_player(Player player) {
    ui->bIndicator->setStyleSheet("border-style:solid;border-color:black;border-width:0px");
    ui->wIndicator->setStyleSheet("border-style:solid;border-color:black;border-width:0px");
    if (player==WHITE)
        ui->wIndicator->setStyleSheet("border-style:solid;border-color:black;border-width:5px");
    else
        ui->bIndicator->setStyleSheet("border-style:solid;border-color:black;border-width:5px");
}

ChessGame* GameWindow::get_chess_game() const {
    return this->chess_game;
}

Square* GameWindow::get_square(int row, int col) const {
    return this->square[row][col];
}

void GameWindow::set_highlighted(int row, int col, bool value, string color) {
    this->square[row][col]->set_highlighted(value, color);
}

void GameWindow::reset_highlighted() {
    for (int i=0; i<8; i++)
        for (int j=0; j<8; j++)
            this->square[i][j]->set_highlighted(false);
}

void GameWindow::set_piece(int row, int col, char i) {
    this->square[row][col]->set_piece(i);
}

void GameWindow::show_checkmate_label() {
    ui->checkmate->show();
}

void GameWindow::show_stalemate_label() {
    ui->stalemate->show();
}

char GameWindow::get_promotion_choice(Player player) {
    PromotionDialog d(this, player);
    char result;
    while((result = d.get_choice()) == ' ');
    return result;
}
