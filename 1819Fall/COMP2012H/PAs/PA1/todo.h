//
//  COMP 2012H Programming Assignment 1: Sudoku
//  Filename: todo.h
//

#ifndef TODO_H
#define TODO_H

#include <iostream>
#include <algorithm>
using namespace std;

bool input_is_valid(const char grid[][9], int input, int row, int col);
void edit_cell(const char initial_grid[][9], char grid[][9]);
void remove_cell(const char initial_grid[][9], char grid[][9]);
bool check_end_game(const char grid[][9]);
bool sudoku_solver(char grid[][9]);
bool generate_board(char grid[][9]);
void generate_unique_puzzle(char grid[][9]);

// customized helper functions

struct box {
    int row;
    int col;
    int value;
};

void to_upper_case(char& letter);
int letter_to_index(char& letter);
void get_coordinate_index(char& letter, int& number, int& col, int & row);
bool get_next_position(const char grid[][9], int& row, int& col);
bool get_available_value(const char grid[] [9], const int& row, const int& col, char values[]);
int get_empty_space(const char grid[][9]);
int solution_counter(char grid[][9]);
void swap(box grid[], int a, int b);

#endif /* TODO_H */
