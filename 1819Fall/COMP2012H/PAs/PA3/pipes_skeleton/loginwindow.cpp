#include "loginwindow.h"
#include "gameinstance.h"
#include "recordmanager.h"
#include "ui_loginwindow.h"

#include <sstream>

using std::ostringstream;

LoginWindow::LoginWindow(QWidget *parent):
    QMainWindow(parent),
    ui(new Ui::LoginWindow),
    game(nullptr),
    rm(new RecordManager()),
    current_level(1),
    started(false)
{
    ui -> setupUi(this);
}

LoginWindow::~LoginWindow()
{
    delete rm;
    delete ui;
}

void LoginWindow::set_statusbar_text(string str)
{
    ui -> statusBar -> showMessage(QString::fromStdString(str));
}

void LoginWindow::refresh_background()
{
    ostringstream buf;
    buf << "#centralWidget { border-image: url(\":/resources/images/login_pic/level_" << current_level << ".png\"); }";
    ui -> centralWidget -> setStyleSheet(QString::fromStdString(buf.str()));
}

void LoginWindow::start_game()
{
    if (game == nullptr)
        game = new GameInstance(current_level, rm -> get_record(current_level));
    connect(game, SIGNAL(game_over()), this, SLOT(game_closed()));
}

void LoginWindow::game_closed()
{
    int currentRecord = rm->get_record(current_level);
    int newRecord = game->get_result();
    if (currentRecord == -1 || (newRecord != -1 && newRecord < currentRecord))
        rm->update_record(current_level, newRecord);
    delete game;
    game = nullptr;
    started = false;
}

void LoginWindow::on_prev_button_clicked()
{
    set_statusbar_text("");
    if (current_level == 1) {
        set_statusbar_text("You are already at the minimal level.");
        return;
    }
    current_level -= 1;
    refresh_background();
}

void LoginWindow::on_next_button_clicked()
{
    set_statusbar_text("");
    if (current_level == 3) {
        set_statusbar_text("You are already at the maximal level.");
        return;
    }
    if (rm->get_record(current_level) == -1) {
        set_statusbar_text("You can not move to the next level before passing this level.");
        return;
    }
    current_level += 1;
    refresh_background();
}

void LoginWindow::on_start_button_clicked()
{
    start_game();
    started = true;
}
