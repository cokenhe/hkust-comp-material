#include <iostream>
#include <iomanip>
#include <cstdlib>
#include <time.h>

using namespace std;

int grid[4][4] = {{0}};
int grid_copy[4][4] = {{0}};
const int END_GOAL = 2048;
const int MAX_WIDTH = 7;

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

int getRandomNumber() {
	int rand_num = rand() % 10;
	if (rand_num < 2) {
		return 4;
	}
	return 2;
}

void generate() {
	// Locate empty grid spaces, if any.
	int num_empty_spaces = 0;
	int empty_space_indices[16] = {-1}; // -1 to represent an invalid grid index.
	for (int i = 0; i < 4; i++) {
		for (int j = 0; j < 4; j++) {
			if (grid[i][j] == 0) {
				empty_space_indices[num_empty_spaces] = (i * 4) + j; // 2D to 1D array index transformation, row-major order.
				num_empty_spaces++;
			}
		}
	}
	
	// Do nothing if no empty grid space.
	if (num_empty_spaces == 0) {
		return;
	}
	
	// Place the 2-or-4 in one of the empty grid spaces randomly.
	int random_empty_space = rand() % num_empty_spaces;
	int index_i = empty_space_indices[random_empty_space] / 4; // 1D to 2D array index transformation, row-major order, integer division.
	int index_j = empty_space_indices[random_empty_space] % 4; // 1D to 2D array index transformation, row-major order, integer modulo.
	grid[index_i][index_j] = getRandomNumber();
}

bool win() {
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			if(grid[i][j] == END_GOAL) {
				return true;
			}
		}
	}

	return false;
}

void combineTo(int i1, int j1, int i2, int j2, int grid[4][4]) {
	grid[i1][j1] += grid[i2][j2];
	grid[i2][j2] = 0;
}

void onSwipeLeft(int grid[4][4]) {
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			if(grid[i][j] == 0) {
				continue;
			}

			// Combine Loop.
			for(int k = j + 1; k < 4; k++) {
				if(grid[i][k] == 0) {
					continue;
				}

				if(grid[i][j] == grid[i][k]) {
					combineTo(i, j, i, k, grid);
					break;
				}

				else {
					break;
				}
			}

			// Shift Position Loop
			for (int h = j - 1; h >= 0; h--) {
				if ((grid[i][h] == 0) && ((h == 0) || (grid[i][h - 1] != 0))) {
					grid[i][h] = grid[i][j];
					grid[i][j] = 0;
					break;
				}
			}
		}
	}
}

void onSwipeRight(int grid[4][4]) {
	for(int i = 0; i < 4; i++) {
		for(int j = 3; j >= 0; j--) {
			if(grid[i][j] == 0) {
				continue;
			}

			// Combine Loop.
			for(int k = j - 1; k >= 0; k--) {
				if(grid[i][k] == 0) {
					continue;
				}

				if(grid[i][j] == grid[i][k]) {
					combineTo(i, j, i, k, grid);
					break;
				}

				else {
					break;
				}
			}

			// Shift Position Loop
			for (int h = j + 1; h < 4; h++) {
				if ((grid[i][h] == 0) && ((h == 3) || (grid[i][h + 1] != 0))) {
					grid[i][h] = grid[i][j];
					grid[i][j] = 0;
					break;
				}
			}
		}
	}
}

void onSwipeUp(int grid[4][4]) {
	for(int j = 0; j < 4; j++) {
		for(int i = 0; i < 4; i++) {
			if(grid[i][j] == 0) {
				continue;
			}

			// Combine Loop.
			for(int k = i + 1; k < 4; k++) {
				if(grid[k][j] == 0) {
					continue;
				}

				if(grid[i][j] == grid[k][j]) {
					combineTo(i, j, k, j, grid);
					break;
				}

				else {
					break;
				}
			}

			// Shift Position Loop
			for (int h = i - 1; h >= 0; h--) {
				if ((grid[h][j] == 0) && ((h == 0) || (grid[h - 1][j] != 0))) {
					grid[h][j] = grid[i][j];
					grid[i][j] = 0;
					break;
				}
			}
		}
	}
}

void onSwipeDown(int grid[4][4]){
	for(int j = 0; j < 4; j++) {
		for(int i = 3; i >= 0; i--) {
			if(grid[i][j] == 0) {
				continue;
			}

			// Combine Loop.
			for(int k = i - 1; k >= 0; k--) {
				if(grid[k][j] == 0) {
					continue;
				}

				if(grid[i][j] == grid[k][j]) {
					combineTo(i, j, k, j, grid);
					break;
				}

				else {
					break;
				}
			}

			// Shift Position Loop
			for (int h = i + 1; h < 4; h++) {
				if ((grid[h][j] == 0) && ((h == 3) || (grid[h + 1][j] != 0))) {
					grid[h][j] = grid[i][j];
					grid[i][j] = 0;
					break;
				}
			}
		}
	}
}

void copy_grid(int grid1[4][4], int grid2[4][4]) {
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			grid1[i][j] = grid2[i][j];
		}
	}
}

bool gridNotEqual(int grid1[4][4], int grid2[4][4]) {
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			if(grid1[i][j] != grid2[i][j]) {
				return true;
			}
		}
	}

	return false;
}



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
		cout << "D: Swipe right" << endl;
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
