//
//  COMP 2012H Programming Assignment 1: Sudoku
//  Filename: helper.cpp
//

#include "helper.h"
#include "todo.h"

/***********************************************************************
 * Ask the user to input a filename, read grid data from
 * that file, and store them in an array.
 ***********************************************************************/

void read_file(char initial_grid[][9], const char filename[]) {
    // Define ifstream object
    ifstream fin;

    // Open file with error checking
    fin.open(filename);
    if (fin.fail()) {
        cout << "Failed opening grid file."  << endl;
        exit(1);
    }

    // Read grid data from the file and put them into the array
    for (int row = 0; row < 9; ++row) {
        for (int col = 0; col < 9; ++col) {
            fin >> initial_grid[row][col];
            if (initial_grid[row][col] == '0')
                initial_grid[row][col] = ' ';
        }
    }

    // Close the file
    fin.close();
}

/***********************************************************************
 * Ask the user to input a filename, write grid data to that file.
 ***********************************************************************/

void write_grid(const char grid[][9], const char filename[]) {
	// Define ofstream object
    ofstream fout;

    // Open file
    fout.open(filename, ios::out);

    // Write grid data into the file
    for (int row = 0; row < 9; ++row) {
        for (int col = 0; col < 9; ++col) {
            if (grid[row][col] == ' ')
                fout << 0 << " ";
            else
                fout << grid[row][col] << " ";
        }
        fout << endl;
    }
    fout << endl;

    // Close the file
    fout.close();
}

/***********************************************************************
 * Initialize the grid with ' '.
 ***********************************************************************/

void initialize_grid(char grid[][9]) {
    for(int position = 0; position < 81; ++position) {
        int row = position / 9;
        int col = position % 9;
        grid[row][col] = ' ';
    }
}

/***********************************************************************
 * Duplicate grid data (from source to destination).
 ***********************************************************************/

void duplicate_grid(const char source[][9], char destination[][9]) {
    for (int row = 0; row < 9; ++row) {
        for (int col = 0; col < 9; ++col)
        	destination[row][col] = source[row][col];
    }
}

/***********************************************************************
 * Get coordinate input.
 ***********************************************************************/

void get_coordinate(char& letter, int& number) {
    cin >> letter >> number;
}

/***********************************************************************
 * Get value input.
 ***********************************************************************/

void get_value(int& value) {
    cin >> value;
}

/***********************************************************************
 * Display the current grid data on screen.
 ***********************************************************************/

void display_grid(const char grid[][9]) {
    // Display column header
    cout << "    A B C |D E F |G H I" << endl
         << "   ---------------------" << endl;

    // Display grid data and grid lines
    for (int row = 0; row < 9; row++) {
        cout << row + 1 << "  |";
        for (int col = 0; col < 9; col++) {
            cout << grid[row][col] << " ";
            if (col % 3 == 2)
                cout << "|";
        }
        cout << endl;
        if (row % 3 == 2)
            cout << "   -------+------+------" << endl;
    }
}

/***********************************************************************
 * Show options
 ***********************************************************************/

void show_options() {
    cout << "Options:" << endl
         << "   D:  Display current grid"   << endl
         << "   I:  Display initial grid"   << endl
         << "   E:  Edit cell"              << endl
         << "   R:  Remove cell"            << endl
         << "   S:  Solve the grid"         << endl
         << "   T:  Reset the grid"         << endl
         << "   Q:  Quit"                 << endl
         << endl;
}

/***********************************************************************
 * UI Loop
 ***********************************************************************/

void get_operation(char operation, const char initial_grid[][9], char grid[][9]) {
	bool solved = false;
    do {
    	// Show possible options
    	show_options();

        // Get user's input
        cout << "Enter Operation: ";
        cin >> operation;

        // Call different functions according to user's input
        switch(operation) {
            case 'd':
            case 'D':
                display_grid(grid);
                break;

            case 'i':
            case 'I':
                display_grid(initial_grid);
                break;

            case 'e':
            case 'E':
                edit_cell(initial_grid, grid);
                break;

            case 'r':
            case 'R':
               remove_cell(initial_grid, grid);
               break;

            case 's':
            case 'S':
               solved = sudoku_solver(grid);
               cout << ((solved) ? "Solved" : "Cannot be solved") << endl;
               if(solved)
            	   display_grid(grid);
               break;

            case 't':
            case 'T':
               duplicate_grid(initial_grid, grid);
               break;

            case 'q':
            case 'Q':
               break;

            default:
              cout << "ERROR: Invalid command." << endl;
              break;
        }

        cout << endl;
    } while((operation != 'q') && (operation != 'Q') && (!check_end_game(grid)));

    if((operation != 'q') && (operation != 'Q'))
    	cout << "The puzzle has been solved!" << endl;
}
