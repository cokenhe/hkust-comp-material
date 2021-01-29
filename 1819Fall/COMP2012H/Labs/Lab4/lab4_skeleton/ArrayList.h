#ifndef ARRAYLIST_H_
#define ARRAYLIST_H_

#include <iostream>
using std::cerr;
using std::cout;
using std::endl;

class ArrayList {
	private:
	unsigned int arraySize; // Current Capacity of the data array.
	unsigned int numElements; // Actual number of non-garbage elements in the data array.
	int* data; // Dynamically allocated array. Set to nullptr if arraySize is 0.

	void resizeArray(unsigned int newSize);



	public:
	ArrayList(unsigned int arraySize = 0); // Constructor
	ArrayList(const ArrayList& arrayList); // Copy-Constructor
	ArrayList& operator=(const ArrayList& arrayList); // Copy-Assignment Operator
	~ArrayList(); // Destructor

	int& operator[](unsigned int index);
	const int& operator[](unsigned int index) const;
	unsigned int getNumElements() const;
	unsigned int getArraySize() const;
	void insert(unsigned int index, int data);
	void remove(unsigned int index);
	void removeAll();
	void print() const;
};

#endif /* ARRAYLIST_H_ */
