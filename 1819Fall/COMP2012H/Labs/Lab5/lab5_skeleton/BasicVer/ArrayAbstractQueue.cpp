#include "ArrayAbstractQueue.h"

ArrayAbstractQueue::ArrayAbstractQueue(unsigned int startingArraySize) :
	data(nullptr),
	arraySize(startingArraySize),
	numElements(0),
	headIndex(0) {
	if (arraySize > 0) {
		data = new int[arraySize];
	}
}

ArrayAbstractQueue::ArrayAbstractQueue(const ArrayAbstractQueue& arrayAbstractQueue) :
	data(nullptr),
	arraySize(arrayAbstractQueue.arraySize),
	numElements(arrayAbstractQueue.numElements),
	headIndex(arrayAbstractQueue.headIndex) {
	if (arraySize > 0) {
		data = new int[arraySize];

		// Bonus Task: Modify to be compatible with Circular Array implementation.
		for (unsigned int i = 0; i < numElements; i++) {
			data[i] = arrayAbstractQueue.data[i];
		}
		// end Bonus Task.
	}
}

ArrayAbstractQueue::~ArrayAbstractQueue() {
	delete[] data;
}

ArrayAbstractQueue& ArrayAbstractQueue::operator=(const ArrayAbstractQueue& arrayAbstractQueue) {
	if (this == &arrayAbstractQueue) {
		return *this;
	}

	if (arraySize != arrayAbstractQueue.arraySize) {
		delete[] data;

		if (arrayAbstractQueue.arraySize > 0) {
			data = new int[arrayAbstractQueue.arraySize];
		}
		else {
			data = nullptr;
		}

		arraySize = arrayAbstractQueue.arraySize;
	}

	headIndex = arrayAbstractQueue.headIndex;
	numElements = arrayAbstractQueue.numElements;

	// Bonus Task: Modify to be compatible with Circular Array implementation.
	for (unsigned int i = 0; i < numElements; i++) {
		data[i] = arrayAbstractQueue.data[i];
	}
	// end Bonus Task.

	return *this;
}

int& ArrayAbstractQueue::getDataAtIndex(unsigned int index) {
	return data[index];
}

const int& ArrayAbstractQueue::getDataAtIndex(unsigned int index) const {
	return data[index];
}

int ArrayAbstractQueue::getArraySize() const {
	return arraySize;
}

unsigned int ArrayAbstractQueue::getNumElements() const {
	return numElements;
}

void ArrayAbstractQueue::resizeArray(unsigned int newArraySize) {
	if (arraySize == newArraySize) {
		return;
	}

	int* newArray = nullptr;
	if (newArraySize > 0) {
		newArray = new int[newArraySize];
	}

	// Bonus Task: Modify to be compatible with Circular Array implementation.
	for (unsigned int i = 0; (i < newArraySize) && (i < numElements); i++) {
		newArray[i] = data[i];
	}
	// end Bonus Task.

	delete[] data;
	data = newArray;
	arraySize = newArraySize;

	if (arraySize < numElements) {
		numElements = arraySize;
	}

	headIndex = 0;
}

// Use enum Operation values as declared in ArrayAbstractQueue.h.
// This function will be called by derived classes at the start of push(), at the end of pop(), and at the end of popAll().
// From here, call resizeArray() if needed, and with the appropriate size.
// If called by push(), double array if it is completely-full.
// If called by pop(), halve the array if it is quarter-full. No need to special-handle the edge case of pop while already empty.
// If called by popAll(), delete the array.
void ArrayAbstractQueue::resizeArrayIfNeeded(Operation operation) {
	switch (operation) {
	case PUSH:
		if (numElements >= arraySize) {
			resizeArray((arraySize == 0) ? 1 : (2 * arraySize));
		}
		break;

	case POP:
		if (numElements <= arraySize / 4) {
			resizeArray(arraySize / 2);
		}
		break;

	case POPALL:
		resizeArray(0);
		break;

	default:
		break;
	}
}


// Debug function: print out data[]

#include <iostream>
using namespace std;
void ArrayAbstractQueue::printData() const {
	cout << "arraySize = " << getArraySize() << endl;
	cout << "numElements = " << numElements << endl;

	cout << "Data[]: ";
	for (int i = 0; i < numElements; ++i) 
		cout << data[i] << ' ';
	cout << endl;
}