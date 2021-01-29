#include "ChessPiece.h"

/****************************
 * Constructor
 ****************************/

ChessPiece::ChessPiece(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]) : 
    player(player),
    row(row),
    col(col),
    chessBoard(chessBoard) {}



/****************************
 * Getter functions
 ****************************/

int ChessPiece::getCol() const {
    return col;
}

int ChessPiece::getRow() const {
    return row;
}

bool ChessPiece::isEnemyChessPiece(const ChessPiece* const chessPiece) const {

}

void ChessPiece::calculatePotentialCaptures(bool potentialCaptures[8][8]) const { // Same as calculatePotentialCaptures, except for Pawn.
    calculatePotentialMoves(potentialCaptures);
}

void ChessPiece::potentialMove(int row, int col) { // Some ChessPiece types care if they haven't been moved during the whole game.

}

void ChessPiece::undoPotentialMove() {
    
}

ChessPiece* ChessPiece::move(int row, int col) { // Also updates chessBoard. If capture another ChessPiece, return the pointer so ChessBoard can remove it.
    this->row = row;
    this->col = col;

    return *chessBoard[row][col];
}

void setPotentialsTo(bool val, bool potentials[8][8]) {
    for (int i = 0; i < 8; ++i) 
        for (int j = 0; j < 8; ++j) 
            potentials[i][j] = val;
}