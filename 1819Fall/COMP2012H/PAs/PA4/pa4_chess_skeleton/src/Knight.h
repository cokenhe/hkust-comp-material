#ifndef KNIGHT_H_
#define KNIGHT_H_

#include "ChessPiece.h"

class Knight : public ChessPiece {
public:
    const static char IMAGE_WHITE = 'N';
	const static char IMAGE_BLACK = 'n';

	Knight(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]);
	virtual char getImage() const override;
	virtual void calculatePotentialMoves(bool potentialMoves[8][8]) const override;
};

#endif /* KNIGHT_H_ */
