#ifndef ARRAYQUEUE_H_
#define ARRAYQUEUE_H_

#include "ArrayAbstractQueue.h"

class ArrayQueue : public ArrayAbstractQueue {
public:
	ArrayQueue(unsigned int startingArraySize = 0);
	ArrayQueue(const ArrayQueue& arrayQueue);
	virtual ~ArrayQueue();
	ArrayQueue& operator=(const ArrayQueue& arrayQueue);

	virtual int peek() const override;
	virtual void push(int element) override;
	virtual int pop() override;
	virtual void popAll(int data[] = nullptr) override;
};

#endif /* ARRAYQUEUE_H_ */
