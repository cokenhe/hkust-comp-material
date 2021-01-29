#include "King.h"

/****************************
 * Constructor
 ****************************/

King::King(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]) :
    ChessPiece(player, row, col, chessBoard) {}



char King::getImage() const {
    return player == WHITE ? IMAGE_WHITE : IMAGE_BLACK;
}

void King::calculatePotentialMoves(bool potentialMoves[8][8]) const {
    int initialRow = row - 1;
    int initialCol = col - 1;

    setPotentialsTo(false, potentialMoves);

    // 8 surrounddings
    for (int r = initialRow; r < initialRow + 3; ++r) {
        if (r < 0 || r >= 8) continue;
        for (int c = initialCol; c < initialCol + 3; ++c) {
            if (c < 0 || c >= 8) continue;
            if (r == row && c == col) continue;

            potentialMoves[r][c] = true;
        }
    }

    // Castling 
    potentialMoves[row][col - 2] = canCastleGivenSide(KING_SIDE);
    potentialMoves[row][col + 3] = canCastleGivenSide(QUEEN_SIDE);

}
void King::calculatePotentialCaptures(bool potentialCaptures[8][8]) const {
    int initialRow = row - 1;
    int initialCol = col - 1;

    setPotentialsTo(false, potentialCaptures);

    // 8 surrounddings
    for (int r = initialRow; r < initialRow + 3; ++r) {
        if (r < 0 || r >= 8) continue;
        for (int c = initialCol; c < initialCol + 3; ++c) {
            if (c < 0 || c >= 8) continue;
            if (r == row && c == col) continue;

            potentialCaptures[r][c] = true;
        }
    }
}


ChessPiece* King::move(int row, int col) {}

bool King::calculatePotentialCheck() const {}
void King::updateCheck() {}
bool King::isCheck() const {
    return check;
}


/****************************
 * Castling
 ****************************/

bool King::hasCastled() const {
    return hasCastledKingSide() || hasCastledQueenSide();
}

bool King::hasCastledKingSide() const {
    return castledKingSide;
}
bool King::hasCastledQueenSide() const {
    return castledQueenSide;
}


/****************************
 * Private function
 ****************************/

bool King::canCastleGivenSide(CastlingSide castlingSide) const {
    if (hasMoved) return false;

    // King and Castle not moved
    // No obstacle between
    // No check between
}