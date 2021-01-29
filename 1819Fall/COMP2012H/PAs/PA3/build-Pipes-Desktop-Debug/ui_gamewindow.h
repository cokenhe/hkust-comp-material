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
#include <QtWidgets/QLCDNumber>
#include <QtWidgets/QLabel>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_GameWindow
{
public:
    QLCDNumber *steps_lcd;
    QLCDNumber *level_lcd;
    QLCDNumber *minstep_lcd;
    QLabel *outlet;
    QPushButton *done_button;

    void setupUi(QWidget *GameWindow)
    {
        if (GameWindow->objectName().isEmpty())
            GameWindow->setObjectName(QStringLiteral("GameWindow"));
        GameWindow->resize(700, 805);
        GameWindow->setMinimumSize(QSize(700, 805));
        GameWindow->setMaximumSize(QSize(700, 805));
        GameWindow->setAutoFillBackground(false);
        GameWindow->setStyleSheet(QLatin1String("#GameWindow {\n"
"border-image: url(\":/resources/images/background_hd.png\");\n"
"}"));
        steps_lcd = new QLCDNumber(GameWindow);
        steps_lcd->setObjectName(QStringLiteral("steps_lcd"));
        steps_lcd->setGeometry(QRect(515, 782, 31, 18));
        steps_lcd->setLayoutDirection(Qt::LeftToRight);
        steps_lcd->setAutoFillBackground(false);
        steps_lcd->setFrameShadow(QFrame::Plain);
        steps_lcd->setLineWidth(0);
        steps_lcd->setSmallDecimalPoint(false);
        steps_lcd->setDigitCount(3);
        steps_lcd->setSegmentStyle(QLCDNumber::Flat);
        steps_lcd->setProperty("intValue", QVariant(888));
        level_lcd = new QLCDNumber(GameWindow);
        level_lcd->setObjectName(QStringLiteral("level_lcd"));
        level_lcd->setGeometry(QRect(663, 782, 21, 18));
        level_lcd->setMinimumSize(QSize(0, 0));
        level_lcd->setLineWidth(0);
        level_lcd->setDigitCount(2);
        level_lcd->setSegmentStyle(QLCDNumber::Flat);
        level_lcd->setProperty("intValue", QVariant(88));
        minstep_lcd = new QLCDNumber(GameWindow);
        minstep_lcd->setObjectName(QStringLiteral("minstep_lcd"));
        minstep_lcd->setGeometry(QRect(591, 782, 30, 18));
        minstep_lcd->setLineWidth(0);
        minstep_lcd->setDigitCount(3);
        minstep_lcd->setSegmentStyle(QLCDNumber::Flat);
        minstep_lcd->setProperty("intValue", QVariant(888));
        outlet = new QLabel(GameWindow);
        outlet->setObjectName(QStringLiteral("outlet"));
        outlet->setGeometry(QRect(583, 547, 112, 226));
        outlet->setStyleSheet(QStringLiteral("border-image: url(\":/resources/images/outlet.png\");"));
        done_button = new QPushButton(GameWindow);
        done_button->setObjectName(QStringLiteral("done_button"));
        done_button->setGeometry(QRect(520, 50, 111, 51));
        done_button->setStyleSheet(QStringLiteral("background-color: transparent;"));

        retranslateUi(GameWindow);

        QMetaObject::connectSlotsByName(GameWindow);
    } // setupUi

    void retranslateUi(QWidget *GameWindow)
    {
        GameWindow->setWindowTitle(QString());
        outlet->setText(QString());
        done_button->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class GameWindow: public Ui_GameWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_GAMEWINDOW_H
