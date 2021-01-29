#include "Knight.h"


/****************************
 * Constructor
 ****************************/

Knight::Knight(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]) :
    ChessPiece(player, row, col, chessBoard) {}

char Knight::getImage() const {
    return player == WHITE ? IMAGE_WHITE : IMAGE_BLACK;
}
void Knight::calculatePotentialMoves(bool potentialMoves[8][8]) const {

}