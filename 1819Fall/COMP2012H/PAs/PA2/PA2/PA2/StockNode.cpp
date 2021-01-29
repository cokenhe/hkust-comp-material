#include "StockNode.h"

StockNode* createStockNode(int stockId, double value, StockNode* next) {
	StockNode* newNode = new StockNode {stockId, value};
	newNode->next = next;
	newNode->head = nullptr;
	return newNode;
}

StockNode* createHeadNode(StockNode* next) {
	StockNode* head = new StockNode {-1, -1};
	head->next = next;
	head->head = nullptr;
	return head;
}

void deleteStockNode(StockNode* node) {
	UpdateNode* tempUpdate = nullptr;
	UpdateNode* p = node->head;
	while (p != nullptr) {
		tempUpdate = p;
		p = p->next;
		delete tempUpdate;
	}
	tempUpdate = nullptr;

	StockNode* tempStock = node;
    node = node->next;
	delete tempStock;
    tempStock = nullptr;
}

int getStockId(const StockNode* const node) {
	return node->stock.stockId;
}

double getTopValue(const StockNode* const node) {
	return isHead(node) ? -1
    		: (node->head == nullptr) ? getValue(node)
    		: node->head->update.updatedValue;
}

double getValueAt(const StockNode* const node, int time) {
    return isHead(node) || !getUpdateNodeAt(node, time) ? -1 : getUpdateNodeAt(node, time)->update.updatedValue;
}

StockNode* getTopNext(const StockNode* const node) {
	return (node->head == nullptr) ? node->next : getTopUpdateNode(node)->update.updatedNext;
}

StockNode* getNextAt(const StockNode* const node, int time) {
    UpdateNode* update = getUpdateNodeAt(node, time);
    return (update == nullptr) ? node->next	: update->update.updatedNext;
}

UpdateNode* getTopUpdateNode(const StockNode* const node) {
	return node->head;
}

UpdateNode* getUpdateNodeAt(const StockNode* const node, int time) {
	UpdateNode* p = node->head;
	if (p == nullptr) return nullptr;
    for (; p->next && p->update.time > time; p = p->next);
	return (p->update.time <= time) ? p : nullptr;
}

void push(StockNode* node, const Update& update) {
	UpdateNode* newUpdateNode = new UpdateNode;
	newUpdateNode->next = node->head;
	newUpdateNode->update = update;
    node->head = newUpdateNode;
}

void pop(StockNode* node) {
	if (node->head == nullptr) return;
	
	UpdateNode* temp = node->head;
	node->head = node->head->next;
	delete temp;
	temp = nullptr;
}

bool isHead(const StockNode* const node) {
	return node->stock.stockId == -1;
}

double getValue(const StockNode* const node) {
	return isHead(node) ? -1 : node->stock.value;
}
