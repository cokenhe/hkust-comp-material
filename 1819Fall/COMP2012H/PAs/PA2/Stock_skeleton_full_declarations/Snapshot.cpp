#include "Snapshot.h"

Snapshot createSnapshot (int* const currentTime) {

}

StockNode* duplicateList(StockNode* head) {

}

Snapshot stampSnapshot(Snapshot& earlier) {

}

void deleteList(StockNode* head){

}

void deleteSnapshot(Snapshot& snapshot) {

}

bool add(Snapshot& snapshot, int stockId, double value) {

}

bool remove(Snapshot& snapshot, int stockId) {

}

bool set(Snapshot& snapshot, int stockId, double value) {


}

bool undo(Snapshot& snapshot) {

}

double getValueAt(const Snapshot& snapshot, int stockId, int time) {

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
