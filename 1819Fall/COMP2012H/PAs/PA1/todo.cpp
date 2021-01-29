//
//  COMP 2012H Programming Assignment 1: Sudoku
//  Filename: todo.cpp
//  - This is the file you need to submit to Canvas.
//  - Remember to create a zip file with this file.
//  - The zip file should be named todo_<STUDENTID>.zip.
//

#include <cstdlib>
#include <ctime>
#include <cstring>
#include "helper.h"
#include "todo.h"



/*----------------------------------------Customized Helper Functions--------------------------------------*/

struct box {
    int row;
    int col;
    int value;
};

/***********************************************************************
 * Change letter to upper case
 ***********************************************************************/

void to_upper_case(char& letter) {
    const int value = static_cast<int>(letter);

    if (value >= 65 && value <= 90) return;

    if (value >=97 && value <= 122) 
        letter = static_cast<char>(value - 32);
}

/***********************************************************************
 * Get the numberic coordinate value from letter
 ***********************************************************************/

int letter_to_index(char& letter){
    to_upper_case(letter);
    return static_cast<int>(letter) - 65;
}

/***********************************************************************
 * Advance function of get_coordinate(char&, int&);
 * Return - index(0 - 8) of coordinates
 ***********************************************************************/

void get_coordinate_index(char& letter, int& number, int& col, int & row) {
    cout << "Enter the coordinates of the cell: ";
    cin >> letter >> number;
    col = letter_to_index(letter);
	row = number - 1;
}

/***********************************************************************
 * Get the next position that is empty
 * Return - true if there is empty position
 *        - false if no empty position found
 ***********************************************************************/

bool get_next_position(const char grid[][9], int& row, int& col) {
    for (int i = 0; i < 81; ++i) {
        row = i / 9;
        col = i % 9;
        if (grid[row][col] == ' ') return true;
    }
    return false;
}

/***********************************************************************
 * Get the available values for the specific position
 * Return - true if there is available value(s)
 *        - false if no any available value
 ***********************************************************************/

bool get_available_value(const char grid[][9], const int& row, const int& col, char values[]) {
    int ctr = 0;
    for (int val = 1; val <= 9; ++val) {
        if (input_is_valid(grid, val, row, col)) 
            values[ctr++] = static_cast<char>(val + 48);
    }
    values[ctr] = '\0';

    return (ctr == 0) ? false : true;
}

/***********************************************************************
 * Get the number of empty space in grid
 ***********************************************************************/

int get_empty_space(const char grid[][9]) {
    int ctr = 0;
    for (int i = 0; i < 81; ++i) {
        const int row = i / 9;
        const int col = i % 9;
        if (grid[row][col] == ' ') ++ctr;
    }
    
    return ctr;
}

/***********************************************************************
 * Doing the same thing as Task 5, but return # of solution 
 ***********************************************************************/

int solution_counter(char grid[][9]) {
    int ctr = 0;
	if (check_end_game(grid)) return 1;

	int row, col;
	char values[10];
	get_next_position(grid, row, col);

	if (!get_available_value(grid, row, col, values)) return 0;

	for (unsigned int i = 0; i < strlen(values); ++i) {
		grid[row][col] = values[i];
        ctr += solution_counter(grid);
        if (ctr > 1) break; // Remove this line if getting total number, but slower
	}

    grid[row][col] = ' ';
	return ctr;
}

/***********************************************************************
 * Swapping two char in the array
 ***********************************************************************/

void swap(box grid[81], int a, int b) {
    const box temp = grid[a];
    grid[a] = grid[b];
    grid[b] = temp;
}

/*----------------------------------------Customized Helper Functions--------------------------------------*/


/***********************************************************************
 * TODO_1: Check whether the inserted value is compliant
 *         with the rules of Sudoku.
 ***********************************************************************/

