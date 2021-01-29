#ifndef QUEEN_H_
#define QUEEN_H_

#include "ChessPiece.h"

class Queen : public ChessPiece {
public:
    const static char IMAGE_WHITE = 'Q';
	const static char IMAGE_BLACK = 'q';

	Queen(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]);
	virtual char getImage() const override;
	virtual void calculatePotentialMoves(bool potentialMoves[8][8]) const override;
};

#endif /* QUEEN_H_ */
