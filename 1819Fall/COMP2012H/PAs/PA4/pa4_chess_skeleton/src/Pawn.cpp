#include "Pawn.h"


/****************************
 * Constructor
 ****************************/

Pawn::Pawn(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]) :
    ChessPiece(player, row, col, chessBoard) {}


char Pawn::getImage() const {
    return player == WHITE ? IMAGE_WHITE : IMAGE_BLACK;
}

void Pawn::calculatePotentialMoves(bool potentialMoves[8][8]) const {}
void Pawn::calculatePotentialCaptures(bool potentialCaptures[8][8]) const {}
ChessPiece* Pawn::move(int row, int col) {} // First Move and En Passant


/****************************
 * En Passant
 ****************************/

bool Pawn::hasFirstMoved() const {
    return firstMoved;
}
bool Pawn::hasCapturedEnPassant(int& rowEnPassant, int& colEnPassant) const {
    rowEnPassant = this->rowEnPassant;
    colEnPassant = this->colEnPassant;
}
void Pawn::passTurnEnPassant() {
    firstMoved = false;
}
