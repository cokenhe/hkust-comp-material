#ifndef ABSTRACTQUEUE_H_
#define ABSTRACTQUEUE_H_

class AbstractQueue {
public:
	virtual ~AbstractQueue() {};
	virtual int peek() const = 0;
	virtual void push(int element) = 0;
	virtual int pop() = 0;
	virtual void popAll(int data[] = nullptr) = 0;
};

#endif /* ABSTRACTQUEUE_H_ */
