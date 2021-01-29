#include <iostream>
#include <iomanip>
#include <cstdlib>
#include <ctime>

using namespace std;

int grid[4][4] = {{0}};
int grid_copy[4][4] = {{0}};
const int END_GOAL = 16;
const int MAX_WIDTH = 7;

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
 * Task 1: Implement the generate function.
 *   - Generate one random number, of either 2 or 4, using the getRandomNumber function.
 *   - Place this number at any empty space on the grid randomly.
 *   - If the grid is full, just do nothing.
 */
void generate() {
    int empty[16];
    int count = 0;
    for (int i = 0; i < 4; ++i)
        for (int j = 0; j < 4; ++j)
            if (grid[i][j] == 0)
                empty[count++] = i * 4 + j;
    if (count == 0)
        return;
    int x = empty[rand() % count];
    grid[x / 4][x % 4] = getRandomNumber();
}

/*
 * Task 2: Implement the win function.
 *   - You win if there exists a number in the grid which is END_GOAL.
 *   - Return a boolean value on whether you win or not.
 */
bool win() {
    for (int i = 0; i < 4; ++i)
        for (int j = 0; j < 4; ++j)
            if (grid[i][j] == END_GOAL)
                return true;
    return false;
}

/*
 * Task 3: Implement the swiping game mechanics. for each direction.
 *   - Implement for each swiping direction.
 *   - Follow the game rules for combining numbers and movement.
 */

void combine(int* line[4]) {
    int i = 0;
    while (i < 3) {
        while (i < 3 && *line[i] == 0)
            ++i;
        int j = i + 1;
        while (j < 4 && *line[j] == 0)
            ++j;
        if (j < 4 && *line[j] == *line[i]) {
            *line[i] += *line[j];
            *line[j] = 0;
            ++j;
        }
        i = j;
    }
}

void collapse(int* line[4]) {
    int i = 0;
    int j = 0;
    while (i < 4) {
        if (*line[i] != 0)
            *line[j++] = *line[i];
        ++i;
    }
    while (j < 4) {
        *line[j] = 0;
        ++j;
    }
}

void swipe(int* line[4]) {
    combine(line);
    collapse(line);
}

void onSwipeLeft(int grid[4][4]) {
    int* line[4];
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < 4; ++j)
            line[j] = &grid[i][j];
        swipe(line);
    }
}

void onSwipeRight(int grid[4][4]) {
    int* line[4];
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < 4; ++j)
            line[j] = &grid[i][3 - j];
        swipe(line);
    }
}

void onSwipeUp(int grid[4][4]) {
    int* line[4];
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < 4; ++j)
            line[j] = &grid[j][i];
        swipe(line);
    }
}

void onSwipeDown(int grid[4][4]) {
    int* line[4];
    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < 4; ++j)
            line[j] = &grid[3 - j][i];
        swipe(line);
    }
}

/*
 * Task 4: Implement the copy_grid function and the isNotEqual function.
 *   - copy_grid(): grid1 becomes a copy of grid2.
 *   - isNotEqual(): Checks for whether or not grid1 and grid2 is not equal.
 */
void copy_grid(int grid1[4][4], int grid2[4][4]) {
    for (int i = 0; i < 4; ++i)
        for (int j = 0; j < 4; ++j)
            grid1[i][j] = grid2[i][j];
}

bool gridNotEqual(int grid1[4][4], int grid2[4][4]) {
    for (int i = 0; i < 4; ++i)
        for (int j = 0; j < 4; ++j)
            if (grid1[i][j] != grid2[i][j])
                return true;
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
