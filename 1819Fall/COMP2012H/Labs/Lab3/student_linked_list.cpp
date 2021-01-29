#include <algorithm>
#include "student_linked_list.h"

void print_student_list(const Student_List& student_list, bool reverse) {
  if (student_list.size == 0) {
    cout << "Student List is empty!" << endl;
  }

  if (!reverse) {
    for (Student_Node* current = student_list.head; current != nullptr; current = current->next) {
      print_student(current->student);
    }
  }
  else {
    for (Student_Node* current = student_list.tail; current != nullptr; current = current->prev) {
      print_student(current->student);
    }
  }
}

/* 
 * Task 4
 * Implement the insert_student() and delete_student() functions for the Student Linked List.
 * For insert(), the new node should be inserted before the index node, or at the end of the linked list if (index == student_list.size).
 * For delete(), the node at index should be deleted.
 * Remember to handle the special case of head/tail.
 * Also update student_list.head and/or student_list.tail if required, as well as student_list.size.
 * You can assume that index is always within valid range.
 */

void insert_student(Student_List& student_list, const Student& student, int index) {
  if ((index < 0) || (index > student_list.size)) {
    return;
  }

  ++student_list.size;
  Student_Node* newStudent = new Student_Node;
  newStudent->student = student;

  // If list is empty
  if (student_list.head == nullptr || student_list.tail == nullptr) {
    student_list.head = newStudent;
    student_list.tail = newStudent;
    return;
  }

  // Insert to beginning
  if (index == 0) {
    newStudent->next = student_list.head;
    student_list.head->prev = newStudent;
    student_list.head = newStudent;
    return;
  }

  // Insert to endding
  if (index == student_list.size - 1) {
    newStudent->prev = student_list.tail;
    student_list.tail->next = newStudent;
    student_list.tail = newStudent;
    return;
  }

  // point to the position
  Student_Node* p = student_list.head;
  for (int i = 0; i < index - 1 && p->next != nullptr; ++i, p = p->next);

  newStudent->next = p->next;
  newStudent->prev = p;
  if (p->next != nullptr) p->next->prev = newStudent;
  p->next = newStudent;
}

void delete_student(Student_List& student_list, int index) {
  if ((index < 0) || (index >= student_list.size)) {
    return;
  }

  --student_list.size;
  if (index == 0) {
    student_list.head = student_list.head->next;
    delete student_list.head->prev;
    student_list.head->prev = nullptr;
    return;
  }

  if (index == student_list.size) {
    student_list.tail = student_list.tail->prev;
    delete student_list.tail->next;
    student_list.tail->next = nullptr;
    return;
  }

  // point to the position
  Student_Node* p = student_list.head;
  for (int i = 0; i < index && p->next != nullptr; ++i, p = p->next);

  p->prev->next = p->next;
  p->next->prev = p->prev;
  delete p;
  p = nullptr;
}

/* 
 * Task 5
 * Swap the nodes located at index1 and index2.
 * Update their next/prev pointers, as well as their neighbors.
 * Remember to handle the special case of index1 and/or index2 being the head and/or tail.
 * Also special case if they are adjacent nodes.
 * Also update student_list.head and/or student_list.tail if required.
 * You can assume that index1 and index2 are always within valid range.
 * To simplify your code, swap index1 and index2 if index2 is smaller than index1.
 * If index1 == index2, do nothing.
 */

void swap_student(Student_List& student_list, int index1, int index2) {
  if ((index1 < 0) || (index2 < 0) || (index1 >= student_list.size) || (index2 >= student_list.size) || (index1 == index2)) {
    return;
  }

  // Make sure that index1 is always smaller than index2, to simplify our code.
  if (index1 > index2) {
    int temp = index1;
    index1 = index2;
    index2 = temp;
  }

  Student_Node* p1 = student_list.head;
  Student_Node* p2 = student_list.head;

  for (int i = 0; i < index1 && p1->next != nullptr; ++i, p1 = p1->next);
  for (int i = 0; i < index2 && p2->next != nullptr; ++i, p2 = p2->next);

  // Case beginning
  if (index1 == 0) {
    student_list.head = p2;
  }

  // Case endding
  if (index2 == student_list.size - 1) {
    student_list.tail = p1;
  }

  // // Case neighbors
  if (index1 + 1 == index2) {
    p1->next = p2->next;
    p2->prev = p1->prev;
    p1->prev = p2;
    p2->next = p1;
  } else {
    Student_Node* temp = p1->next;
    p1->next = p2->next;
    p2->next = temp;

    temp = p1->prev;
    p1->prev = p2->prev;
    p2->prev = temp;
  }

  if (p1->next != nullptr) p1->next->prev = p1;
  if (p2->next != nullptr) p2->next->prev = p2;
  if (p1->prev != nullptr) p1->prev->next = p1;
  if (p2->prev != nullptr) p2->prev->next = p2;
}

/* 
 * Task 6
 * Delete the whole Student Linked List.
 * Make sure to delete all the nodes in the list.
 * Also remember to reset student_list.head and student_list.prev to nullptr.
 */

void delete_student_list(Student_List& student_list) {
  if (student_list.size == 0) {
    return;
  }

  Student_Node* p = student_list.head;

  do {
    student_list.head = p->next;
    delete p;
    p = student_list.head;
  } while(p->next != nullptr);
  p = nullptr;

  student_list.head = nullptr;
  student_list.tail = nullptr;
  student_list.size = 0;
}

/* 
 * Bonus Task
 * You may use the swap() function that you have implemented in Task 5.
 * sort_options can be used as an argument to a switch-case statement.
 * Names should be sorted by alphanumeric order, you may use the <algorithm> library function lexicographical_compare() for the strings.
 * Gender is sorted as MALE first, FEMALE second.
 * ID, Age, and CGPA are both sorted by ascending numerical order.
 * If the student_list only has 0 or 1 elements, then do nothing.
 * For simplicity, you may use the Bubble Sort algorithm, which is inefficient but straightforward to code.
 */

/* 
 * Return:
 *  - True: Need to swap (that mean in descending order)
 *  - False: No need to swap (that mean in ascending order)
 */

bool isDescending(Sort_Options sort_options, const Student_Node* const p) {
  switch (sort_options) {
    case NAME: 
      return (!lexicographical_compare(p->student.name.begin(), p->student.name.end(), p->next->student.name.begin(), p->next->student.name.end()));
    case GENDER:
      return (p->student.gender > p->next->student.gender);
    case ID:
      return (p->student.id > p->next->student.id);
    case AGE:
      return (p->student.age > p->next->student.age);
    case CGPA:
      return (p->student.cgpa > p->next->student.cgpa);
  }
}

void sort_student_list(Student_List& student_list, Sort_Options sort_options) {
  if ((student_list.size == 0) || (student_list.size == 1)) {
    return;
  }

  Student_Node* p;
  bool isSortted = true;
  for (int i = student_list.size; i > 0; --i) {
    p = student_list.head;
    isSortted = true;
    for (int j = 0; j < i - 1 && p->next != nullptr; ++j) {
      if (isDescending(sort_options, p)) {
        swap_student(student_list, j, j+1);
        isSortted = false;
        continue;
      }
      p = p->next;
    }
    if (isSortted) return;
  }
}
