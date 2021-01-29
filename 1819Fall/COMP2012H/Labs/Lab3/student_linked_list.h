#ifndef STUDENT_LINKED_LIST_H_
#define STUDENT_LINKED_LIST_H_

#include <algorithm>
#include "student.h"
using namespace std;

enum Sort_Options { NAME, GENDER, ID, AGE, CGPA };

struct Student_Node {
  Student student;
  Student_Node* next = nullptr;
  Student_Node* prev = nullptr;
};

struct Student_List {
  Student_Node* head = nullptr;
  Student_Node* tail = nullptr;
  int size = 0;
};

void print_student_list(const Student_List& student_list, bool reverse = false);
void insert_student(Student_List& student_list, const Student& student, int index);
void delete_student(Student_List& student_list, int index);
void swap_student(Student_List& student_list, int index1, int index2);
void sort_student_list(Student_List& student_list, Sort_Options sort_options = NAME);
void delete_student_list(Student_List& student_list);

#endif /* STUDENT_LINKED_LIST_H_ */
