#ifndef STUDENT_H_
#define STUDENT_H_

#include <iostream>
#include <string>
using namespace std;

enum Gender { MALE, FEMALE };

struct Student {
  string name;
  Gender gender;
  int id;
  int age;
  double cgpa;
};

void print_student(const Student& student);
void initialize_student_by_reference(Student& student, string name, Gender gender, int id, int age, double cgpa);
void initialize_student_by_pointer(Student* student, string name, Gender gender, int id, int age, double cgpa);
void swap_student_by_reference(Student& student1, Student& student2);
void swap_student_by_pointer(Student* student1, Student* student2);

#endif /* STUDENT_H_ */
