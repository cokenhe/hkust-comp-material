#include "student.h"
#include "student_linked_list.h"

void student_pointers_test() {
  cout << "Initialize by Reference." << endl;
  Student student1;
  initialize_student_by_reference(student1, "Eric Bailey", MALE, 20212345, 21, 3.67);
  print_student(student1);

  cout << "Initialize by Pointer." << endl;
  Student student2;
  initialize_student_by_pointer(&student2, "Cheung Hoi Ying", FEMALE, 20254321, 20, 3.93);
  print_student(student2);

  cout << "Swap by Reference." << endl;
  swap_student_by_reference(student1, student2);
  cout << "This should be Cheung Hoi Ying." << endl;
  print_student(student1);
  cout << "This should be Eric Bailey." << endl;
  print_student(student2);

  cout << "Swap by Pointer." << endl;
  swap_student_by_pointer(&student1, &student2);
  cout << "This should be Eric Bailey." << endl;
  print_student(student1);
  cout << "This should be Cheung Hoi Ying." << endl;
  print_student(student2);
}

/* 
 * Task 2 - Dynamic Creation and Deallocation of Objects via Pointers
 * Dynamic creation with "new" operator.
 * Deallocation with "delete" operator.
 * Create, initialize, print, and deallocate the student object.
 */

void student_dynamic_allocation_test() {
  cout << "Single Object Dynamic Allocation Test" << endl;

  Student* ptrStudent = new Student();
  initialize_student_by_pointer(ptrStudent, "Lin Ruying", FEMALE, 20313542, 21, 4.02);
  print_student(*ptrStudent);
  delete ptrStudent;
}

/* 
 * Task 3 - Dynamic Creation of 3D Array.
 * Dynamic 3D Array of Students.
 * "new Student[]", "new Student*[]", "new Student**[]", etc.
 * Initialize each student according to the instructions on the lab page.
 * Print out the details of each student to verify correct creation and initialization.
 * Remember to deallocate each student and student array at the end with "delete []".
 */

void student_dynamic_3D_array_test() {
  cout << "3D Array Dynamic Allocation Test" << endl;

  Student*** arr = new Student**[3];
  for (int i = 0; i < 3; ++i) {
    arr[i] = new Student*[2];
    for (int j = 0; j < 2; ++j) {
      arr[i][j] = new Student[2];
      for (int k = 0; k < 2; ++k) {
        const int counter = i*4 + j*2 + k;
        initialize_student_by_pointer(&arr[i][j][k], "Test", (k == 0) ? MALE : FEMALE, 20000000 + counter, 18 + counter, 4.3 / (counter+1)); 
        print_student(arr[i][j][k]);
      }
    }
  }

  for (int i = 0; i < 2; ++i) {
    for (int j = 0; j < 2; ++j)
      delete [] arr[i][j];
    delete [] arr[i];
  }
  delete [] arr;

}

void student_linked_list_test() {
  Student student_array[10] = {	
    {"Tali'Zorah vas Neema",     FEMALE, 20010583, 22, 4.29},
    {"Naene'Sheess nar Fesost",  FEMALE, 20020597, 20, 2.84},
    {"Mim'Cil vas Leefirn",      MALE,   20020684, 21, 2.57},
    {"Raeh'Ninn nar Laazorn",    MALE,   20026857, 19, 3.04},
    {"Mim'Xogar nar Waalarm",    MALE,   20024935, 20, 3.14},
    {"Nura'Vaalon vas Shezal",   FEMALE, 20028453, 21, 2.98},
    {"Zaeto'Nalin vas Lodin",    MALE,   20027685, 21, 3.45},
    {"Yaemi'Malas nar Raadolor", FEMALE, 20024573, 19, 3.94},
    {"Jeel'Xeemis vas Yaehala",  MALE,   20014875, 22, 4.01},
    {"Ceena'Rulas nar Rannoch",  FEMALE, 20029854, 19, 3.85}
  };

  Student_List student_list;

  cout << "Student Linked List Tests" << "\n\n";

  cout << "Insert Test" << endl;
  for (int i = 0; i < 10; i++) {
    insert_student(student_list, student_array[i], i);
  }
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);

  cout << "\n\n";

  cout << "Deleting index " << student_list.size / 2 << endl;
  delete_student(student_list, student_list.size / 2);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n";

  cout << "Delete Test" << endl;
  cout << "Deleting index " << 0 << endl;
  delete_student(student_list, 0);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n";

  cout << "Deleting index " << student_list.size - 1 << endl;
  delete_student(student_list, student_list.size - 1);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n";

  cout << "\n\n";

  cout << "Swap Test" << endl;
  for (int i = 0; i < student_list.size; i++) {
    for (int j = 0; j < student_list.size; j++) {
      cout << "Swapping indices " << i << " and " << j << endl;
      swap_student(student_list, i, j);
      print_student_list(student_list);
      cout << "Reversed" << endl;
      print_student_list(student_list, true);
      cout << "\n";
    }
  }

  cout << "\n\n";

  // Comment out this section if you are not doing the bonus task.
  cout << "Sort Test" << endl;

  cout << "Sort by Name" << endl;
  sort_student_list(student_list, NAME);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n\n";

  cout << "Sort by Gender" << endl;
  sort_student_list(student_list, GENDER);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n\n";

  cout << "Sort by ID" << endl;
  sort_student_list(student_list, ID);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n\n";

  cout << "Sort by Age" << endl;
  sort_student_list(student_list, AGE);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n\n";

  cout << "Sort by CGPA" << endl;
  sort_student_list(student_list, CGPA);
  print_student_list(student_list);
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
  cout << "\n\n";

  cout << "\n\n";

  cout << "Delete List Test" << endl;
  delete_student_list(student_list);
  print_student_list(student_list);
  cout << "\n";
  cout << "Reversed" << endl;
  print_student_list(student_list, true);
}

int main() {
  student_pointers_test();
  cout << "\n\n";
  student_dynamic_allocation_test();
  cout << "\n\n";
  student_dynamic_3D_array_test();
  cout << "\n\n";
  student_linked_list_test();

  cout << "\nInput any key to exit the program." << endl;
  string pause_input;
  cin >> pause_input;

  return 0;
}
