#include <iostream>
using std::cin;
using std::cout;
using std::endl;
using std::boolalpha;

#include "ArrayList.h"

void resizeArrayTest() {
	cout << "Resize Array Test:" << endl;

	ArrayList arrayList;

	cout << "Insertion Resize Test:" << endl;
	bool insertionResizeTestResults[33];
	for (unsigned int i = 0, expectedSize = 1; i < 33; i++, expectedSize *= ((expectedSize == i) ? 2 : 1)) {
		arrayList.insert(i, i);
		arrayList.print();
		cout << "arraySize == " << arrayList.getArraySize() << "\n";
		cout << "expectedSize == " << expectedSize << "\n";
		insertionResizeTestResults[i] = (arrayList.getArraySize() == expectedSize);
		cout << "Sub-Test " << i+1 << " Success? " << insertionResizeTestResults[i] << "\n";
		cout << endl;
	}

	cout << "Removal Resize Test:" << endl;
	bool removalResizeTestResults[33];
	for (unsigned int i = 33, expectedSize = 64; i > 0; i--) {
		expectedSize /= ((expectedSize/4 == i-1) ? 2 : 1);
		arrayList.remove(i-1);
		arrayList.print();
		cout << "arraySize == " << arrayList.getArraySize() << "\n";
		cout << "expectedSize == " << expectedSize << "\n";
		removalResizeTestResults[i-1] = (arrayList.getArraySize() == expectedSize);
		cout << "Sub-Test " << i-1 << " Success? " << removalResizeTestResults[i-1] << "\n";
		cout << endl;
	}

	bool finalResult = true;
	for (int i = 0; i < 33; i++) {
		if (!insertionResizeTestResults[i] || !removalResizeTestResults[i]) {
			finalResult = false;
			break;
		}
	}
	cout << "Test Success? " << finalResult << endl;
	cout << endl;
}

void constructorTest() {
	cout << "Constructor Test:" << endl;

	ArrayList arrayList1;
	arrayList1.print();
	cout << "arrayList1 arraySize == " << arrayList1.getArraySize() << endl;
	cout << "arrayList1 numElements == " << arrayList1.getNumElements() << endl;
	bool subtest1 = ((arrayList1.getArraySize() == 0) && (arrayList1.getNumElements() == 0));
	cout << "Sub-Test 1 Success? " << subtest1 << endl;

	ArrayList arrayList2(10);
	arrayList2.print();
	cout << "arrayList2 arraySize == " << arrayList2.getArraySize() << endl;
	cout << "arrayList2 numElements == " << arrayList2.getNumElements() << endl;
	cout << "This should print 10 ArrayList Index Out of Bounds Error messages, and 10 garbage int values:\n";
	unsigned int index_count = 0;
	for (; index_count < 10; index_count++) {
		cout << arrayList2[index_count] << " ";
	}
	cout << endl;
	bool subtest2 = ((arrayList2.getArraySize() == 10) && (arrayList2.getNumElements() == 0) && (index_count == 10));
	cout << "Sub-Test 2 Success? " << subtest2 << endl;

	cout << "Test Success? " << (subtest1 && subtest2) << endl;
	cout << endl;
}

void copyConstructorTest() {
	cout << "Copy-Constructor Test:" << endl;

	ArrayList arrayList1(10);
	arrayList1.print();
	cout << "arrayList1 arraySize == " << arrayList1.getArraySize() << endl;
	cout << "arrayList1 numElements == " << arrayList1.getNumElements() << endl;
	cout << "This should print 10 ArrayList Index Out of Bounds Error messages, and 10 garbage int values:\n";
	unsigned int index_count1 = 0;
	for (; index_count1 < 10; index_count1++) {
		cout << arrayList1[index_count1] << " ";
	}
	cout << endl;

	ArrayList arrayList2(arrayList1);
	arrayList2.print();
	cout << "arrayList2 arraySize == " << arrayList2.getArraySize() << endl;
	cout << "arrayList2 numElements == " << arrayList2.getNumElements() << endl;
	cout << "This should print 10 ArrayList Index Out of Bounds Error messages, and 10 garbage int values:\n";
	unsigned int index_count2 = 0;
	for (; index_count2 < 10; index_count2++) {
		cout << arrayList2[index_count2] << " ";
	}
	cout << endl;

	cout << "Test Success? "
		 << ((arrayList1.getArraySize() == arrayList2.getArraySize()) &&
			 (arrayList1.getNumElements() == arrayList2.getNumElements()) &&
			 (index_count1 == index_count2)) << endl;
	cout << endl;
}

