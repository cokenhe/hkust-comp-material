// do NOT submit this file
// do NOT modify this file

#ifndef SRC_UPDATE_H_
#define SRC_UPDATE_H_

// Forward declaration, since Update has a data member of type StockNode*.
struct StockNode;

// Update is a struct that represents any operation that is done to a StockNode.
// It stores information about what is changed during an operation, the type of the operation
// and the time at which the operation is performed.
struct Update {
	// Different types of operations. Access using e.g. Update::ADD, Update::REMOVE, Update::SET
	enum Type { ADD, REMOVE, SET };

	double updatedValue;  // updatedValue is the updated value of a node after an operation is done on it.

	StockNode* updatedNext;  // updatedNext is the updated node that a node should point to
                           	 // after an operation is done on it.

	Type type;  // The type of operation that the update corresponds to.

	int time;  // The time at which the operation is performed, in other words, when the update is created.
};

#endif /* SRC_UPDATE_H_ */
