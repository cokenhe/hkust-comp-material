//
//  COMP 2012H Programming Assignment 1: Sudoku
//  Filename: helper.h
//

#ifndef HELPER_H
#define HELPER_H

#include <iostream>
#include <fstream>
using namespace std;

void read_file(char initial_grid[][9], const char filename[]);
void write_grid(const char grid[][9], const char filename[]);
void initialize_grid(char grid[][9]);
void duplicate_grid(const char source[][9], char destination[][9]);
void get_coordinate(char& letter, int& number);
void get_value(int& value);
void display_grid(const char grid[][9]);
void show_instructions();
void get_operation(char operation, const char initial_grid[][9], char grid[][9]);


#endif /* HELPER_H */
