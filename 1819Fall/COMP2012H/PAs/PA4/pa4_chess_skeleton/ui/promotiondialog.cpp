#include <QFont>

#include "promotiondialog.h"
#include "ui_promotiondialog.h"

extern QFont *chess_font;

PromotionDialog::PromotionDialog(QWidget *parent, Player player) :
    QDialog(parent),
    ui(new Ui::PromotionDialog),
    choice(' ')
{
    ui->setupUi(this);
    ui->queen->setText(player==WHITE ? "q" : "w");
    ui->queen->setFont(*chess_font);
    ui->bishop->setText(player==WHITE ? "b" : "v");
    ui->bishop->setFont(*chess_font);
    ui->knight->setText(player==WHITE ? "n" : "m");
    ui->knight->setFont(*chess_font);
    ui->rock->setText(player==WHITE ? "r" : "t");
    ui->rock->setFont(*chess_font);
}

PromotionDialog::~PromotionDialog()
{
    delete ui;
}

void PromotionDialog::on_queen_clicked() {
    this->choice = 'Q';
    close();
}

void PromotionDialog::on_rock_clicked() {
    this->choice = 'R';
    close();
}

void PromotionDialog::on_knight_clicked() {
    this->choice = 'N';
    close();
}

void PromotionDialog::on_bishop_clicked() {
    this->choice = 'B';
    close();
}

char PromotionDialog::get_choice() {
    exec();
    return this->choice;
}
