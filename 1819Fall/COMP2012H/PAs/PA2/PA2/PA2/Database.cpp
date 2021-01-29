#include "Database.h"

Database createDatabase(int interval, bool enableLog) {
    return Database {interval, nullptr, nullptr, 0, enableLog};
}

void deleteDatabase(Database& database) {
    SnapshotNode* current = database.top;
    while (current) {
        SnapshotNode* temp = current->earlier;
        deleteSnapshotNode(current);
        current = temp;
//        deleteSnapshot(current->snapshot);
//        SnapshotNode* temp = current;
//        current = current->later;
//        delete temp;
//        temp = nullptr;
    }
    database.top = nullptr;
    database.bottom = nullptr;
}

bool isEmpty(const Database& database) {
    return database.top == nullptr && database.bottom == nullptr;
}

bool needToStamp(Database& database) {
    return database.currentTime > 0 && database.currentTime % database.interval == 0;
}

void undoStamp(Database& database) {
    database.top = database.top->earlier;
    deleteSnapshotNode(database.top->later);
}

void add(Database& database, int stockId, double value) {
    if (isEmpty(database)) {
        database.top =  createSnapshotNode({createHeadNode(), &(database.currentTime), database.currentTime});
        database.bottom = database.top;
    }
    bool needStamp = needToStamp(database);
    if (needStamp) stamp(database);

    bool isSuccess = add(database.top->snapshot, stockId, value);

    log(database.enableLog, stockId, isSuccess, "added");
    
    if (!isSuccess && needStamp) undoStamp(database);
}

void remove(Database& database, int stockId) {
    if (isEmpty(database)) 
        database.top = database.bottom = createSnapshotNode({createHeadNode(), &(database.currentTime), database.currentTime});
    bool needStamp = needToStamp(database);
    if (needStamp) stamp(database);

    bool isSuccess = remove(database.top->snapshot, stockId);

    log(database.enableLog, stockId, isSuccess, "removed");

    if (!isSuccess && needStamp) undoStamp(database);
}

void set(Database& database, int stockId, double value) {
    if (isEmpty(database)) 
        database.top = database.bottom = createSnapshotNode({createHeadNode(), &(database.currentTime), database.currentTime});
    bool needStamp = needToStamp(database);
    if (needStamp) stamp(database);

    bool isSuccess = set(database.top->snapshot, stockId, value);

    log(database.enableLog, stockId, isSuccess, "updated");

    if (!isSuccess && needStamp) undoStamp(database);
}

double getValueAt(const Database& database, int stockId, int time) {
    if (time < 0 || time > database.currentTime || database.bottom == nullptr) return -1;
    return getValueAt(database.top->snapshot, stockId, time);
}

void stamp(Database& database) {
    database.top = createSnapshotNode(stampSnapshot(database.top->snapshot), database.top);
    database.top->earlier->later = database.top;
}

struct UpdateHistory {
    Update::Type type;
    int stockId;
    double value;

    UpdateHistory() {}
    UpdateHistory(Update::Type t, int id = -999, double val = -999) {
        type = t;
        stockId = id;
        value = val;
    }

    void print() const {
        cout << "Type: " << type << " | StockId: " << stockId << " | Value: " << value << endl;
    }
};

UpdateHistory extractUpdateHistory(Update& update, UpdateNode* updateNode, StockNode* stockNode) {
    switch (update.type) {
        case Update::ADD:
            return UpdateHistory {update.type, update.updatedNext->stock.stockId, update.updatedNext->stock.value};
        case Update::REMOVE:
            return UpdateHistory {update.type, (updateNode->next ? updateNode->next->update.updatedNext->stock.stockId : stockNode->next->stock.stockId), -999};
        case Update::SET:
            return UpdateHistory {update.type, stockNode->stock.stockId, update.updatedValue};
    }
}

void construct(Database& database, const UpdateHistory* const updateArr, const int arrSize) {
    for (int i = 0; i < arrSize; ++i) {
        switch (updateArr[i].type) {
            case Update::ADD:
                add(database, updateArr[i].stockId, updateArr[i].value); break;
            case Update::REMOVE:
                remove(database, updateArr[i].stockId); break;
            case Update::SET:
                set(database, updateArr[i].stockId, updateArr[i].value); break;
        }
    }
}

void reconstruct(Database& database, int newInterval) {
    if (isEmpty(database) || newInterval == database.interval) return;
    
    struct Waitlist {
        StockNode* stockNode;
        Waitlist* next;

        Waitlist(StockNode* stock = nullptr, Waitlist* n = nullptr) {
            stockNode = stock;
            next = n;
        }
    };
    
    UpdateHistory* updateArr = new UpdateHistory[database.currentTime];
    int arrSize = database.currentTime;

    StockNode* stockNode;
    Waitlist* removedStock;
    StockNode* temp;
    StockNode* ptrToNext;
    UpdateNode* updateNode;
    Waitlist* waitPtr;
    Update update;

    // pop and store all update id and value
    SnapshotNode* snapshotNode = database.bottom;
    while (snapshotNode) {
        stockNode = snapshotNode->snapshot.head;
        removedStock = new Waitlist {stockNode, nullptr};
        while (stockNode || removedStock->next) {
            temp = getTopNext(stockNode);
            ptrToNext = temp;
            updateNode = stockNode->head;
            waitPtr = removedStock;
            while (updateNode) {
                update = updateNode->update;

                // Store the removed stocknode to removedStock
                if (update.updatedNext != ptrToNext) {
                    waitPtr->next = new Waitlist {update.updatedNext, nullptr};
                    waitPtr = waitPtr->next;
                    ptrToNext = update.updatedNext;
                }

                updateArr[updateNode->update.time - 1] = extractUpdateHistory(update, updateNode, stockNode);
                pop(stockNode);
                updateNode = stockNode->head;
            }

            // Move to next stocknode
            if (temp) {
                stockNode = temp;
            } else if ( removedStock->next) {
                stockNode = removedStock->next->stockNode;  // access after released
                Waitlist* killMe = removedStock;
                removedStock = removedStock->next;
                delete killMe;
                killMe = nullptr;
            } else {
                stockNode = nullptr;
            }
        }
        snapshotNode = snapshotNode->later;
        if (removedStock) delete removedStock;
    }

    deleteDatabase(database);
    database = createDatabase(newInterval);
    construct(database, updateArr, arrSize);
    delete [] updateArr;
    updateArr = nullptr;
}

void log(bool enableLog, int stockId, bool result, const char* message) {
   if(enableLog) {
       if(result) {
           cout << "Stock " << stockId << " successfully " << message << '.' << endl;
       }
       else {
           cout << "Stock " << stockId << " fails to be " << message << '.' << endl;
       }
   }
}

void printDatabase(const Database& database) {
   for(SnapshotNode* n = database.bottom; n != nullptr; n = n->later) {
       printSnapshot(n->snapshot);
   }
}
