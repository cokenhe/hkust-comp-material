//
//  COMP 2012H Programming Assignment 1: Sudoku
//  Filename: main.cpp
//

#include <iostream>
#include <cstdlib>
#include <ctime>
#include "helper.h"
#include "todo.h"
using namespace std;

int main() {
    srand(time(NULL));       // Initialize pseudo-random number generator

    char initial_grid[9][9]; // Define a 9x9 2D array for storing the initial grid data
    char grid[9][9];         // Define a 9x9 2D array for storing the current grid data
    char option = ' ';       // For storing the first option (i.e., read / generate)
    char operation = ' ';    // For storing user's operation
    char filename[256];      // For input and output filename

    initialize_grid(initial_grid);   // Initialize the current grid

    // Check whether the user wants to read the existing data or
    // generate a brand new Sudoku puzzle
    cout << "Read grid file / Generate unique Sudoku puzzle (R/G)? ";
    cin >> option;

    // If the user wants to read the existing data
    if(option == 'R' || option == 'r') {
      // Get the name of grid file
      cout << "Enter the grid file name (e.g., grid.txt): ";
      cin >> filename;
      // Read data from grid file and assign them to
      // the initial grid and the current grid
      read_file(initial_grid, filename);
    }
    else {
      // The user wants to generate a brand new puzzle
      generate_board(initial_grid);
      generate_unique_puzzle(initial_grid);
    }

    // The current grid should be the same as the initial grid when
    // the game starts
    duplicate_grid(initial_grid, grid);

    // Get user's operation
    get_operation(operation, initial_grid, grid);

    // Check whether the user wants to save the current grid data to a file
    cout << "Do you want to write the grid (Y/N)? ";
    char save;
    cin >> save;

    // If he/she wants to save the data, get the name of grid file
    if(save == 'Y' || save == 'y') {
    	cout << "Enter the grid file name (e.g., grid.txt): ";
    	cin >> filename;
    	// Write current grid data to the grid file
    	write_grid(grid, filename);
    }

    return 0;
}

