#include "SnapshotNode.h"

SnapshotNode* createSnapshotNode(const Snapshot& snapshot, SnapshotNode* earlier, SnapshotNode* later) {
    return new SnapshotNode {snapshot, earlier, later};
}

void deleteSnapshotNode(SnapshotNode* node) {
    deleteSnapshot(node->snapshot);

    if (node->earlier) node->earlier->later = node->later;
    if (node->later) node->later->earlier = node->earlier;

    delete node;
    node = nullptr;

    // StockNode* p = node->snapshot.head;
    // while (getTopNext(p))
    // deleteStockNode(p);
}
