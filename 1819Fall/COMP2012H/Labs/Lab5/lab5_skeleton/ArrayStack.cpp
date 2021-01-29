#include "ArrayStack.h"

ArrayStack::ArrayStack(unsigned int startingArraySize): ArrayAbstractQueue(startingArraySize) {};
ArrayStack::ArrayStack(const ArrayStack& arrayStack): ArrayAbstractQueue(arrayStack) {};
ArrayStack::~ArrayStack() {};

ArrayStack& ArrayStack::operator=(const ArrayStack& arrayStack) {
    ArrayAbstractQueue::operator=(arrayStack);
    return *this;
}

int ArrayStack::peek() const {
    return getDataAtIndex(0);
}

void ArrayStack::push(int element) {
    resizeArrayIfNeeded(PUSH);

    for (int i = numElements++; i > 0; --i)
        getDataAtIndex(i) = getDataAtIndex(i-1);
    getDataAtIndex(0) = element;
}

int ArrayStack::pop() {
    int temp = peek();
    // shift if numElements >= 2
    for (int i = 0; i + 1 < numElements; ++i)
        getDataAtIndex(i) = getDataAtIndex(i+1);
    numElements -= 1;

    resizeArrayIfNeeded(POP);
    return temp;
}

void ArrayStack::popAll(int data[]) {
    if (data == nullptr) return;
    for (int i = 0; numElements > 0; ++i)
        data[i] = pop();
    resizeArrayIfNeeded(POPALL);
}
