#ifndef PAWN_H_
#define PAWN_H_

#include "ChessPiece.h"

class Pawn : public ChessPiece {
public:
    const static char IMAGE_WHITE = 'P';
	const static char IMAGE_BLACK = 'p';

    Pawn(Player player, int row, int col, ChessPiece* (*chessBoard)[8][8]);
	virtual char getImage() const override;

	virtual void calculatePotentialMoves(bool potentialMoves[8][8]) const override;
	virtual void calculatePotentialCaptures(bool potentialCaptures[8][8]) const override;
    virtual ChessPiece* move(int row, int col) override; // First Move and En Passant.
    bool hasFirstMoved() const;
    bool hasCapturedEnPassant(int& rowEnPassant, int& colEnPassant) const;
    void passTurnEnPassant();

private:
    bool hasMoved; // Pawn has First Move if still have not moved the whole game.
    bool firstMoved; // En Passant only valid for the immediate next turn.
    bool capturedEnPassant;
    int rowEnPassant; // Row of enemy Pawn captured En Passant.
    int colEnPassant; // Col of enemy Pawn captured En Passant.
};

#endif /* PAWN_H_ */
