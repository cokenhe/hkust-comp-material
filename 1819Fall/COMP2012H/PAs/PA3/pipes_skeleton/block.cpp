#include "block.h"
#include "gameinstance.h"
#include <string>
#include <sstream>
#include <QPushButton>

using std::string;
using std::ostringstream;

Block::Block(QWidget *_parent,
             int _y,
             int _x,
             GameInstance *_host_game,
             int _type,
             int _orientation):
    QPushButton(_parent),
    host_game(_host_game),
    x(_x),
    y(_y),
    highlighted(false),
    orientation(_orientation),
    type(_type)
{
    setText("");
    setAutoFillBackground(true);
    setFlat(true);
    setGeometry(QRect(NORMAL_X + BUTTON_WIDTH * _x, NORMAL_Y + BUTTON_HEIGHT * _y, BUTTON_WIDTH, BUTTON_HEIGHT));
    setStyleSheet("border: none");
    set_image(get_path());
    setVisible(true);
}

string Block::get_path()
{
    ostringstream buf;
    if (highlighted) {
        buf << ":/resources/images/blocks_jpg/block" << type << "_" << orientation << "_f.jpg";
    } else {
        buf << ":/resources/images/blocks_jpg/block" << type << "_" << orientation << ".jpg";
    }
    return buf.str();
}

void Block::set_image(string path)
{
    setStyleSheet(QString::fromStdString("border-image: url(\"" + path + "\");"));
}

void Block::pressed()
{
    host_game -> block_pressed(y, x);
}

void Block::rotate()
{
    orientation = ( orientation + 1 ) % 4;
    set_image(get_path());
}

void Block::set_highlighted(bool value)
{
    highlighted = value;
}

bool Block::get_highlighted()
{
    return highlighted;
}

int Block::get_orientation()
{
    return orientation;
}

int Block::get_type()
{
    return type;
}
