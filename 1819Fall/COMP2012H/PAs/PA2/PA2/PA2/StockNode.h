// do NOT submit this file
// do NOT modify this file

#ifndef SRC_NODE_H_
#define SRC_NODE_H_

#include "Stock.h"
#include "Update.h"
#include "UpdateNode.h"

// StockNode stores a stock, the pointer to the next node, and a linked list of updates.
// Use this to implement the linked list of stocks of a snapshot.
struct StockNode {
	Stock stock;  // stock stores a Stock object. Its stockID is -1 if it is the sentinel head node.
	StockNode* next;  // next points to its next node.
	UpdateNode* head;  // head points to the head of the linked list of updates;
};

/*
 * Initialize stock with the corresponding stockId and value.
 * Initialize next correctly.
 * The linked list of updates is empty initially.
 * For convenience, next is nullptr by default.
 */
StockNode* createStockNode(int stockId, double value, StockNode* next = nullptr);

/*
 * stock should have stockID -1.
 * Initialize next correctly.
 * The linked list of updates is empty initially.
 * Note that this function is called if and only if a head node will be created.
 * For convenience, next is nullptr by default.
 */
StockNode* createHeadNode(StockNode* next = nullptr);

/*
 * *****************************************************************************************************
 *
 *
 * NOTE: For all the global functions below, you can assume node is NOT a nullptr, for simplicity.
 *
 *
 * *****************************************************************************************************
 */

// Avoid memory leak.
// Do not delete next here.
void deleteStockNode(StockNode* node);

/*
 * If it is not a head node, return the ID of the stock of the node.
 * Otherwise, return -1.
 */
int getStockId(const StockNode* const node);

/*
 * If it is not a head node, return the most recent value of the stock of the node.
 * Otherwise, return -1.
 */
double getTopValue(const StockNode* const node);

/*
 * If it is not a head node, return the value of the stock of the node at that time.
 * Otherwise, return -1.
 * You can assume time is not less than the time when the node is created.
 */
double getValueAt(const StockNode* const node, int time);

/*
 * Return the most recent pointer to the next node.
 */
StockNode* getTopNext(const StockNode* const node);

/*
 * Return the pointer to the next node at that time.
 * You can assume time is not less than the time when the node is created.
 */
StockNode* getNextAt(const StockNode* const node, int time);

/*
 * If the linked list of updates is empty, return nullptr.
 * Otherwise, return the most recent UpdateNode of the list.
 */
UpdateNode* getTopUpdateNode(const StockNode* const node);

/*
 * If the linked list of updates is empty, return nullptr.
 * Otherwise, return the UpdateNode whose update time is closest to time and not larger than time.
 * If such UpdateNode does not exist, return nullptr.
 */
UpdateNode* getUpdateNodeAt(const StockNode* const node, int time);

/*
 * Insert the UpdateNode before the head.
 * The head should now point to a newly created UpdateNode, which stores the update.
 * And the UpdateNode points to the previous head.
 * You can assume update is not the same as any updates in its linked list of updates.
 */
void push(StockNode* node, const Update& update);

/*
 * Delete the head of the UpdateNode linked list.
 * If the linked list is empty, do nothing.
 * The head should now be the next of the original head.
 * Note that you should avoid memory leak.
 */
void pop(StockNode* node);

// The following functions are given. Do not modify them.

// Note that a node is a head node if and only if stockId is -1.
bool isHead(const StockNode* const node);

// getter, return the value of the node when it is created.
double getValue(const StockNode* const node);

#endif /* SRC_NODE_H_ */
