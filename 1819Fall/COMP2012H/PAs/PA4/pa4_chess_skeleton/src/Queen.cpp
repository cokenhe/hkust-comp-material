#include "Queen.h"

/****************************
 * Constructor
 ****************************/

Queen::Queen(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]) :
    ChessPiece(player, row, col, chessBoard) {}


char Queen::getImage() const {
    return player == WHITE ? IMAGE_WHITE : IMAGE_BLACK;
}

void Queen::calculatePotentialMoves(bool potentialMoves[8][8]) const {}