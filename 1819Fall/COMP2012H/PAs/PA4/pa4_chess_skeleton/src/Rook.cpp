#include "Rook.h"


/****************************
 * Constructor
 ****************************/

Rook::Rook(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]) :
    ChessPiece(player, row, col, chessBoard) {}



char Rook::getImage() const {
    return player == WHITE ? IMAGE_WHITE : IMAGE_BLACK;
}

void Rook::calculatePotentialMoves(bool potentialMoves[8][8]) const {}
ChessPiece* Rook::move(int row, int col) {}

bool Rook::canCastle() const{
    return !hasMoved;
}