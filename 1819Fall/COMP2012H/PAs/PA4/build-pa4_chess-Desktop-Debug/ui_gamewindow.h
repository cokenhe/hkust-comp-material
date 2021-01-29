/********************************************************************************
** Form generated from reading UI file 'gamewindow.ui'
**
** Created by: Qt User Interface Compiler version 5.11.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_GAMEWINDOW_H
#define UI_GAMEWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QLabel>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_GameWindow
{
public:
    QLabel *wIndicator;
    QLabel *bIndicator;
    QLabel *checkmate;
    QLabel *stalemate;

    void setupUi(QWidget *GameWindow)
    {
        if (GameWindow->objectName().isEmpty())
            GameWindow->setObjectName(QStringLiteral("GameWindow"));
        GameWindow->resize(900, 640);
        GameWindow->setMinimumSize(QSize(900, 640));
        GameWindow->setMaximumSize(QSize(900, 640));
        GameWindow->setAutoFillBackground(false);
        wIndicator = new QLabel(GameWindow);
        wIndicator->setObjectName(QStringLiteral("wIndicator"));
        wIndicator->setGeometry(QRect(680, 40, 80, 80));
        QFont font;
        font.setPointSize(30);
        wIndicator->setFont(font);
        wIndicator->setAlignment(Qt::AlignCenter);
        bIndicator = new QLabel(GameWindow);
        bIndicator->setObjectName(QStringLiteral("bIndicator"));
        bIndicator->setGeometry(QRect(790, 40, 80, 80));
        bIndicator->setFont(font);
        bIndicator->setAlignment(Qt::AlignCenter);
        checkmate = new QLabel(GameWindow);
        checkmate->setObjectName(QStringLiteral("checkmate"));
        checkmate->setGeometry(QRect(670, 40, 200, 200));
        QFont font1;
        font1.setPointSize(12);
        font1.setBold(true);
        font1.setWeight(75);
        checkmate->setFont(font1);
        checkmate->setStyleSheet(QStringLiteral("color:red"));
        checkmate->setAlignment(Qt::AlignCenter);
        stalemate = new QLabel(GameWindow);
        stalemate->setObjectName(QStringLiteral("stalemate"));
        stalemate->setGeometry(QRect(670, 40, 200, 200));
        stalemate->setFont(font1);
        stalemate->setStyleSheet(QStringLiteral("color:red"));
        stalemate->setAlignment(Qt::AlignCenter);

        retranslateUi(GameWindow);

        QMetaObject::connectSlotsByName(GameWindow);
    } // setupUi

    void retranslateUi(QWidget *GameWindow)
    {
        GameWindow->setWindowTitle(QApplication::translate("GameWindow", "Chess", nullptr));
        wIndicator->setText(QApplication::translate("GameWindow", "k", nullptr));
        bIndicator->setText(QApplication::translate("GameWindow", "l", nullptr));
        checkmate->setText(QApplication::translate("GameWindow", "Checkmate!", nullptr));
        stalemate->setText(QApplication::translate("GameWindow", "Stalemate!", nullptr));
    } // retranslateUi

};

namespace Ui {
    class GameWindow: public Ui_GameWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_GAMEWINDOW_H
