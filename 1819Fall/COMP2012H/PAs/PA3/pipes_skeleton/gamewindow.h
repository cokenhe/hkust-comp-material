#ifndef GAMEWINDOW_H
#define GAMEWINDOW_H

#include <QDialog>

namespace Ui
{
    class GameWindow;
}

class GameWindow : public QWidget
{
    Q_OBJECT

 public:
    static const int USED_STEP_LCD = 0;
    static const int MIN_STEP_LCD = 1;
    static const int LEVEL_LCD = 2;
    explicit GameWindow(QWidget *parent = nullptr);
    ~GameWindow();
    void set_lcd(int type, int value);
    void set_outlet(bool condition);
    QPushButton* get_done_button();

 private:
    Ui::GameWindow *ui;

 protected:
    void paintEvent(QPaintEvent *event);
    void closeEvent(QCloseEvent *event);

 signals:
    void closed();
};

#endif // GAMEWINDOW_H
