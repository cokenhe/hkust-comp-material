#include "Database.h"

Database createDatabase(int interval, bool enableLog) {

}

void deleteDatabase(Database& database) {

}

bool needToStamp(Database& database) {

}

void add(Database& database, int stockId, double value) {

}

void remove(Database& database, int stockId) {

}

void set(Database& database, int stockId, double value) {

}

double getValueAt(const Database& database, int stockId, int time) {

}

void stamp(Database& database) {

}

void reconstruct(Database& database, int newInterval) {

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
