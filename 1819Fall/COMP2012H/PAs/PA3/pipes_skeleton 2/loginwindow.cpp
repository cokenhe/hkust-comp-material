#include "loginwindow.h"
#include "gameinstance.h"
#include "recordmanager.h"
#include "ui_loginwindow.h"

#include <sstream>

using std::ostringstream;

LoginWindow::LoginWindow(QWidget *parent):
    QMainWindow(parent),
    ui(new Ui::LoginWindow),
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
    game = new GameInstance(current_level, rm -> get_record(current_level));
    connect(game, SIGNAL(game_over()), this, SLOT(game_closed()));
}

void LoginWindow::game_closed()
{
}

void LoginWindow::on_prev_button_clicked()
{
}

void LoginWindow::on_next_button_clicked()
{
}

void LoginWindow::on_start_button_clicked()
{
}
