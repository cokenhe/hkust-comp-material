#include <iostream>
using std::cin;
using std::cout;
using std::endl;

#include <typeinfo>

#include "ArrayQueue.h"
#include "ArrayStack.h"
#include "ArrayDeque.h"

// Polymorphism. selectedContainer points to either ArrayQueue or ArrayStack.
// Special Note: Eclipse may complain about typeid.name(), but it should still compile successfully with g++.
void innerMenu(ArrayAbstractQueue* selectedContainer) {
	char operation;
	int element;
	unsigned int N;
	int* data = nullptr;
	int numData = 0;
	do {
		cout << "\n"
			 << "1. Print numElements\n"
			 << "2. Peek\n"
			 << "3. Push\n"
			 << "4. Pop\n"
			 << "5. Pop All\n"
			 << "6. Quick Push sequentially, [0, N). Duplicates allowed.\n"
			 << "B: Back to Container Type Selection (All data saved)\n"
			 << "\n"
			 << "Please select an operation: ";
		cin >> operation;

		switch (operation) {
		case '1':
			cout << (typeid(*selectedContainer)).name() << " numElements == " << selectedContainer->getNumElements() << endl;
			break;

		case '2':
			if (selectedContainer->getNumElements() == 0) {
				cout << (typeid(*selectedContainer)).name() << " is empty!" << endl;
			}
			else {
				cout << "Peek: " << selectedContainer->peek() << endl;
			}
			break;

		case '3':
			cout << "Element: ";
			cin >> element;
			selectedContainer->push(element);
			break;

		case '4':
			if (selectedContainer->getNumElements() == 0) {
				cout << (typeid(*selectedContainer)).name() << " is empty!" << endl;
			}
			else {
				cout << "Pop: " << selectedContainer->pop() << endl;
			}
			break;

		case '5':
			if (selectedContainer->getNumElements() == 0) {
				cout << (typeid(*selectedContainer)).name() << " is empty!" << endl;
			}
			else {
				numData = selectedContainer->getNumElements();
				data = new int[numData];
				selectedContainer->popAll(data);
				cout << "Pop All: ";
				for (int i = 0; i < numData; i++) {
					cout << data[i] << " ";
				}
			cout << endl;
			}
			break;

		case '6':
			cout << "N: ";
			cin >> N;
			for (unsigned int i = 0; i < N; i++) {
				selectedContainer->push(i);
			}
			break;

		case 'b':
		case 'B':
			break;

		default:
			cout << "Invalid input." << endl;
			break;
		}
		selectedContainer->printData();
	} while ((operation != 'b') && (operation != 'B'));
}

// Uncomment when you have implemented ArrayDeque.
void arrayDequeMenu() {
	ArrayDeque arrayDeque;
	cout << "\nOne ArrayDeque with default 0 arraySize has been created for you to test." << endl;

	char operation;
	int element;
	unsigned int N;
	int* data = nullptr;
	int numData = 0;
	do {
		cout << "\n"
			 << "1. Print numElements\n"
			 << "2. Peek Front\n"
			 << "3. Peek Back\n"
			 << "4. Push Front\n"
			 << "5. Push Back\n"
			 << "6. Pop Front\n"
			 << "7. Pop Back\n"
			 << "8. Pop All from Front\n"
			 << "9. Pop All from Back\n"
			 << "F. Quick Push Front sequentially, [0, N). Duplicates allowed.\n"
			 << "B. Quick Push Back sequentially [0, N). Duplicates allowed.\n"
			 << "Q: Back\n"
			 << "\n"
			 << "Please select an operation: ";
		cin >> operation;

		switch (operation) {
		case '1':
			cout << "ArrayDeque numElements == " << arrayDeque.getNumElements() << endl;
			break;

		case '2':
			if (arrayDeque.getNumElements() == 0) {
				cout << "ArrayDeque is empty!" << endl;
			}
			else {
				cout << "Peek Front: " << arrayDeque.peek() << endl;
			}
			break;

		case '3':
			if (arrayDeque.getNumElements() == 0) {
				cout << "ArrayDeque is empty!" << endl;
			}
			else {
				cout << "Peek Back: " << arrayDeque.peekBack() << endl;
			}
			break;

		case '4':
			cout << "Element: ";
			cin >> element;
			arrayDeque.pushFront(element);
			break;

		case '5':
			cout << "Element: ";
			cin >> element;
			arrayDeque.push(element);
			break;

		case '6':
			if (arrayDeque.getNumElements() == 0) {
				cout << "ArrayDeque is empty!" << endl;
			}
			else {
				cout << "Pop Front: " << arrayDeque.pop() << endl;
			}
			break;

		case '7':
			if (arrayDeque.getNumElements() == 0) {
				cout << "ArrayDeque is empty!" << endl;
			}
			else {
				cout << "Pop Back: " << arrayDeque.popBack() << endl;
			}
			break;

		case '8':
			if (arrayDeque.getNumElements() == 0) {
				cout << "ArrayDeque is empty!" << endl;
			}
			else {
				numData = arrayDeque.getNumElements();
				data = new int[numData];
				arrayDeque.popAll(data);
				cout << "Pop All from Front: ";
				for (int i = 0; i < numData; i++) {
					cout << data[i] << " ";
				}
				cout << endl;
			}
			break;

		case '9':
			if (arrayDeque.getNumElements() == 0) {
				cout << "ArrayDeque is empty!" << endl;
			}
			else {
				numData = arrayDeque.getNumElements();
				data = new int[numData];
				arrayDeque.popAllFromBack(data);
				cout << "Pop All from Back: ";
				for (int i = 0; i < numData; i++) {
					cout << data[i] << " ";
				}
				cout << endl;
			}
			break;

		case 'f':
		case 'F':
			cout << "N: ";
			cin >> N;
			for (unsigned int i = 0; i < N; i++) {
				arrayDeque.pushFront(i);
			}
			break;

		case 'b':
		case 'B':
			cout << "N: ";
			cin >> N;
			for (unsigned int i = 0; i < N; i++) {
				arrayDeque.push(i);
			}
			break;

		case 'q':
		case 'Q':
			break;

		default:
			cout << "Invalid input." << endl;
			break;
		}
	} while ((operation != 'q') && (operation != 'Q'));
}

int main() {
	ArrayQueue arrayQueue;
	ArrayStack arrayStack;
	cout << "One ArrayQueue and one ArrayStack with default 0 arraySize has been created for you to test." << endl;

	char selection;
	do {
		cout << "\n"
			 << "1. ArrayQueue\n"
			 << "2. ArrayStack\n"
			 << "Q: Quit\n"
			 << "\n"
			 << "Please select the Container Type: ";
		cin >> selection;

		switch (selection) {
		case '1':
			innerMenu(&arrayQueue);
			break;

		case '2':
			innerMenu(&arrayStack);
			break;

		case 'q':
		case 'Q':
			break;

		default:
			cout << "Invalid input." << endl;
			break;
		}
	} while ((selection != 'q') && (selection != 'Q'));

	char bonus;
	cout << "\nDo you wish to run ArrayDeque? (Y/N): ";
	cin >> bonus;
	if ((bonus == 'Y') || (bonus == 'y')) {
		arrayDequeMenu(); // Uncomment when you have implemented ArrayDeque.
	}

	return 0;
}
