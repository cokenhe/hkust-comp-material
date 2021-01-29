#ifndef BISHOP_H_
#define BISHOP_H_

#include "ChessPiece.h"

class Bishop : public ChessPiece {
public:
    const static char IMAGE_WHITE = 'B';
	const static char IMAGE_BLACK = 'b';

	Bishop(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]);
	virtual char getImage() const override;
	virtual void calculatePotentialMoves(bool potentialMoves[8][8]) const override;
};

#endif /* BISHOP_H_ */
