#ifndef ARRAYSTACK_H_
#define ARRAYSTACK_H_

#include "ArrayAbstractQueue.h"

class ArrayStack : public ArrayAbstractQueue {
public:
	ArrayStack(unsigned int startingArraySize = 0);
	ArrayStack(const ArrayStack& arrayStack);
	virtual ~ArrayStack();
	ArrayStack& operator=(const ArrayStack& arrayStack);

	virtual int peek() const override;
	virtual void push(int element) override;
	virtual int pop() override;
	virtual void popAll(int data[] = nullptr) override;
};

#endif /* ARRAYSTACK_H_ */
