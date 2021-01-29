/********************************************************************************
** Form generated from reading UI file 'promotiondialog.ui'
**
** Created by: Qt User Interface Compiler version 5.11.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_PROMOTIONDIALOG_H
#define UI_PROMOTIONDIALOG_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_PromotionDialog
{
public:
    QPushButton *queen;
    QPushButton *rock;
    QPushButton *knight;
    QPushButton *bishop;

    void setupUi(QDialog *PromotionDialog)
    {
        if (PromotionDialog->objectName().isEmpty())
            PromotionDialog->setObjectName(QStringLiteral("PromotionDialog"));
        PromotionDialog->resize(360, 120);
        PromotionDialog->setMinimumSize(QSize(0, 0));
        PromotionDialog->setMaximumSize(QSize(360, 120));
        queen = new QPushButton(PromotionDialog);
        queen->setObjectName(QStringLiteral("queen"));
        queen->setGeometry(QRect(20, 20, 80, 80));
        queen->setAutoFillBackground(false);
        queen->setStyleSheet(QStringLiteral(""));
        queen->setFlat(true);
        rock = new QPushButton(PromotionDialog);
        rock->setObjectName(QStringLiteral("rock"));
        rock->setGeometry(QRect(100, 20, 80, 80));
        rock->setAutoFillBackground(false);
        rock->setStyleSheet(QStringLiteral(""));
        rock->setFlat(true);
        knight = new QPushButton(PromotionDialog);
        knight->setObjectName(QStringLiteral("knight"));
        knight->setGeometry(QRect(180, 20, 80, 80));
        knight->setAutoFillBackground(false);
        knight->setStyleSheet(QStringLiteral(""));
        knight->setFlat(true);
        bishop = new QPushButton(PromotionDialog);
        bishop->setObjectName(QStringLiteral("bishop"));
        bishop->setGeometry(QRect(260, 20, 80, 80));
        bishop->setAutoFillBackground(false);
        bishop->setStyleSheet(QStringLiteral(""));
        bishop->setFlat(true);

        retranslateUi(PromotionDialog);

        QMetaObject::connectSlotsByName(PromotionDialog);
    } // setupUi

    void retranslateUi(QDialog *PromotionDialog)
    {
        PromotionDialog->setWindowTitle(QApplication::translate("PromotionDialog", "Promotion", nullptr));
        queen->setText(QString());
        rock->setText(QString());
        knight->setText(QString());
        bishop->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class PromotionDialog: public Ui_PromotionDialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_PROMOTIONDIALOG_H
