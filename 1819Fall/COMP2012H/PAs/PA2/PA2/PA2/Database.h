// do NOT submit this file
// do NOT modify this file

#ifndef SRC_DATABASE_H_
#define SRC_DATABASE_H_

#include <iostream>
using std::cout;
using std::endl;

#include "Snapshot.h"
#include "SnapshotNode.h"

// Database has a doubly linked list of snapshots, an integer that represents the current time,
// an interval after which the database has to stamp itself every time and a boolean flag to enable/disable the log function.
// The overall structure of the database is illustrated in the website.

struct Database {
    int interval;  // The interval of a snapshot.

    SnapshotNode* top;  // top points to the SnapshotNode whose snapshot's time is the largest.

    SnapshotNode* bottom;  //bottom points to the SnapshotNode whose snapshot's time is the smallest.

    int currentTime;  //Records the current time, passed to all the snapshots in this database.

    bool enableLog;  //The boolean flag to enable/disable the log function.
};

/*
 * *****************************************************************************************************
 *
 *
 * NOTE: For all the global functions below, you can assume database is NOT a nullptr, for simplicity.
 *
 *
 * *****************************************************************************************************
 */

/*
 * Initialize the interval. interval is 5 by default.
 * Initialize enableLog. enableLog is true by default.
 * The database is empty initially.
 * currentTime should be initialized to zero.
 *
 * You can assume interval is greater or equal to 1.
 */
Database createDatabase(int interval = 5, bool enableLog = true);

// Avoid memory leak.
void deleteDatabase(Database& database);

/*
 * returns the whether we should stamp the database.
 * The condition is described in the operations below.
 * This is a helper function for convenience.
 */
bool needToStamp(Database& database);

// operation:
/*
 * Add a stock of the corresponding stockId and value to most recent snapshot of the database.
 * If the operations fails, output a message (download and try the program to see) using the log function.
 * Otherwise, output another message (download and try the program to see) using the log function.
 *
 * If after this operation, the time interval (equivalent to number of operations stored in the snapshot)
 * of the snapshot exceeds the database's interval, you need to stamp the database BEFORE doing this operation.
 *
 * You can assume stockId is non-negative.
 */
void add(Database& database, int stockId, double value);

// operation:
/*
 * Remove a stock of the corresponding stockId in the most recent snapshot of the database.
 * If database is empty or the operation fails, output a message (download and try the program to see) using the log function.
 * Otherwise, output another message (download and try the program to see) using the log function.
 *
 * If after this operation, the time interval of the snapshot exceeds the database's interval,
 * you need to stamp the database BEFORE doing this operation.
 *
 * You can assume stockId is non-negative.
 */
void remove(Database& database, int stockId);

// operation:
/*
 * Change the value of a stock of the corresponding stockId to value in the most recent snapshot of the database.
 * If database is empty or the operation fails, output a message (download and try the program to see) using the log function.
 * Otherwise, output another message (download and try the program to see) using the log function.
 *
 * If after this operation, the time interval of the snapshot exceeds the database's interval,
 * you need to stamp the database BEFORE doing this operation.
 *
 * You can assume stockId is non-negative.
 */
void set(Database& database, int stockId, double value);

/*
 * Return the value of the stock in the database with ID stockId at a certain time.
 * If time is negative or is greater than currentTime,
 * or the database does not have any data yet, return -1.
 *
 * Otherwise,
 * If the stock exists at the time, return its value at the time.
 * If the stock does not exist at the time, return -1.
 *
 * You can assume stockId is non-negative.
 */
double getValueAt(const Database& database, int stockId, int time);

/*
 * Create a new SnapshotNode,
 * whose snapshot represents the most recent state of the most recent snapshot.
 * and add it to the linked list of snapshots of the database properly.
 * An example is given on the website. Please refer to it for more information.
 *
 * You can assume database is non empty, when using this function.
 */
void stamp(Database& database);

/*
 * Reconstruct the whole database so that it is the same as if the database was constructed
 * with interval = newInterval.
 * Relevant examples are given in the sample program.
 * This is a relatively heavier function.
 *
 * You are not allowed to use any library here. You can write your own helper functions though.
 *
 * You can assume newInterval is greater or equal to 1.
 */
void reconstruct(Database& database, int newInterval);

// The following functions are given. Do not modify them.

/*
 * Prints a message that if an operation is successfully performed.
 * Refer to the implementation for more information.
 * Only prints a message when enableLog is true.
 */
void log(bool enableLog, int stockId, bool result, const char* message);

// given, prints all the snapshots from bottom to top.
void printDatabase(const Database& database);


/*
 * *****************************************************************************************************
 *
 *
 * NOTE: Custome helper functions below
 *
 *
 * *****************************************************************************************************
 */

/*
 * We do stamp() BEFORE operation
 * If the operation fails to be execute
 * We need to undo stamp()
 */
void undoStamp(Database& database);

/*
 * Check if both top and bottom are nullptr
 */

bool isEmpty(const Database& database);

#endif /* SRC_DATABASE_H_ */

