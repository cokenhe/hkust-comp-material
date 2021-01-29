#ifndef PROMOTIONDIALOG_H
#define PROMOTIONDIALOG_H

#include <QDialog>

#include "Player.h"

namespace Ui {
class PromotionDialog;
}

class PromotionDialog : public QDialog
{
    Q_OBJECT

public:
    explicit PromotionDialog(QWidget *parent = nullptr, Player player=WHITE);
    ~PromotionDialog();

    char get_choice();

private:
    Ui::PromotionDialog *ui;
    char choice;

private slots:
    void on_queen_clicked();
    void on_rock_clicked();
    void on_knight_clicked();
    void on_bishop_clicked();
};

#endif // PROMOTIONDIALOG_H
