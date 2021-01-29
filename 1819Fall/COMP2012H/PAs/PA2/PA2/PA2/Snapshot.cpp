#include "Snapshot.h"

Snapshot createSnapshot (int* const currentTime) {
    return Snapshot {createHeadNode(), currentTime, *currentTime};  // REMARK: head (this data member, not the actual head node) should point to the same node (head node)
}

// StockNode* duplicateList(StockNode* head) {

// }

Snapshot stampSnapshot(Snapshot& earlier) {
    Snapshot newSnap = createSnapshot(earlier.currentTime);
    StockNode* ptr = earlier.head;
    StockNode* newPtr = newSnap.head;
    while (getTopNext(ptr) != nullptr) {
        newPtr->next = createStockNode(getStockId(getTopNext(ptr)), getValue(getTopNext(ptr)));
        ptr = getTopNext(ptr);
        newPtr = getTopNext(newPtr);
    }
    return newSnap;
}

//void deleteList(StockNode* head){
//
//}

void deleteSnapshot(Snapshot& snapshot) {
    while (undo(snapshot));
}

bool add(Snapshot& snapshot, int stockId, double value) {
    StockNode* p = snapshot.head;

    for (;getTopNext(p) && getStockId(getTopNext(p)) < stockId; p = getTopNext(p));

    if (getTopNext(p) && getStockId(getTopNext(p)) == stockId) return false;

    StockNode* stockNode = createStockNode(stockId, value, getTopNext(p));
    Update update {getValue(p), stockNode, Update::ADD, ++(*(snapshot.currentTime))};
    push(p, update);
    return true;
}

bool remove(Snapshot& snapshot, int stockId) {
    StockNode* prev = snapshot.head;
    StockNode* p = getTopNext(snapshot.head);
    for (; p != nullptr && getStockId(p) != stockId; prev = p, p = getTopNext(p));
    if (p == nullptr) return false;

    Update update {getValue(prev), getTopNext(p), Update::REMOVE, ++(*(snapshot.currentTime))};
    push(prev, update);
    return true;
}

bool set(Snapshot& snapshot, int stockId, double value) {
    StockNode* p = getTopNext(snapshot.head);
    for (; p != nullptr && getStockId(p) != stockId; p = getTopNext(p));
    if (p == nullptr) return false;

    Update update {value, getTopNext(p), Update::SET, ++(*(snapshot.currentTime))};
    push(p, update);
    return true;
}

bool undo(Snapshot& snapshot) {
    if (snapshot.time > *(snapshot.currentTime)) return false;
    if (*(snapshot.currentTime) == 0) return false;

    StockNode* p = snapshot.head;
    for (; getTopNext(p) && p->head && p->head->update.time != *(snapshot.currentTime); p = getTopNext(p));

    if (p->head && p->head->update.type == Update::ADD)
        delete p->head->update.updatedNext;
    pop(p);
    --(*(snapshot.currentTime));
    return true;
}

double getValueAt(const Snapshot& snapshot, int stockId, int time) {
    StockNode* p = getTopNext(snapshot.head);
    for (; p && getStockId(p) != stockId; p = getTopNext(p));
    if (p == nullptr) return -1;

    return isHead(p) ? -1
        : getValueAt(p, time) == -1 ? getValue(p)
        : getValueAt(p, time);
}

void printSnapshot(const Snapshot& snapshot) {
   cout << "Printing Snapshot: " << endl;
   for(StockNode* n = getTopNext(snapshot.head); n != nullptr; n = getTopNext(n)) {
       cout << '(' << getStockId(n) << ',' << getTopValue(n) << ")  ";
   }
   cout << endl;
}

void printStock(const Snapshot& snapshot, int stockId, int interval) {
   cout << "Printing Stock: " << stockId << endl;
   for(int i = snapshot.time; i <= snapshot.time + interval; i++) {
       cout << '(' << stockId << ',' << getValueAt(snapshot, stockId, i) << ")  ";
   }
   cout << endl;
}
