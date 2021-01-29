#include "ArrayList.h"

/*****************************************************
 * Constructors, Assignment Operators, Destructor    *
 * Note: Remember to use Member-Initialization Lists *
 *****************************************************/

// Constructor
// Usage: ArrayList arrayList; ArrayList arrayList(10);
ArrayList::ArrayList(unsigned int arraySize) 
	: arraySize(arraySize), numElements(0), data(new int[arraySize]) {
}

// Copy-Constructor
// Usage: ArrayList arrayList(anotherArrayList);
ArrayList::ArrayList(const ArrayList& arrayList) 
	: arraySize(arrayList.arraySize), numElements(arrayList.numElements) {
		data = new int[arraySize];
		for (int i = 0; i < arraySize; ++i) 
			data[i] = arrayList[i];
}

// Copy-Assignment Operator
// Usage: ArrayList arrayList = anotherArrayList;
ArrayList& ArrayList::operator=(const ArrayList& arrayList) {
	// Self-assignment (e.g. x = x) should just do nothing and return itself unchanged.
	if (this == &arrayList) {
		return *this;
	}
	arraySize = arrayList.arraySize;
	numElements = arrayList.numElements;
	delete [] data;
	data = new int[arraySize];
	for (int i = 0; i < arraySize; ++i) 
		data[i] = arrayList[i];
	return *this;
}

// Destructor. Automatically called whenever ArrayList objects go out-of-scope.
ArrayList::~ArrayList() {
	delete [] data;
}



/****************************
 * private member functions *
 ****************************/

// Deep-copy the elements (if any) to the new array.
// Remember to deallocate the old array.
// One edge case to handle is if newSize < numElements, we will drop the excess elements and reduce numElements accordingly.
// Also remember to set data to nullptr if newSize is 0.
void ArrayList::resizeArray(unsigned int newSize) {
	int* data = new int[newSize];
	if (newSize != 0) {
		int range = newSize > numElements ? numElements : newSize;
		for (int i = 0; i < range; ++i) {
			data[i] = this->data[i];
		}
	}

	arraySize = newSize;
	delete [] this->data;
	this->data = data;
}


/***************************
 * public member functions *
 ***************************/

// We can use the subscript[] operator just like the regular array.
int& ArrayList::operator[](unsigned int index) {
	if (index >= numElements) {
		cerr << "WARNING: ArrayList Index Out of Bounds!" << endl;
	}

	return data[index];
}

// This allows us to still use the subscript[] operator with a const ArrayList.
const int& ArrayList::operator[](unsigned int index) const {
	if (index >= numElements) {
		cerr << "WARNING: ArrayList Index Out of Bounds!" << endl;
	}

	return data[index];
}

unsigned int ArrayList::getNumElements() const {
	return numElements;
}

unsigned int ArrayList::getArraySize() const {
	return arraySize;
}

// We insert in the position specified by index, such that arrayList.data[index] == data.
// index == length to insert after the last existing element.
// If index > length, do nothing.
// Remember to double the size of the array if it is full when trying to insert.
// If the array is size 0, then just +1 to the size instead.
// Also remember to use the "this" pointer to differentiate between the "data" array name and "data" argument.
void ArrayList::insert(unsigned int index, int data) {
	if (index > numElements) {
		return;
	}
	if (arraySize == numElements) 
		arraySize == 0 ? resizeArray(1) : resizeArray(arraySize * 2);
	
	for (int i = numElements; i > index; --i)
		this->data[i] = this->data[i-1];
	this->data[index] = data;
	++numElements;
}

// We remove the item specified by index, and shift the remaining elements to close the gap (if any).
// You can see the advantages of Linked List implementation, especially when we remove the first element.
// Remember to halve the size of the array if it is only 1/4 usage after removal.
// Special case if there are no elements BEFORE removal, whereby we will deallocate the data array and set it to nullptr.
void ArrayList::remove(unsigned int index) {

	if (index > (numElements - 1)) {
		return;
	}

	if (numElements == 0) {
		resizeArray(0);
		return ;
	}
	for (int i = index; i < arraySize - 1; ++i) 
		data[i] = data[i + 1];

	if (arraySize / 4 >= --numElements) resizeArray(arraySize / 2);
}

// Bonus point if you can implement this with only 1 line of code.
void ArrayList::removeAll() {
	*this = ArrayList();
}

void ArrayList::print() const {
	if (numElements == 0) {
		cout << "ArrayList is empty!" << endl;
		return;
	}

	for (unsigned int i = 0; i < numElements; i++) {
		cout << data[i] << " ";
	}
	cout << endl;
}
