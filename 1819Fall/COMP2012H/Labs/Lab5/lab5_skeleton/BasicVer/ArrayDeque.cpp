#include "ArrayDeque.h"

ArrayDeque::ArrayDeque(unsigned int startingArraySize): ArrayQueue(startingArraySize) {};
ArrayDeque::ArrayDeque(const ArrayDeque& arrayDeque): ArrayQueue(arrayDeque) {};
ArrayDeque::~ArrayDeque() {};

ArrayDeque& ArrayDeque::operator=(const ArrayDeque& arrayDeque) {
    ArrayQueue::operator=(arrayDeque);
    return *this;
};

int ArrayDeque::peekBack() const {
    return getDataAtIndex(0);
};

void ArrayDeque::pushFront(int element) {
    resizeArrayIfNeeded(PUSH);
    getDataAtIndex(numElements++) = element;
};

int ArrayDeque::popBack() {
    int temp = getDataAtIndex(0);
    // shift if numElements >= 2
    for (int i = 0; i + 1 < numElements; ++i)
        getDataAtIndex(i) = getDataAtIndex(i+1);
    numElements -= 1;

    resizeArrayIfNeeded(POP);
    return temp;
};

void ArrayDeque::popAllFromBack(int data[]) {
    if (data == nullptr) return;
    for (int i = 0; numElements > 0; ++i)
        data[i] = popBack();
    resizeArrayIfNeeded(POPALL);
};