void copyConstructorWithElementsTest() {
	cout << "Copy-Constructor with Elements Test:" << endl;

	ArrayList arrayList1(10);
	for (int i = 0; i < 5; i++) {
		arrayList1.insert(i, i);
	}
	arrayList1.print();
	cout << "arrayList1 arraySize == " << arrayList1.getArraySize() << endl;
	cout << "arrayList1 numElements == " << arrayList1.getNumElements() << endl;

	ArrayList arrayList2(arrayList1);
	arrayList2.print();
	cout << "arrayList2 arraySize == " << arrayList2.getArraySize() << endl;
	cout << "arrayList2 numElements == " << arrayList2.getNumElements() << endl;

	bool isDataEqual = true;
	for (int i = 0; i < 5; i++) {
		if (arrayList1[i] != arrayList2[i]) {
			isDataEqual = false;
			break;
		}
	}

	cout << "Test Success? "
		 << ((arrayList1.getArraySize() == arrayList2.getArraySize()) &&
			 (arrayList1.getNumElements() == arrayList2.getNumElements()) &&
			  isDataEqual) << endl;
	cout << endl;
}

void copyAssignmentOperatorTest() {
	cout << "Copy-Assignment Operator Test:" << endl;

	ArrayList arrayList1(5);
	arrayList1.print();
	cout << "arrayList1 arraySize == " << arrayList1.getArraySize() << endl;
	cout << "arrayList1 numElements == " << arrayList1.getNumElements() << endl;
	cout << "This should print 5 ArrayList Index Out of Bounds Error messages, and 5 garbage int values:\n";
	unsigned int index_count1 = 0;
	for (; index_count1 < 5; index_count1++) {
		cout << arrayList1[index_count1] << " ";
	}
	cout << endl;

	ArrayList arrayList2(10);
	arrayList2.print();
	cout << "arrayList2 arraySize == " << arrayList2.getArraySize() << endl;
	cout << "arrayList2 numElements == " << arrayList2.getNumElements() << endl;
	cout << "This should print 10 ArrayList Index Out of Bounds Error messages, and 10 garbage int values:\n";
	unsigned int index_count2 = 0;
	for (; index_count2 < 10; index_count2++) {
		cout << arrayList2[index_count2] << " ";
	}
	cout << endl;

	arrayList1 = arrayList2;
	arrayList1.print();
	cout << "arrayList1 arraySize == " << arrayList1.getArraySize() << endl;
	cout << "arrayList1 numElements == " << arrayList1.getNumElements() << endl;
	cout << "This should print 10 ArrayList Index Out of Bounds Error messages, and 10 garbage int values:\n";
	unsigned int index_count3 = 0;
	for (; index_count3 < 10; index_count3++) {
		cout << arrayList1[index_count3] << " ";
	}
	cout << endl;

	cout << "Test Success? "
		 << ((arrayList1.getArraySize() == arrayList2.getArraySize()) &&
			 (arrayList1.getNumElements() == arrayList2.getNumElements()) &&
			 (index_count3 == index_count2)) << endl;
	cout << endl;
}

