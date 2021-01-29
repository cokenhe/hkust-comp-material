#ifndef ROOK_H_
#define ROOK_H_

#include "ChessPiece.h"

class Rook : public ChessPiece {
public:
    const static char IMAGE_WHITE = 'R';
	const static char IMAGE_BLACK = 'r';

	Rook(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]);
	virtual char getImage() const override;

    virtual void calculatePotentialMoves(bool potentialMoves[8][8]) const override;
    virtual ChessPiece* move(int row, int col) override;
    bool canCastle() const;

private:
    bool hasMoved;
};

#endif /* ROOK_H_ */
