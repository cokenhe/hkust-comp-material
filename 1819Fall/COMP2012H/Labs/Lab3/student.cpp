#include "student.h"

void print_student(const Student& student) {
  cout << "Name: " << student.name << "\n"
       << "Gender: " << ((student.gender == MALE) ? "Male" : "Female") << "\n"
       << "ID: " << student.id << "\n"
       << "Age: " << student.age << "\n"
       << "CGPA: " << student.cgpa << "\n"
       << "\n";
}

/* 
 * Task 1 - Passing arguments by reference and as pointers
 * "." operator for member access directly.
 * "->" operator for member access via pointer.
 */

void initialize_student_by_reference(Student& student, string name, Gender gender, int id, int age, double cgpa) {
  student.name = name;
  student.gender = gender;
  student.id = id;
  student.age = age;
  student.cgpa = cgpa;
}

void initialize_student_by_pointer(Student* student, string name, Gender gender, int id, int age, double cgpa) {
  student->name = name;
  student->gender = gender;
  student->id = id;
  student->age = age;
  student->cgpa = cgpa;
}

void swap_student_by_reference(Student& student1, Student& student2) {
  Student temp = student1;
  student1 = student2;
  student2 = temp;
}

void swap_student_by_pointer(Student* student1, Student* student2) {
  Student temp = *student1;
  *student1 = *student2;
  *student2 = temp;
}
