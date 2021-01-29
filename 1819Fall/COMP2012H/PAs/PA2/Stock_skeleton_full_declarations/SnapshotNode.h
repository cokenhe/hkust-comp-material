#ifndef SRC_SNAPSHOTNODE_H_
#define SRC_SNAPSHOTNODE_H_

#include "Snapshot.h"

struct Snapshot;

// SnapshotNode is a node for storing a snapshot. It also has a pointer to its previous snapshot node and the next snapshot node.
// Use this to implement the doubly linked list of the database.

struct SnapshotNode {
	Snapshot snapshot;  // The snapshot object that this node stores.

	SnapshotNode* earlier;  // earlier points to the earlier (previous) SnapshotNode.
							// By earlier, it means the time of earlier's snapshot is just less than
							// the time of this snapshot.

	SnapshotNode* later;  // later points to the later (next) SnapshotNode.
						  // By later, it means the time of later's snapshot is just larger than
						  // the time of this snapshot.
	};

/*
 * Create a dynamic snapshot node based on the parameters.
 * You need to return a pointer to the dynamic object with each data members correctly initialized.
 * For convenience, earlier and later are nullptr by default.
 */
SnapshotNode* createSnapshotNode(const Snapshot& snapshot, SnapshotNode* earlier = nullptr, SnapshotNode* later = nullptr);

/*
 * Avoid memory leak.
 * Do not delete earlier and later here.
 * You can assume node is not nullptr.
 */
void deleteSnapshotNode(SnapshotNode* node);

#endif /* SRC_SNAPSHOTNODE_H_ */
