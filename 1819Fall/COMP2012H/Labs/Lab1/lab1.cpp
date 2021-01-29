#include <iostream>
using namespace std;

// Configs
const int MAX_HEALTH = 4;
enum player { PLAYER1, PLAYER2 };
enum userStatus {HEALTH, ROCKETS, BARRIERS};

// Global variables`
player currentPlayer;
int status[2][3] = {{MAX_HEALTH, 0, 0}, {MAX_HEALTH, 0, 0}};

player getWinner();

void displayStatus();

void displayActions();

void handleAction();

void handleGiveUp(int);

void handleBuildBarrier(int);

void handleBuildRocket(int);

void handleLaunchRockets(int);

void debugLog(int oppositePlayer) {
    cout << "/* --------------------DEBUG AREA-------------------" << endl << endl;
    displayStatus();
    cout << " * currentPlayer health: " << status[currentPlayer][HEALTH] << endl;
    cout << " * oppositePlayer health: " << status[oppositePlayer][HEALTH] << endl;
    cout << " * --------------------DEBUG AREA------------------- */" << endl;
}

int main() {
    int oppositePlayer;
    do {
        currentPlayer = getWinner();
        handleAction();

        oppositePlayer = (static_cast<int>(currentPlayer) + 1) % 2;

        // debugLog(oppositePlayer);
    } while (status[currentPlayer][HEALTH] > 0 && status[oppositePlayer][HEALTH] > 0);

    return 0;
};

player getWinner() {
    int inputP1, inputP2;

    do {
        do {
            cout << "Player1: Please choose between rock(1), paper(2) or scissor(3): ";
            cin >> inputP1;
        } while (inputP1 < 1 || inputP1 > 3);

        do {
            cout << "Player2: Please choose between rock(1), paper(2) or scissor(3): ";
            cin >> inputP2;
        } while (inputP2 < 1 || inputP2 > 3);

        if (inputP1 == inputP2) 
            cout << "Its a draw. Do it again." << endl;
        
        cout << endl;
    } while (inputP1 == inputP2);

    switch (inputP1 - inputP2) {
        case 1: case -2:
            return PLAYER1;
        case 2: case -1:
            return PLAYER2;
        default:
            cout << "Something unexpected happened: SUPER!!" << endl;
            exit(0);
    }
};

void displayStatus() {
    cout << "--------------------------------------------------" << endl;
    cout << "Player1: Health x " << status[PLAYER1][HEALTH] << " | Rockets x " << status[PLAYER1][ROCKETS] << " | Barriers x " << status[PLAYER1][BARRIERS] << endl;
    cout << "Player2: Health x " << status[PLAYER2][HEALTH] << " | Rockets x " << status[PLAYER2][ROCKETS] << " | Barriers x " << status[PLAYER2][BARRIERS] << endl;
    cout << "--------------------------------------------------" << endl << endl;
};

void displayActions() {
    displayStatus();
    cout << "Player" << static_cast<int>(currentPlayer) + 1 << " choose any one action below:" << endl;
    cout << "0: Give up." << endl;
    cout << "1: Build Barriers." << endl;
    cout << "2: Build Rockets." << endl;
    cout << "3. Launch Rockets." << endl;
};

void handleAction() {
    displayActions();
    int input;
    int userIndex = static_cast<int>(currentPlayer) + 1; // 1 and 2
    cin >> input;
    
    switch (input) {
        case 0:
            handleGiveUp(userIndex);
            break;
        case 1:
            handleBuildBarrier(userIndex);
            break;
        case 2:
            handleBuildRocket(userIndex);
            break;
        case 3:
            handleLaunchRockets(userIndex);
            break;
        default:
            cout << "Invalid input. Please enter again." << endl;
            handleAction();
            break;
    }
};

void handleGiveUp(int userIndex) {
    cout << "Player" << userIndex << " give up." << endl;
    cout << "Congratz! Player" << userIndex % 2 + 1 <<". You win!" << endl;
    status[currentPlayer][HEALTH] = 0;
};

void handleBuildBarrier(int userIndex) {
    if (status[currentPlayer][BARRIERS] >= 5) {
        cout << "Player" << userIndex << ", you can't build any more barriers." << endl;
        handleAction();
        return;
    }
    cout << "Player" << userIndex << ", you now have " << ++status[currentPlayer][BARRIERS] << " barriers." << endl;
};

void handleBuildRocket(int userIndex) {
    if (status[currentPlayer][ROCKETS] >= 3) {
        cout << "Player" << userIndex << ", you can't build any more rockets." << endl;
        handleAction();
        return;
    }
    cout << "Player" << userIndex << ", you now have " << ++status[currentPlayer][ROCKETS] << " rockets." << endl;
};

void handleLaunchRockets(int userIndex) {
    if (status[currentPlayer][ROCKETS] <= 0) {
        cout << "Player" << userIndex << ", you have no rockets to launch." << endl;
        handleAction();
        return;
    }

    const int oppositePlayer = (userIndex) % 2;
    status[oppositePlayer][BARRIERS] -= status[currentPlayer][ROCKETS];
    if (status[oppositePlayer][BARRIERS] < 0) {
        status[oppositePlayer][HEALTH] += status[oppositePlayer][BARRIERS];
        status[oppositePlayer][BARRIERS] = 0;
        status[currentPlayer][ROCKETS] = 0;
    }
    cout << "Player" << oppositePlayer + 1 << " has " << status[oppositePlayer][BARRIERS] << " barriers left." << endl;
    cout << "Player" << oppositePlayer + 1 << " has " << status[oppositePlayer][HEALTH] << "/4 health left." << endl;

    if (status[oppositePlayer][HEALTH] <= 0) 
        cout << "Congratz! Player" << userIndex << ". You win!" << endl;
};