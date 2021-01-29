
#ifndef SRC_UPDATENODE_H_
#define SRC_UPDATENODE_H_

#include "Update.h"

struct Update;

// UpdateNode stores an update, and the pointer to the next node.
// Use this to implement the linked list of updates of a node.
// There is not a pair of create and delete functions because they won't simplify things much.
// If you feel the urge to do so, do that on your own in the some .cpp files if necessary.

struct UpdateNode {
	Update update;
	UpdateNode* next;
};

#endif /* SRC_UPDATENODE_H_ */
