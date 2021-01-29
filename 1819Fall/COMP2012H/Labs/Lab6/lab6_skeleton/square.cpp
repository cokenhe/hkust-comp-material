#include <QFont>

#include <sstream>

#include "square.h"

using std::string;
using std::ostringstream;

Square* Square::highlighted;

extern QFont* chess_font;

Square::Square(QWidget* parent, int _x, int _y) :
    // TODO: complete the initialization list
    QPushButton(parent),
    x(_x),
    y(_y)
{
    this->render();
    // TODO: Connect the clicked() signal of this button to the corresponding slot of this button.
    connect(this, SIGNAL(clicked()), this, SLOT(gridSelected()));
    highlighted = nullptr;
}

void Square::render() {
    setGeometry(QRect(OFFSET_X + SQUARE_WIDTH * this->x, OFFSET_Y + SQUARE_HEIGHT * this->y, SQUARE_WIDTH, SQUARE_HEIGHT));
    setVisible(true);
    setFlat(true);
    setAutoFillBackground(true);
    setFont(*chess_font);
    setText("");
    setStyle("border-color", "black");
    setStyle("border-width", "0px");
    setStyle("border-style", "solid");
    if ((this->x + this->y) % 2 == 0)
        setStyle("background-color", "gray");
    else
        setStyle("background-color", "white");
    applyStyle();
}

void Square::setStyle(string key, string value) {
    this->style[key] = value;
}

void Square::applyStyle() {
    ostringstream s;
    for (StyleMap::iterator i=this->style.begin(); i!=this->style.end(); i++) {
        s << i->first << ":" << i->second << ";";
    }
    string style_string = s.str();
    setStyleSheet(QString::fromStdString(style_string));
}

void Square::set_highlighted(bool value) {
    if (value) {
        setStyle("border-color", "black");
        setStyle("border-width", "5px");
        setStyle("border-style", "solid");
    }
    else {
        setStyle("border-color", "black");
        setStyle("border-width", "0px");
        setStyle("border-style", "solid");
    }
    applyStyle();
    this->is_highlighted=value;
}

bool Square::get_highlighted() const {
    return this->is_highlighted;
}

/**
  * Create the handler for clicking this button.
  * You need to only highlight this button. Make use of the static variable highlighted.
  */
void Square::gridSelected() {
    set_highlighted(true);
    if (highlighted != nullptr)
        highlighted->set_highlighted(false);
    highlighted = this;
}
