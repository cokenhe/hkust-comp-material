/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.11.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QLabel>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralWidget;
    QPushButton *startButton;
    QLabel *logoLabel;
    QLabel *titleLabel;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QStringLiteral("MainWindow"));
        MainWindow->resize(700, 550);
        MainWindow->setMinimumSize(QSize(700, 550));
        MainWindow->setMaximumSize(QSize(700, 550));
        MainWindow->setAutoFillBackground(false);
        MainWindow->setStyleSheet(QStringLiteral("background-color: white"));
        centralWidget = new QWidget(MainWindow);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        startButton = new QPushButton(centralWidget);
        startButton->setObjectName(QStringLiteral("startButton"));
        startButton->setGeometry(QRect(480, 370, 111, 41));
        QFont font;
        font.setFamily(QStringLiteral("Arial"));
        font.setPointSize(15);
        startButton->setFont(font);
        startButton->setStyleSheet(QLatin1String("background-color: rgb(207, 207, 207);\n"
"border: none"));
        startButton->setFlat(false);
        logoLabel = new QLabel(centralWidget);
        logoLabel->setObjectName(QStringLiteral("logoLabel"));
        logoLabel->setGeometry(QRect(0, 10, 381, 531));
        logoLabel->setPixmap(QPixmap(QString::fromUtf8(":/images/logo.jpg")));
        logoLabel->setScaledContents(false);
        logoLabel->setAlignment(Qt::AlignCenter);
        titleLabel = new QLabel(centralWidget);
        titleLabel->setObjectName(QStringLiteral("titleLabel"));
        titleLabel->setGeometry(QRect(390, 80, 291, 101));
        QFont font1;
        font1.setFamily(QStringLiteral("Curlz MT"));
        font1.setPointSize(50);
        titleLabel->setFont(font1);
        titleLabel->setAlignment(Qt::AlignCenter);
        MainWindow->setCentralWidget(centralWidget);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QApplication::translate("MainWindow", "Chess", nullptr));
        startButton->setText(QApplication::translate("MainWindow", "START", nullptr));
        logoLabel->setText(QString());
        titleLabel->setText(QApplication::translate("MainWindow", "CHESS", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
