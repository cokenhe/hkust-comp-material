#include "ChessGame.h"

/******************************
 * Constructor and Destructor *
 ******************************/

ChessGame::ChessGame() :
    game_window(new GameWindow()),
    whiteKing(new King(Player::WHITE, 7, 3, &chessBoard)),
    blackKing(new King(Player::BLACK, 0, 3, &chessBoard)),
    pawnFirstMove(nullptr),
    selectedChessPiece(nullptr),
    currentPlayer(Player::WHITE)
{
    for (int i = 0; i < 8; ++i)
        for (int j = 0; j < 8; ++j)
            selectedChessPieceValidMoves[i][j] = false;

    chessBoard[0][0] = new Rook(BLACK, 0, 0, &chessBoard);
    chessBoard[0][7] = new Rook(BLACK, 0, 7, &chessBoard);
    chessBoard[7][0] = new Rook(WHITE, 7, 0, &chessBoard);
    chessBoard[7][7] = new Rook(WHITE, 7, 7, &chessBoard);

    chessBoard[0][1] = new Knight(BLACK, 0, 1, &chessBoard);
    chessBoard[0][6] = new Knight(BLACK, 0, 6, &chessBoard);
    chessBoard[7][1] = new Knight(WHITE, 7, 1, &chessBoard);
    chessBoard[7][6] = new Knight(WHITE, 7, 6, &chessBoard);
    
    chessBoard[0][2] = new Bishop(BLACK, 0, 2, &chessBoard);
    chessBoard[0][5] = new Bishop(BLACK, 0, 5, &chessBoard);
    chessBoard[7][2] = new Bishop(WHITE, 7, 2, &chessBoard);
    chessBoard[7][5] = new Bishop(WHITE, 7, 5, &chessBoard);

    chessBoard[0][4] = new Queen(BLACK, 0, 4, &chessBoard);
    chessBoard[7][4] = new Queen(WHITE, 7, 4, &chessBoard);
    
    chessBoard[0][3] = blackKing;
    chessBoard[7][3] = whiteKing;

    for (int i = 0; i < 8; ++i) {
        chessBoard[1][i] = new Pawn(BLACK, 0, i, &chessBoard);
        chessBoard[6][i] = new Pawn(WHITE, 7, i, &chessBoard);
    }
}
ChessGame::~ChessGame() {}



/********************
 * ChessBoard State *
 ********************/

King* ChessGame::getPlayerKing(Player player) const {}
bool ChessGame::hasValidMoves(Player player) const {}
void ChessGame::calculateValidMoves(ChessPiece* chessPiece, bool validMoves[8][8]) const {}
void ChessGame::promotePawn(Pawn* pawn) {}



/******************
 * ChessGame Flow *
 ******************/

void ChessGame::processUserInput(int row, int col) {}
void ChessGame::selectChessPiece(int row, int col) {}
void ChessGame::moveSelectedChessPiece(int row, int col) {}
void ChessGame::nextPlayerTurn() {}



/**************
 * Graphic UI *
 **************/

GameWindow* ChessGame::get_game_window() const {}
void ChessGame::startGraphicUI() {}
void ChessGame::displaySelectedChessPieceValidMoves() const {}
void ChessGame::displayCurrentPlayerCheck() const {}
void ChessGame::updateCastlingGUI() const {}



/**************
 * Console UI *
 **************/

void ChessGame::startConsoleUI() {
    do {
        displayChessBoardConsole();
        cout << ((currentPlayer == WHITE)? "White" : "Black") << "'s Turn." << endl;

        int row, col;
        char confirm;
        do {
            do {
                do {
                    cout << "Select your Chess Piece (col, row): ";
                    cin >> col >> row; col -= 1; row -=1;
                    if ((row < 0) || (row >= 8) || (col < 0) || (col >= 8)) continue;

                    if ((chessBoard[row][col] != nullptr) && (chessBoard[row][col]->player != currentPlayer)) {
                        selectedChessPiece = nullptr;
                    }
                    else {
                        selectedChessPiece = chessBoard[row][col];
                    }
                    calculateValidMoves(selectedChessPiece, selectedChessPieceValidMoves);
                } while (selectedChessPiece == nullptr);
                cout << endl;
                displaySelectedChessPieceValidMovesConsole();

                cout << "Confirm selection? (Y/N) ";
                cin >> confirm;
            } while ((confirm != 'Y') && (confirm != 'y'));

            cout << "Make your Move (col, row): ";
            cin >> col >> row; col -= 1; row -=1;
            cout << endl;
        } while ((row < 0) || (row >= 8) || (col < 0) || (col >= 8) || !selectedChessPieceValidMoves[row][col]);
        ChessPiece* occupyingChessPiece = selectedChessPiece->move(row, col);
        delete occupyingChessPiece;

        selectedChessPiece = nullptr;
        fill_n(&selectedChessPieceValidMoves[0][0], 64, false); // Reset all to false.
        currentPlayer = ((currentPlayer == WHITE)? BLACK : WHITE);
        getPlayerKing(currentPlayer)->updateCheck();
    } while (hasValidMoves(currentPlayer));

    displayChessBoardConsole();
    if (getPlayerKing(currentPlayer)->isCheck()) {
        cout << ((currentPlayer == WHITE)? "White" : "Black") << " Checkmate! " << ((currentPlayer == WHITE)? "Black" : "White") << " wins!" << endl;
    }
    else {
        cout << "Stalemate!" << endl;
    }
}

void ChessGame::displayChessBoardConsole() const {
    cout << " |---|---|---|---|---|---|---|---|\n";
    for (int row = 7; row >= 0; row--) {
        cout << row + 1;
        for (int col = 0; col < 8; col++) {
            cout << "|";

            if (chessBoard[row][col] == nullptr) {
                cout << "   ";
            }
            else {
                if ((chessBoard[row][col] == getPlayerKing(currentPlayer)) && getPlayerKing(currentPlayer)->isCheck()) {
                    cout << "!" << chessBoard[row][col]->getImage() << "!";
                }
                else {
                    cout << " " << chessBoard[row][col]->getImage() << " ";
                }
            }
        }
        cout << "|\n";
        cout << " |---|---|---|---|---|---|---|---|\n";
    }
    cout << " | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n";
    cout << endl;
}

void ChessGame::displaySelectedChessPieceValidMovesConsole() const {
    cout << " |---|---|---|---|---|---|---|---|\n";
    for (int row = 7; row >= 0; row--) {
        cout << row + 1;
        for (int col = 0; col < 8; col++) {
            cout << "|";
            if (chessBoard[row][col] == nullptr) {
                if (selectedChessPieceValidMoves[row][col]) {
                    cout << "< >";
                }
                else {
                    cout << "   ";
                }
            }
            else {
                if (selectedChessPieceValidMoves[row][col] || ((row == selectedChessPiece->getRow()) && (col == selectedChessPiece->getCol()))) {
                    cout << "<" << chessBoard[row][col]->getImage() << ">";
                }
                else if ((chessBoard[row][col] == getPlayerKing(currentPlayer)) && getPlayerKing(currentPlayer)->isCheck()) {
                    cout << "!" << chessBoard[row][col]->getImage() << "!";
                }
                else {
                    cout << " " << chessBoard[row][col]->getImage() << " ";
                }
            }
        }
        cout << "|\n";
        cout << " |---|---|---|---|---|---|---|---|\n";
    }
    cout << " | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n";
    cout << endl;
}
