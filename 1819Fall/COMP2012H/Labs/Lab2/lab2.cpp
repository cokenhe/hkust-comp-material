#include <iostream>
#include <iomanip>
#include <cstdlib>
#include <ctime>

using namespace std;

int grid[4][4] = {{0}};
int grid_copy[4][4] = {{0}};
const int END_GOAL = 16;
const int MAX_WIDTH = 7;

enum Direction {UP, LEFT, DOWN, RIGHT};
const int directions[] = {-1, -1, 1, 1};

// This is the display output of the game.
void display() {
	cout << "\n\n";
	cout << left;
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			cout << setw(MAX_WIDTH) << grid[i][j];
		}
		cout << "\n\n";
	}
}

// 20% chance to return 4, 80% chance to return 2.
int getRandomNumber() {
	int rand_num = rand() % 10;
	if (rand_num < 2) {
		return 4;
	}
	return 2;
}

/* 
 * Self-defined helper function.
 * Look for the next element
 */
int getNextTarget(int& row, int& col, const Direction& dir) {
    do {
        switch (dir) {
            case UP: case DOWN:
                row += directions[dir]; break;
            case LEFT: case RIGHT:
                col += directions[dir]; break;
        }
        if (row < 0 || row > 3 || col < 0 || col > 3) return -1;
    } while (grid[row][col] == 0);
    return grid[row][col];
}

/*
 * Shift from (row, col) toward -dir
 * aka swipe to -dir
 */
void shift(int row, int col, const Direction dir) {
    int ctr = 0; 
    do {
        int _row = row, _col = col;
        const int nextInt = getNextTarget(_row, _col, dir);

        // printDebugStatement(row, col, _row, _col, nextInt);

        if (grid[row][col] == 0 && grid[_row][_col] != 0 && nextInt != -1) {

            // cout << '[' << row << ", " << col << "] <- [_" << _row << ", _" << _col << ']' << endl;

            grid[row][col] = nextInt;
            grid[_row][_col] = 0;
        }

        switch (dir) {
            case UP: case DOWN:
                row += directions[dir]; break;
            case LEFT: case RIGHT:
                col += directions[dir]; break;
        }
    } while (++ctr < 4);
}

void printDebugStatement(int row, int col, int _row, int _col, int nextInt) {
    cout << "grid[" << row << ", " << col << "]: " << grid[row][col] << " | "
        << "grid[" << _row << ", " << _col << "]: " << grid[_row][_col] << " | "
        << "nextInt: " << nextInt << endl;
}

/*
 * Task 1: Implement the generate function.
 *   - Generate one random number, of either 2 or 4, using the getRandomNumber function.
 *   - Place this number at any empty space on the grid randomly.
 *   - If the grid is full, just do nothing.
 */
void generate() {
	int position;
	bool isFull = true;
	for (int i = 0; isFull && i < 16; ++i) 
		if (grid[i / 4][i % 4] == 0) isFull = false;
	if (isFull) return;
	do {
		position = rand() % 16;
	} while (grid[position / 4][position % 4] != 0);
	grid[position / 4][position % 4] = getRandomNumber();
}

/*
 * Task 2: Implement the win function.
 *   - You win if there exists a number in the grid which is END_GOAL.
 *   - Return a boolean value on whether you win or not.
 */
bool win() {
	for (int i = 0; i < 16; ++i) 
		if (grid[i / 4][i % 4] == END_GOAL) return true;
	return false;
}

//This is a useful helper function to help you implement the following functions.
void combineTo(int i1, int j1, int i2, int j2, int grid[4][4]) {
	grid[i1][j1] += grid[i2][j2];
	grid[i2][j2] = 0;
}

/*
 * Task 3: Implement the swiping game mechanics. for each direction.
 *   - Implement for each swiping direction.
 *   - Follow the game rules for combining numbers and movement.
 */
void onSwipeLeft(int grid[4][4]) {
	for (int row = 0; row < 4; ++row) {
        for (int col = 0; col < 4; ++col) {
            if (grid[row][col] == 0) continue;
            int _row = row, _col = col;
            const int nextInt = getNextTarget(_row, _col, RIGHT);

            // printDebugStatement(row, col, _row, _col, nextInt);

            if (grid[row][col] == nextInt) combineTo(row, col, _row, _col, grid);
        }
        shift(row, 0, RIGHT);
    }
}

void onSwipeRight(int grid[4][4]) {
	for (int row = 0; row < 4; ++row) {
        for (int col = 3; col >= 0; --col) {
            if (grid[row][col] == 0) continue;
            int _row = row, _col = col;
            const int nextInt = getNextTarget(_row, _col, LEFT);

            // printDebugStatement(row, col, _row, _col, nextInt);

            if (grid[row][col] == nextInt) combineTo(row, col, _row, _col, grid);
        }
        shift(row, 3, LEFT);
    }
}

void onSwipeUp(int grid[4][4]) {
    for (int col = 0; col < 4; ++col) {
        for (int row = 0; row < 4; ++row) {
            if (grid[row][col] == 0) continue;
            int _row = row, _col = col;
            const int nextInt = getNextTarget(_row, _col, DOWN);

            // printDebugStatement(row, col, _row, _col, nextInt);

            if (grid[row][col] == nextInt) combineTo(row, col, _row, _col, grid);
        }
        shift(0, col, DOWN);
    }   
}

void onSwipeDown(int grid[4][4]){
    for (int col = 0; col < 4; ++col) {
        for (int row = 3; row >= 0; --row) {
            if (grid[row][col] == 0) continue;
            int _row = row, _col = col;
            const int nextInt = getNextTarget(_row, _col, UP);

            // printDebugStatement(row, col, _row, _col, nextInt);

            if (grid[row][col] == nextInt) combineTo(row, col, _row, _col, grid);
        }
        shift(3, col, UP);
    }   
}

/*
 * Task 4: Implement the copy_grid function and the isNotEqual function.
 *   - copy_grid(): grid1 becomes a copy of grid2.
 *   - isNotEqual(): Checks for whether or not grid1 and grid2 is not equal.
 */
void copy_grid(int grid1[4][4], int grid2[4][4]) {
	for (int i = 0; i < 16; ++i) 
		grid1[i / 4][i % 4] = grid2[i / 4][i % 4];
}

bool gridNotEqual(int grid1[4][4], int grid2[4][4]) {
	for (int i = 0; i < 16; ++i) 
		if (grid2[i / 4][i % 4] != grid1[i / 4][i % 4]) return true;
	return false;
}



// Game Loop.
int main() {
	srand(time(NULL)); // Initialize pseudo-random number generator.
	generate();
	copy_grid(grid_copy, grid);

	while(!win()) {
		display();

		cout << "What do you want to do?" << endl;
		cout << "W: Swipe up." << endl;
		cout << "A: Swipe left." << endl;
		cout << "S: Swipe down." << endl;
		cout << "D: Swipe right." << endl;
		cout << "Q: Quit." << endl;

		char input;
		cin >> input;

		switch (input) {
		  case 'W':
		  case 'w':
			onSwipeUp(grid);
			break;

		  case 'A':
		  case 'a':
			onSwipeLeft(grid);
			break;

		  case 'S':
		  case 's':
			onSwipeDown(grid);
			break;

		  case 'D':
		  case 'd':
			onSwipeRight(grid);
			break;

		  case 'Q':
		  case 'q':
			return 0;

		  default:
			cout << "Invalid input." << endl;
			break;
		}

		if (gridNotEqual(grid, grid_copy)) {
			generate();
			copy_grid(grid_copy, grid);
		}
	}

	display();
	cout << "Nice!" << endl;
}
