#include "Bishop.h"


/****************************
 * Constructor
 ****************************/

Bishop::Bishop(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]) :
    ChessPiece(player, row, col, chessBoard) {}



char Bishop::getImage() const {
    return player == WHITE ? IMAGE_WHITE : IMAGE_BLACK;
}

void Bishop::calculatePotentialMoves(bool potentialMoves[8][8]) const {}