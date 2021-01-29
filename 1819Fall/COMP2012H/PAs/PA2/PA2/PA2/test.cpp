#include <iostream>
#include <sstream>

#include "test.h"
#include "Database.h"

using namespace std;

struct WAException: public exception {
    const char * what() const throw() {
        return "Wrong Answer";
    }
};

bool operator==(const Update& a, const Update& b) {
    return a.time == b.time && a.type == b.type && a.updatedNext == b.updatedNext && a.updatedValue == b.updatedValue;
}

bool operator==(const Snapshot& a, const Snapshot& b) {
    return a.time == b.time && a.head == b.head && a.currentTime == b.currentTime;
}

stringstream& operator<<(stringstream& ss, const Database& database) {

    for(SnapshotNode* n = database.bottom; n != nullptr; n = n->later){
        for(StockNode* node = getTopNext(n->snapshot.head); node != nullptr; node = getTopNext(node))
            ss << getStockId(node) << ',' << getTopValue(node) << "  ";
        ss << "\n";
    }
    return ss;

}

 void task1() {
     try {
         {
             cout << "test Task 1\n";
             {
                 cout << "test createStockNode";
                 StockNode* n = createStockNode(2,2);
                 StockNode* node = createStockNode(2,3,n);
                 Stock& stock = node->stock;
                 bool result = stock.stockId == 2 && stock.value == 3 && node->next == n && node->head == nullptr;
                 deleteStockNode(n);
                 deleteStockNode(node);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test createHeadNode";
                 StockNode* node = createHeadNode();
                 StockNode* head = createHeadNode(node);
                 bool result = head->head == nullptr && head->stock.stockId == -1 && head->next == node;
                 deleteStockNode(node);
                 deleteStockNode(head);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test getStockId";
                 StockNode* node = createStockNode(13,1.1);
                 int id = getStockId(node);
                 deleteStockNode(node);
                 bool result = id == 13;
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test getTopValue";
                 StockNode* node = createStockNode(2,2);
                 Update update1 = Update {13, nullptr, Update::SET, 1};
                 Update update2 = Update {35, nullptr, Update::SET, 2};
                 UpdateNode* updateNode1 = new UpdateNode {update1, nullptr};
                 UpdateNode* updateNode2 = new UpdateNode {update2, updateNode1};
                 node->head = updateNode2;
                 double value = getTopValue(node);
                 deleteStockNode(node);
                 bool result = value == 35;
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test getValueAt";
                 StockNode* node = createStockNode(2,2);
                 Update update1 = Update {53, nullptr, Update::SET, 1};
                 Update update2 = Update {72, nullptr, Update::SET, 2};
                 Update update3 = Update {46, nullptr, Update::SET, 5};
                 UpdateNode* updateNode1 = new UpdateNode {update1, nullptr};
                 UpdateNode* updateNode2 = new UpdateNode {update2, updateNode1};
                 UpdateNode* updateNode3 = new UpdateNode {update3, updateNode2};
                 node->head = updateNode3;
                 double value1 = getValueAt(node, 1);
                 double value2 = getValueAt(node, 3);
                 double value3 = getValueAt(node, 6);
                 deleteStockNode(node);
                 bool result = (value1 == 53 && value2 == 72 && value3 == 46);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test getTopNext";
                 StockNode* node = createStockNode(3,3);
                 StockNode* head = createHeadNode(node);
                 StockNode* node2 = createStockNode(2,2);
                 StockNode* node1 = createStockNode(1,1);
                 Update update1 = Update {-1, node2, Update::ADD, 1};
                 Update update2 = Update {-1, node1, Update::ADD, 2};
                 UpdateNode* updateNode1 = new UpdateNode {update1, nullptr};
                 UpdateNode* updateNode2 = new UpdateNode {update2, updateNode1};
                 head->head = updateNode2;
                 StockNode* next = getTopNext(head);
                 bool result = (next == node1);
                 deleteStockNode(node);
                 deleteStockNode(head);
                 deleteStockNode(node2);
                 deleteStockNode(node1);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test getNextAt";
                 StockNode* node = createStockNode(3,3);
                 StockNode* head = createHeadNode(node);
                 StockNode* node2 = createStockNode(2,2);
                 StockNode* node1 = createStockNode(1,1);
                 Update update1 = Update {-1, node2, Update::ADD, 1};
                 Update update2 = Update {-1, node1, Update::ADD, 2};
                 UpdateNode* updateNode1 = new UpdateNode {update1, nullptr};
                 UpdateNode* updateNode2 = new UpdateNode {update2, updateNode1};
                 head->head = updateNode2;
                 StockNode* next1 = getNextAt(head, 0);
                 StockNode* next2 = getNextAt(head, 1);
                 StockNode* next3 = getNextAt(head, 3);
                 bool result = (next1 == node && next2 == node2 && next3 == node1);
                 deleteStockNode(node);
                 deleteStockNode(head);
                 deleteStockNode(node2);
                 deleteStockNode(node1);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test getTopUpdateNode";
                 StockNode* node = createHeadNode();
                 Update update1 = Update {-1, nullptr, Update::REMOVE, 1};
                 Update update2 = Update {-1, nullptr, Update::REMOVE, 2};
                 Update update3 = Update {-1, nullptr, Update::REMOVE, 3};
                 UpdateNode* updateNode1 = new UpdateNode {update1, nullptr};
                 UpdateNode* updateNode2 = new UpdateNode {update2, updateNode1};
                 UpdateNode* updateNode3 = new UpdateNode {update3, updateNode2};
                 node->head = updateNode3;
                 UpdateNode* update = getTopUpdateNode(node);
                 bool result = (update == updateNode3);
                 deleteStockNode(node);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test getUpdateNodeAt";
                 StockNode* node = createHeadNode();
                 Update update1 = Update {-1, nullptr, Update::REMOVE, 1};
                 Update update2 = Update {-1, nullptr, Update::REMOVE, 2};
                 Update update3 = Update {-1, nullptr, Update::REMOVE, 3};
                 UpdateNode* updateNode1 = new UpdateNode {update1, nullptr};
                 UpdateNode* updateNode2 = new UpdateNode {update2, updateNode1};
                 UpdateNode* updateNode3 = new UpdateNode {update3, updateNode2};
                 node->head = updateNode3;
                 UpdateNode* u1 = getUpdateNodeAt(node, 1);
                 UpdateNode* u2 = getUpdateNodeAt(node, 2);
                 UpdateNode* u3 = getUpdateNodeAt(node, 3);
                 bool result = (u1 == updateNode1) && (u2 == updateNode2) && (u3 == updateNode3);
                 deleteStockNode(node);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test push";
                 StockNode* node = createStockNode(1,1);
                 Update update1 = Update {2, nullptr, Update::SET, 1};
                 Update update2 = Update {3, nullptr, Update::SET, 2};
                 push(node, update1);
                 push(node, update2);
                 bool result = (node->head->update == update2) && (node->head->next->update == update1);
                 deleteStockNode(node);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             {
                 cout << "test pop";
                 StockNode* node = createStockNode(1,1);
                 Update update1 = Update {2, nullptr, Update::SET, 1};
                 Update update2 = Update {3, nullptr, Update::SET, 2};
                 push(node, update1);
                 push(node, update2);
                 pop(node);
                 bool result = (node->head->update == update1);
                 deleteStockNode(node);
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             cout << "Task 1 pass\n\n";
         }
     } catch (WAException& e) {
         cout << " - wrong answer\n\n";
     } catch (exception& e) {
         cout << " - other exception\n\n";
     }

 }

void task2() {
    try {
        {
            cout << "test Task 2\n";
            {
                cout << "test createSnapshot";
                int* currentTime = new int (5);
                Snapshot snapshot = createSnapshot(currentTime);
                bool result = (isHead(snapshot.head)) && (snapshot.currentTime == currentTime) && (snapshot.time == 5);
                delete currentTime;
                deleteStockNode(snapshot.head);
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test add";
                int* currentTime = new int (0);
                Snapshot snapshot = createSnapshot(currentTime);
                bool success1 = add(snapshot, 1, 1);
                bool success2 = add(snapshot, 2, 2);
                Update update1 = snapshot.head->head->update;
                bool result = (update1.updatedValue == -1);
                result &= (update1.type == Update::ADD);
                result &= (update1.time == 1);
                StockNode* node1 = update1.updatedNext;
                Update update2 = node1->head->update;
                result &= (node1->stock.stockId == 1) && (node1->stock.value == 1);
                result &= (node1->next == nullptr);
                result &= (update2.updatedValue == 1);
                result &= (update2.type == Update::ADD);
                result &= (update2.time == 2);
                StockNode* node2 = update2.updatedNext;
                result &= (node2->stock.stockId == 2) && (node2->stock.value == 2);
                result &= (node2->head == nullptr) && (node2->next == nullptr);
                result &= success1 && success2 && (*currentTime == 2);
                deleteSnapshot(snapshot);
                delete currentTime;
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test remove";
                int* currentTime = new int (0);
                Snapshot snapshot = createSnapshot(currentTime);
                add(snapshot, 1, 1);
                add(snapshot, 2, 2);
                add(snapshot, 3, 3);
                bool success1 = remove(snapshot, 4);
                bool result = (!success1) && (*currentTime == 3);
                bool success2 = remove(snapshot, 1);
                result &= (success2) && (*currentTime == 4) && (getTopNext(snapshot.head)->stock.stockId == 2);
                deleteSnapshot(snapshot);
                delete currentTime;
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test stampSnapshot";
                int* currentTime = new int (0);
                Snapshot snapshot = createSnapshot(currentTime);
                add(snapshot, 1, 1);
                add(snapshot, 2, 2);
                Snapshot stamp = stampSnapshot(snapshot);
                bool result = true;
                result &= (isHead(stamp.head)) && (stamp.head->head == nullptr);
                StockNode* node1 = stamp.head->next;
                result &= (node1->stock.stockId == 1) && (node1->head == nullptr);
                StockNode* node2 = node1->next;
                result &= (node2->stock.stockId == 2) && (node2->head == nullptr);
                result &= (node2->next == nullptr);
                deleteSnapshot(stamp);
                deleteSnapshot(snapshot);
                delete currentTime;
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test set";
                int* currentTime = new int (0);
                Snapshot snapshot = createSnapshot(currentTime);
                add(snapshot, 3, 3);
                add(snapshot, 2, 2);
                add(snapshot, 1, 1);
                bool success3 = set(snapshot, 3, 30);
                bool success2 = set(snapshot, 2, 20);
                bool success1 = set(snapshot, 1, 10);
                bool result = success1 && success2 && success3;
                int i = 10;
                for(StockNode* n = getTopNext(snapshot.head); n != nullptr; n = getTopNext(n), i += 10)
                    result &= (getTopValue(n) == i);
                deleteSnapshot(snapshot);
                delete currentTime;
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test undo";
                int* currentTime = new int (0);
                Snapshot snapshot = createSnapshot(currentTime);
                add(snapshot, 1, 1);
                set(snapshot, 1, 10);
                remove(snapshot, 1);
                undo(snapshot);
                StockNode* node1 = getTopNext(snapshot.head);
                bool result = (getTopValue(node1) == 10) && (*currentTime == 2);
                undo(snapshot);
                result &= (getTopValue(node1) == 1) && (*currentTime == 1);
                undo(snapshot);
                result &= (snapshot.head->head == nullptr) && (*currentTime == 0);
                deleteSnapshot(snapshot);
                delete currentTime;
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test getValueAt";
                int* currentTime = new int (0);
                Snapshot snapshot = createSnapshot(currentTime);
                add(snapshot, 1, 1);
                set(snapshot, 1, 10);
                bool result = (getValueAt(snapshot, 1, 1) == 1);
                result &= (getValueAt(snapshot, 1, 2) == 10);
                result &= (getValueAt(snapshot, 2, 1) == -1);
                deleteSnapshot(snapshot);
                delete currentTime;
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            cout << "Task 2 pass\n\n";
        }
    } catch (WAException& e) {
        cout << " - wrong answer\n\n";
    } catch (exception& e) {
        cout << " - other exception\n\n";
    }
}

 void task3() {
     try {
         {
             cout << "test Task 3\n";
             {
                 cout << "test createSnapshotNode";
                 int* currentTime = new int(0);
                 Snapshot snapshot = createSnapshot(currentTime);
                 SnapshotNode* snapshotNode = createSnapshotNode(snapshot);
                 bool result = (snapshotNode->snapshot == snapshot);
                 result &= (snapshotNode->earlier == nullptr) && (snapshotNode->later == nullptr);
                 deleteSnapshotNode(snapshotNode);
                 delete currentTime;
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
             cout << "Task 3 pass\n\n";
         }
     } catch (WAException& e) {
         cout << " - wrong answer\n\n";
     } catch (exception& e) {
         cout << " - other exception\n\n";
     }
 }

void task4() {
    try {
        {
            cout << "test Task 4\n";
            {
                cout << "test createDatabase";
                Database database = createDatabase(3, false);
                bool result = (database.interval == 3);
                result &= (database.top == nullptr) && (database.bottom == nullptr);
                result &= (database.currentTime == 0) && (!database.enableLog);
                deleteDatabase(database);
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test add";
                Database database = createDatabase(2, false);
                add(database, 1, 1);
                SnapshotNode* node1 = database.top;
                add(database, 1, 1);
                add(database, 2, 2);
                add(database, 3, 3);
                add(database, 4, 4);
                SnapshotNode* node2 = database.top;
                bool result = (node1 != node2);
                result &= (database.bottom == node1);
                result &= (node1->earlier == nullptr) && (node1->later == node2);
                result &= (node2->earlier == node1) && (node2->later == nullptr);
                deleteDatabase(database);
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test remove";
                Database database = createDatabase(1, false);
                add(database, 1, 1);
                remove(database, 1);
                bool result = (database.top != database.bottom);
                deleteDatabase(database);
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test needToStamp";
                Database database = createDatabase(3, false);
                add(database, 1, 1);
                bool result = (!needToStamp(database));
                add(database, 2, 2);
                result &= (!needToStamp(database));
                add(database, 3, 3);
                result &= (needToStamp(database));
                deleteDatabase(database);
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test getValueAt";
                Database database = createDatabase(3, false);
                add(database, 1, 1);
                SnapshotNode* node1 = database.top;
                remove(database, 1);
                add(database, 1, 5);
                set(database, 1, 10);
                SnapshotNode* node2 = database.top;
                bool result = (node1 != node2);
                double value = getValueAt(node2->snapshot, 1, 4);
                result &= (value == 10);
                deleteDatabase(database);
                if (!result) throw WAException();
                cout << " - pass\n";
            }
            {
                cout << "test stamp";
                Database database = createDatabase(100, false);
                add(database, 1, 1);
                SnapshotNode* node1 = database.top;
                add(database, 2, 2);
                add(database, 3, 3);
                stamp(database);
                SnapshotNode* node2 = database.top;
                bool result = (node1->earlier == nullptr) && (node1->later == node2);
                result &= (node2->earlier == node1) && (node2->later == nullptr);
                Snapshot snapshot = node2->snapshot;
                int i = 1;
                for(StockNode* n = getTopNext(snapshot.head); n != nullptr; n = getTopNext(n), i++)
                    result &= (getTopValue(n) == i);
                deleteDatabase(database);
                if (!result) throw WAException();
                cout << " - pass\n";
            }
             {
                 cout << "test reconstruct";
                 Database db1 = createDatabase();
                 db1.enableLog = false;
                 for(int i = 1; i <= 10; i++)
                     add(db1, i, i);
                 reconstruct(db1, 3);

                 stringstream ss1;
                 ss1 << db1;

                 Database db2 = createDatabase(3);
                 db2.enableLog = false;
                 for(int i = 1; i <= 10; i++)
                     add(db2, i, i);

                 stringstream ss2;
                 ss2 << db2;

                 deleteDatabase(db1);
                 deleteDatabase(db2);

                 bool result = (ss1.str() == ss2.str());
                 if (!result) throw WAException();
                 cout << " - pass\n";
             }
            cout << "Task 4 pass\n\n";
        }
    } catch (WAException& e) {
        cout << " - wrong answer\n\n";
    } catch (exception& e) {
        cout << " - other exception\n\n";
    }
}

void selfTest() {
    try {
        bool result = true;
        Database db = createDatabase();
         add(db, 1, 1);
         add(db, 2, 2);
         add(db, 3, 3);
         remove(db, 2);
         set(db, 1, 1);
         set(db, 1, 9);
         add(db, 2, 2);

         printDatabase(db);
         reconstruct(db, 3);
         printDatabase(db);

        deleteDatabase(db);

        cout << "--------------- End TEST 1 -----------------" << endl;

        db = createDatabase();

        for(int i=1; i<=17; i++) {
            add(db, i, i);
        }

        reconstruct(db, 10);
        reconstruct(db, 5);
        reconstruct(db, 2);

        deleteDatabase(db);

        cout << "--------------- End TEST 2 -----------------" << endl;

        db = createDatabase();

        for(int i=1; i<=23; i++) {
            add(db, i, i);
        }
        remove(db, 3);
        remove(db, 6);
        remove(db, 8);
        remove(db, 17);
        remove(db, 27);
        remove(db, 3);
        set(db, 3, 54);
        set(db, 3, 5234);
        set(db, 2, 54324);
        set(db, 9, 53244);
        set(db, 3, 5654);
        set(db, 18, 24);
        set(db, 18, 524);

        deleteDatabase(db);

        cout << "--------------- End TEST 3 -----------------" << endl;

        if (!result) throw WAException();
        cout << "Self test pass \n\n";
    } catch (WAException& e) {
        cout << " - wrong answer\n\n";
    } catch (exception& e) {
        cout << " - other exception\n\n";
    }

}
