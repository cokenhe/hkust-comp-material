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

    headIndex = (headIndex == 0) ? getArraySize() - 1 : headIndex - 1;
    getDataAtIndex(headIndex) = element;
    numElements += 1;
};

int ArrayDeque::popBack() {
    int temp = getDataAtIndex((headIndex + --numElements ) % getArraySize());
    resizeArrayIfNeeded(POP);
    return temp;
};

void ArrayDeque::popAllFromBack(int data[]) {
    if (data == nullptr) return;
    for (int i = 0; numElements > 0; ++i)
        data[i] = popBack();
    resizeArrayIfNeeded(POPALL);
};