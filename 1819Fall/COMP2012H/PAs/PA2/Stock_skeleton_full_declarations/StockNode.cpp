#include "StockNode.h"

StockNode* createStockNode(int stockId, double value, StockNode* next) {

}

StockNode* createHeadNode(StockNode* next) {

}

void deleteStockNode(StockNode* node) {

}

int getStockId(const StockNode* const node) {
	return node->stock.stockId;
}

double getTopValue(const StockNode* const node) {
	// UpdateNode* p;
	// for (p = node->head; p->next != nullptr; p = p->next);
	// return p->update.updatedNext->stock.value;
	return getTopUpdateNode(node)->update.updatedNext->stock.value;
}

double getValueAt(const StockNode* const node, int time) {
	// UpdateNode* p = node->head;
	// for (int i = 1; i != time && p->next != nullptr; ++i, p = p->next);
	// return p->update.updatedNext->stock.value;
	return getUpdateNodeAt(node, time)->update.updatedNext->stock.value;
}

StockNode* getTopNext(const StockNode* const node) {
	// UpdateNode* p;
	// for (p = node->head; p->next != nullptr; p = p->next);
	// return p->update.updatedNext->next;
	return getTopUpdateNode(node)->update.updatedNext->next;
}

StockNode* getNextAt(const StockNode* const node, int time) {
	// UpdateNode* p = node->head;
	// for (int i = 1; i != time && p->next != nullptr; ++i, p = p->next)
	// return p->update.updatedNext->next;	
	return getUpdateNodeAt(node, time)->update.updatedNext->next;	
}

UpdateNode* getTopUpdateNode(const StockNode* const node) {
	UpdateNode* p = node->head;
	if (p == nullptr) return nullptr;
	for (; p->next != nullptr; p = p->next);
	return p;
}

UpdateNode* getUpdateNodeAt(const StockNode* const node, int time) {
	UpdateNode* p = node->head;
	if (p == nullptr) return nullptr;
	for (int i = 1; i != time && p->next != nullptr; ++i, p = p->next)
	return p;	
}

void push(StockNode* node, const Update& update) {

}

void pop(StockNode* node) {

}

bool isHead(const StockNode* const node) {
	return node->stock.stockId == -1;
}

double getValue(const StockNode* const node) {
	return isHead(node) ? -1 : node->stock.value;
}
