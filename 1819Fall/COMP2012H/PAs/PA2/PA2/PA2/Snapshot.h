// do NOT submit this file
// do NOT modify this file

#ifndef SRC_SNAPSHOT_H_
#define SRC_SNAPSHOT_H_

#include <iostream>
using std::cout;
using std::endl;

#include "Stock.h"
#include "StockNode.h"

// Snapshot has a linked list of stocks, a pointer to an integer that represents the current time,
// and the time at which the Snapshot is created.
// It represents the states of the StockNodes in the database at a certain interval in time.
struct Snapshot {
    StockNode* head;  // The head of the linked list of stocks.
                    // A head node must be created every time a snapshot is created (i.e. head should never be a nullptr).
                    // head (this data member, not the actual head node) should point to the same node (head node),
                    // regardless of the operations.

    int* const currentTime;  // Points to the current time instance.
                     // Note that it is an integer pointer,
                     // so that every snapshot in a database share the same currentTime.
                     // *currentTime will be incremented every time an operation is done in the snapshot.

    int time;  // The time at which the snapshot is created.
};


/*
 * create a Snapshot object and return it.
 * Its head should point to a dynamically created Head node.
 * Initialize currentTime and time.
 */
Snapshot createSnapshot(int* const currentTime);

/*
 * Replicate the most recent state/the top of the earlier snapshot and return it.
 * This snapshot's head should point to the Head node of a newly created linked list,
 * and each of the nodes has no update initially,
 * such that print(earlier) is same as print(the stamped snapshot), at this moment,
 * and head is not a nullptr.
 * Initialize currentTime and time appropriately as well. They should share the same currentTime.
 * Note that deep copy is required for the linked list.
 *
 * You can assume earlier is not a nullptr.
 */
Snapshot stampSnapshot(Snapshot& earlier);

/*
 * *****************************************************************************************************
 *
 *
 * NOTE: For all the global functions below, you can assume snapshot is NOT a nullptr, for simplicity.
 *
 *
 * *****************************************************************************************************
 */

/*
 * Avoid memory leak.
 * Deallocate the memory of any objects dynamically created during its construction and
 * any one of the operations.
 * Hint: you can safely use undo.
 * Therefore, you can assume all snapshots are deleted from the the latest to the earliest when we do grading.
 */
void deleteSnapshot(Snapshot& snapshot);

// operation:
/*
 * Add a stock of the corresponding stockId and value to the linked list at the current time by pushing an update.
 * The linked list should be sorted by the stocks' ID, in ascending order, such that
 * printing should show a linked list sorted by ID at any time. It will return true if the stock
 * is successfully added and false otherwise.
 *
 * If a stock with the same stockId already exists at the current time, do nothing and return false.
 * For example, if a stock with an ID 1 exists at time 10 and is removed at time 11, then at time 12,
 * the stock does not exist.
 *
 * If the stock does not exist at the current time (even if it existed before),
 * create a new StockNode storing that stock and create an update with time *currentTime + 1.
 * Then, push the update to a proper node.
 * Remember to increment *currentTime and return true;
 *
 * You can assume both stockId and value are non-negative.
 */
bool add(Snapshot& snapshot, int stockId, double value);

// operation:
/*
 * Remove a stock of the corresponding stockId in the linked list at the current time by pushing an update.
 * It will return true if the stock is successfully removed and false otherwise.
 *
 * If a stock with the same stockId exists at the current time, remove it by creating an update with time
 * *currentTime + 1 and pushing it to a proper node. Remember to increment *currentTime and return true.
 *
 * If the stock does not exist at the current time, do nothing and return false.
 *
 * You can assume stockId is non-negative.
 */
bool remove(Snapshot& snapshot, int stockId);

// operation:
/*
 * Set the value of the stock of the corresponding stockId at the current time by pushing an update.
 * It will return true if the stock is successfully set and false otherwise.
 *
 * If a stock with the same stockId exists at the current time, set its value by creating an update with
 * time *currentTime + 1 and pushing it to a proper node. Remember to increment *currentTime and return true.
 *
 * If the stock does not exist at the current time, do nothing and return false.
 *
 * You can assume stockId is non-negative.
 */
bool set(Snapshot& snapshot, int stockId, double value);

/*
 * Undo the effects of the operation most recently performed.
 *
 * Note that you should delete some dynamically created objects to avoid memory leak.
 * Remember to decrement *currentTime.
 * If there is nothing to undo, do nothing and return false,
 * return true otherwise.
 */
bool undo(Snapshot& snapshot);

/*
 * Return the value of the stock with ID stockId at a certain time.
 * If the stock exists at the time, return its value at the time.
 * If the stock does not exist at the time, return -1.
 *
 * You can assume stockId is non-negative and time is within the snapshot's time interval.
 */
double getValueAt(const Snapshot& snapshot, int stockId, int time);

// The following functions are given. Do not modify them.

// Print the current states of the linked list.
void printSnapshot(const Snapshot& snapshot);

// Print the states of the stock of an ID in the snapshot's time interval.
void printStock(const Snapshot& snapshot, int stockId, int interval);

#endif /* SRC_SNAPSHOT_H_ */
