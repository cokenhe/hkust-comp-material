#-------------------------------------------------
#
# Project created by QtCreator 2018-06-22T00:48:17
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = Pipes
TEMPLATE = app
CONFIGS += c++11

SOURCES += main.cpp\
        loginwindow.cpp \
    gameinstance.cpp \
    block.cpp \
    gamewindow.cpp \
    recordmanager.cpp

HEADERS  += loginwindow.h \
    gameinstance.h \
    block.h \
    gamewindow.h \
    recordmanager.h

FORMS    += loginwindow.ui \
    gamewindow.ui

RESOURCES += \
    resources.qrc
