#ifndef ARRAYABSTRACTQUEUE_H_
#define ARRAYABSTRACTQUEUE_H_

#include "AbstractQueue.h"

class ArrayAbstractQueue : public AbstractQueue {
private:
	int* data;
	unsigned int arraySize;
	void resizeArray(unsigned int newArraySize); // Derived classes don't need to handle the optimal resizeArray implementation details.

protected:
	unsigned int numElements;
	unsigned int headIndex; // Only used for implementing the circular array Bonus Task for Queue and Deque.
	int getArraySize() const; // Only used for implementing the circular array Bonus Task for Queue and Deque.
	int& getDataAtIndex(unsigned int index); // Allows access and modification to the contents of data[], without changing the pointer.
	const int& getDataAtIndex(unsigned int index) const; // Paired const version to work with other const functions.
	enum Operation {PUSH, POP, POPALL};
	void resizeArrayIfNeeded(Operation operation); // Call this function at start of push(), at end of pop(), and at the end of popAll(), for derived classes.

public:
	ArrayAbstractQueue(unsigned int startingArraySize = 0);
	ArrayAbstractQueue(const ArrayAbstractQueue& arrayAbstractQueue);
	virtual ~ArrayAbstractQueue();
	ArrayAbstractQueue& operator=(const ArrayAbstractQueue& arrayAbstractQueue);
	unsigned int getNumElements() const;

	void printData() const;
};

#endif /* ARRAYABSTRACTQUEUE_H_ */
