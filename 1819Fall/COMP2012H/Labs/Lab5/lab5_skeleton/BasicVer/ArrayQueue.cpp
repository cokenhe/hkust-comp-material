#include "ArrayQueue.h"

ArrayQueue::ArrayQueue(unsigned int startingArraySize): ArrayAbstractQueue(startingArraySize) {};
ArrayQueue::ArrayQueue(const ArrayQueue& arrayQueue): ArrayAbstractQueue(arrayQueue) {};
ArrayQueue::~ArrayQueue() {};

ArrayQueue& ArrayQueue::operator=(const ArrayQueue& arrayQueue) {
    ArrayAbstractQueue::operator=(arrayQueue);
    return *this;
}

int ArrayQueue::peek() const {
    return getDataAtIndex(numElements - 1);
}

void ArrayQueue::push(int element) {
    resizeArrayIfNeeded(PUSH);

    for (int i = numElements++; i > 0; --i)
        getDataAtIndex(i) = getDataAtIndex(i-1);
    getDataAtIndex(0) = element;
}

int ArrayQueue::pop() {
    int temp = getDataAtIndex(--numElements);
    resizeArrayIfNeeded(POP);
    return temp;
}

void ArrayQueue::popAll(int data[]) {
    if (data == nullptr) return;
    for (int i = 0; numElements > 0; ++i)
        data[i] = pop();
    resizeArrayIfNeeded(POPALL);
}
