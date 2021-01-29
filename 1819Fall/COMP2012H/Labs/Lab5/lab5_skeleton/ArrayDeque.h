#ifndef ARRAYDEQUE_H_
#define ARRAYDEQUE_H_

#include "ArrayQueue.h"

class ArrayDeque : public ArrayQueue {
public:
    ArrayDeque(unsigned int startingArraySize = 0);
    ArrayDeque(const ArrayDeque& arrayDeque);
    virtual ~ArrayDeque();
    ArrayDeque& operator=(const ArrayDeque& arrayQueue);

    virtual int peekBack() const;
    virtual void pushFront(int element);
    virtual int popBack();
    virtual void popAllFromBack(int data[] = nullptr);
};

#endif /* ARRAYDEQUE_H_ */
