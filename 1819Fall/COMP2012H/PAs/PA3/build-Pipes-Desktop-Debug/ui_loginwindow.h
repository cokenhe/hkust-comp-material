/********************************************************************************
** Form generated from reading UI file 'loginwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.11.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_LOGINWINDOW_H
#define UI_LOGINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_LoginWindow
{
public:
    QWidget *centralWidget;
    QPushButton *prev_button;
    QPushButton *start_button;
    QPushButton *next_button;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *LoginWindow)
    {
        if (LoginWindow->objectName().isEmpty())
            LoginWindow->setObjectName(QStringLiteral("LoginWindow"));
        LoginWindow->setEnabled(true);
        LoginWindow->resize(400, 420);
        LoginWindow->setMinimumSize(QSize(400, 420));
        LoginWindow->setMaximumSize(QSize(400, 420));
        LoginWindow->setStyleSheet(QStringLiteral(""));
        centralWidget = new QWidget(LoginWindow);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        centralWidget->setEnabled(true);
        centralWidget->setMinimumSize(QSize(279, 216));
        centralWidget->setMaximumSize(QSize(400, 400));
        centralWidget->setStyleSheet(QLatin1String("#centralWidget {\n"
"border-image: url(\":/resources/images/login_pic/level_1.png\");\n"
"}"));
        prev_button = new QPushButton(centralWidget);
        prev_button->setObjectName(QStringLiteral("prev_button"));
        prev_button->setGeometry(QRect(90, 208, 20, 20));
        prev_button->setMinimumSize(QSize(20, 20));
        prev_button->setMaximumSize(QSize(20, 20));
        prev_button->setStyleSheet(QStringLiteral("background-color: transparent;"));
        start_button = new QPushButton(centralWidget);
        start_button->setObjectName(QStringLiteral("start_button"));
        start_button->setGeometry(QRect(90, 280, 220, 80));
        start_button->setMinimumSize(QSize(220, 80));
        start_button->setMaximumSize(QSize(220, 80));
        start_button->setStyleSheet(QStringLiteral("background-color: transparent;"));
        next_button = new QPushButton(centralWidget);
        next_button->setObjectName(QStringLiteral("next_button"));
        next_button->setGeometry(QRect(300, 210, 20, 20));
        next_button->setMinimumSize(QSize(20, 20));
        next_button->setMaximumSize(QSize(20, 20));
        next_button->setStyleSheet(QStringLiteral("background-color: transparent;"));
        LoginWindow->setCentralWidget(centralWidget);
        statusBar = new QStatusBar(LoginWindow);
        statusBar->setObjectName(QStringLiteral("statusBar"));
        LoginWindow->setStatusBar(statusBar);

        retranslateUi(LoginWindow);

        QMetaObject::connectSlotsByName(LoginWindow);
    } // setupUi

    void retranslateUi(QMainWindow *LoginWindow)
    {
        LoginWindow->setWindowTitle(QApplication::translate("LoginWindow", "Pipes", nullptr));
        prev_button->setText(QString());
        start_button->setText(QString());
        next_button->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class LoginWindow: public Ui_LoginWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_LOGINWINDOW_H
