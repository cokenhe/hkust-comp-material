#ifndef SQUARE_H
#define SQUARE_H

#include <QPushButton>
#include <QString>

#include <map>

typedef std::map<std::string, std::string> StyleMap;

class Square : public QPushButton
{
    Q_OBJECT
public:
    Square(QWidget* parent=nullptr, int _x=0, int _y=0);
    void set_highlighted(bool value);
    bool get_highlighted() const;
    void setStyle(std::string key, std::string value);
    void applyStyle();

    static int get_current_color();

private:
    void render();
    void switch_current_color();

    int x, y;
    StyleMap style;
    bool is_highlighted;

    static Square* highlighted;

    static const int OFFSET_X = 0;
    static const int OFFSET_Y = 0;
    static const int SQUARE_WIDTH = 80;
    static const int SQUARE_HEIGHT = 80;

// TODO: Use special macro for signals and slots
    // TODO: Declare handler for clicking this button
private slots:
    void gridSelected();

};

#endif // SQUARE_H