void copyAssignmentOperatorWithElementsTest() {
	cout << "Copy-Assignment Operator with Elements Test:" << endl;

	ArrayList arrayList1(5);
	for (int i = 0; i < 5; i++) {
		arrayList1.insert(i, i);
	}
	arrayList1.print();
	cout << "arrayList1 arraySize == " << arrayList1.getArraySize() << endl;
	cout << "arrayList1 numElements == " << arrayList1.getNumElements() << endl;

	ArrayList arrayList2(10);
	for (int i = 0; i < 10; i++) {
		arrayList2.insert(i, i);
	}
	arrayList2.print();
	cout << "arrayList2 arraySize == " << arrayList2.getArraySize() << endl;
	cout << "arrayList2 numElements == " << arrayList2.getNumElements() << endl;

	arrayList1 = arrayList2;
	arrayList1.print();
	cout << "arrayList1 arraySize == " << arrayList1.getArraySize() << endl;
	cout << "arrayList1 numElements == " << arrayList1.getNumElements() << endl;

	bool isDataEqual = true;
	for (int i = 0; i < 10; i++) {
		if (arrayList1[i] != arrayList2[i]) {
			isDataEqual = false;
			break;
		}
	}

	cout << "Test Success? "
		 << ((arrayList1.getArraySize() == arrayList2.getArraySize()) &&
			 (arrayList1.getNumElements() == arrayList2.getNumElements()) &&
			  isDataEqual) << endl;
	cout << endl;
}



int main() {
	cout << boolalpha; // We will display bool values as true/false instead of 1/0.

	cout << "One ArrayList with variable name arrayList and default 0 arraySize has been created for you to test." << endl;
	ArrayList arrayList;

	char operation;
	unsigned int index;
	int data;
	do {
		cout << "\n"
			 << "1. Print ArrayList elements\n"
			 << "2. Print ArrayList numElements\n"
			 << "3. Print ArrayList arraySize\n"
			 << "4. Print Element at Index\n"
			 << "5. Assign Element at Index\n"
			 << "6. Insert Element at Index\n"
			 << "7. Remove Element at Index\n"
			 << "8. Remove All Elements\n"
			 << "9. Quick Insert, [0, N) to end of ArrayList. Duplicates allowed.\n"
			 << "R. Run Resize ArrayList Test. Will not affect this arrayList.\n"
			 << "T. Run Constructor, Copy-Constructor, Assignment Operator Tests. Will not affect this arrayList.\n"
			 << "Q: Quit\n"
			 << "\n"
			 << "Please select an operation: ";
		cin >> operation;

		switch (operation) {
		case '1':
			arrayList.print();
			break;

		case '2':
			cout << "arrayList.numElements == " << arrayList.getNumElements() << endl;
			break;

		case '3':
			cout << "arrayList.arraySize == " << arrayList.getArraySize() << endl;
			break;

		case '4':
			cout << "Index: ";
			cin >> index;
			cout << "arrayList[" << index << "] == " << arrayList[index] << endl;
			break;

		case '5':
			cout << "Index: ";
			cin >> index;
			cout << "Data: ";
			cin >> data;
			arrayList[index] = data;
			cout << "arrayList[" << index << "] = " << arrayList[index] << endl;
			break;

		case '6':
			cout << "Index: ";
			cin >> index;
			cout << "Data: ";
			cin >> data;
			arrayList.insert(index, data);
			break;

		case '7':
			cout << "Index: ";
			cin >> index;
			arrayList.remove(index);
			break;

		case '8':
			arrayList.removeAll();
			break;

		case '9':
			cout << "N: ";
			cin >> index;
			for (unsigned int i = 0; i < index; i++) {
				arrayList.insert(arrayList.getNumElements(), i);
			}
			break;

		case 'r':
		case 'R':
			resizeArrayTest();
			break;

		case 't':
		case 'T':
			constructorTest();
			copyConstructorTest();
			copyAssignmentOperatorTest();
			copyConstructorWithElementsTest();
			copyAssignmentOperatorWithElementsTest();
			break;

		case 'q':
		case 'Q':
			break;

		default:
			cout << "Invalid input." << endl;
			break;
		}

	} while ((operation != 'q') && (operation != 'Q'));

	return 0;
}
