#include <QFont>
#include <sstream>

#include "square.h"

using std::string;
using std::ostringstream;

extern QFont* chess_font;

Square::Square(QWidget* parent, int _row, int _col) :
    QPushButton(parent),
    row(_row),
    col(_col),
    is_highlighted(false),
    piece(' ')
{
    this->render();
    connect(this, &Square::clicked, this, &Square::clicked_handler);
}

void Square::render() {
    setGeometry(QRect(OFFSET_X + SQUARE_WIDTH * this->col, OFFSET_Y + SQUARE_HEIGHT * (7-this->row), SQUARE_WIDTH, SQUARE_HEIGHT));
    setVisible(true);
    setFlat(true);
    setAutoFillBackground(true);
    setFont(*chess_font);
    setText("");
    setStyle("border-color", "black");
    setStyle("border-width", "0px");
    setStyle("border-style", "solid");
    if ((this->row + this->col) % 2 == 0)
        setStyle("background-color", "rgb(200,200,200)");
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

void Square::set_highlighted(bool value, string color) {
    if (value) {
        setStyle("border-color", color);
        setStyle("border-width", "5px");
        setStyle("border-style", "solid");
    }
    else {
        setStyle("border-color", color);
        setStyle("border-width", "0px");
        setStyle("border-style", "solid");
    }
    applyStyle();
    this->is_highlighted=value;
}

bool Square::get_highlighted() const {
    return this->is_highlighted;
}

void Square::clicked_handler() {
    emit clicked_with_pos(this->row, this->col);
}

QString Square::get_chess_icon(char i) {
    switch(i) {
    case ' ': return "";
    case 'B': return "b";
    case 'K': return "k";
    case 'k': return "l";
    case 'n': return "m";
    case 'N': return "n";
    case 'p': return "o";
    case 'P': return "p";
    case 'Q': return "q";
    case 'R': return "r";
    case 'r': return "t";
    case 'b': return "v";
    case 'q': return "w";
    default: return "";
    }
}

void Square::set_piece(char i) {
    // setStyleSheet('QPushButton {color: black;}')
    setText(get_chess_icon(i));
    this->piece = i;
}

char Square::get_piece() const {
    return this->piece;
}