bool input_is_valid(const char grid[][9], int value, int row, int col) {
	// Checking row
	for (int _col = 0; _col < 9; ++_col) {
		if (grid[row][_col] == static_cast<char>(value + 48)) return false; 
	}

	// Checking col
	for (int _row = 0; _row < 9; ++_row) {
		if (grid[_row][col] == static_cast<char>(value + 48)) return false; 
	}

	// Checking subgrid
	const int originRow = row / 3 * 3;
	const int originCol = col / 3 * 3;
	for (int _row = 0; _row < 3; ++_row) {
		for (int _col = 0; _col < 3; ++_col) {
			if (grid[originRow + _row][originCol + _col] == static_cast<char>(value + 48)) return false;
		}
	}
	return true;
}

/***********************************************************************
 * TODO_2: Ask coordinate inputs from the user, and a value to insert.
 *         Check whether the user's input is valid. If the user's input
 *         is valid, insert the value and update the current grid.
 *         Otherwise, print an error message.
 ***********************************************************************/

void edit_cell(const char initial_grid[][9], char grid[][9]) {
	char inputCol;
	int inputRow;
	int col, row, value;
	get_coordinate_index(inputCol, inputRow, col, row);
	cout << "Enter the value at '" << inputCol << inputRow << "': ";
	get_value(value);

	if (initial_grid[row][col] != ' ') {
		cout << "ERROR: Cell '" << inputCol << inputRow << "' is read-only";
		return;
	}

	if (!input_is_valid(grid, value, row, col)) {
		cout << "ERROR: Value '" << value << "' in cell '" << inputCol << inputRow << "' is invalid";
		return;
	}

	grid[row][col] = static_cast<char>(value + 48);
}

/***********************************************************************
 * TODO_3: Ask coordinate inputs from the user. Remove the value from
 *         the current grid if the cell has not been filled in the
 *         beginning.
 ***********************************************************************/

void remove_cell(const char initial_grid[][9], char grid[][9]) {
	char inputCol;
	int inputRow;
	int col, row;
	get_coordinate_index(inputCol, inputRow, col, row);

	if (initial_grid[row][col] != ' ') {
		cout << "ERROR: Cell '" << inputCol << inputRow << "' is read-only";
		return;
	}

	grid[row][col] = ' ';
}

/***********************************************************************
 * TODO_4: Check whether all the cells in the grid have been
 *         correctly filled.
 ***********************************************************************/

bool check_end_game(const char grid[][9]) {
	for(int position = 0; position < 81; ++position) {
        int row = position / 9;
        int col = position % 9;
        if (grid[row][col] == ' ') return false; 
    }
	return true;
}

/***********************************************************************
 * TODO_5: Automatic Sudoku solver.
 *         Complete all the empty cells with the
 *         correct solution if it exists.
 ***********************************************************************/

bool sudoku_solver(char grid[][9]) {
	if (check_end_game(grid)) return true;

	int row, col;
	char values[10];
	get_next_position(grid, row, col);

	if (!get_available_value(grid, row, col, values)) return false;

	for (unsigned int i = 0; i < strlen(values); ++i) {
		grid[row][col] = values[i];
		if (check_end_game(grid) || sudoku_solver(grid)) return true;
	}

	grid[row][col] = ' ';
	return false;
}

/***********************************************************************
 * TODO_6: Generate a complete valid board.
 ***********************************************************************/

bool generate_board(char grid[][9]) {
	for (char i = '1'; i <= '9'; ++i) 
		grid[rand() % 9][rand() % 9] = i;
	return sudoku_solver(grid);
}

/***********************************************************************
 * TODO_7: Generate a Sudoku puzzle with unique solution.
 ***********************************************************************/

void generate_unique_puzzle(char grid[][9]) {
	box shuffledGrid[81];
	for (int i = 0; i < 81; ++i) {
		const int row = i / 9;
		const int col = i % 9;
		shuffledGrid[i].row = row;
		shuffledGrid[i].col = col;
		shuffledGrid[i].value = grid[row][col];
	}

	for (int i = 0; i < 81; ++i) {
		swap(shuffledGrid, i, rand() % 81);
	}

	for (int i = 0; i < 81; ++i) {
		const int row = shuffledGrid[i].row;
		const int col = shuffledGrid[i].col;
		grid[row][col] = ' ';
		if (solution_counter(grid) > 1) grid[row][col] = shuffledGrid[i].value;
	}
}
