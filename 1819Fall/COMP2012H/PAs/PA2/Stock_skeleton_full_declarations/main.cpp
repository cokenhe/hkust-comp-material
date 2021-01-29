#include <iostream>
using std::cin;
using std::cout;
using std::endl;

#include "Database.h"

int main() {
	cout << "Welcome to this database system!" << endl;
	cout << "Creating database..." << endl;
	Database db = createDatabase();
	cout << "Database successfully created.\n" << endl;

	int input = 0;
	while(input != 1) {
		cout << "\n1. Exit" << endl;
		cout << "2. Add a stock." << endl;
		cout << "3. Remove a stock." << endl;
		cout << "4. Set the value of a stock." << endl;
		cout << "5. Search the value of a stock." << endl;
		cout << "6. Print the database." << endl;
		cout << "7. Print database's info." << endl;
		cout << "8. Reconstruct the database." << endl;
		cout << "9. Quick add for debugging." << endl;
		cout << "Please enter a number: ";
		cin >> input;
		cout << endl;

		int stockId;
		double value;
		int time;
		int newInterval;
		int num;

		switch(input) {
		case 1:
			deleteDatabase(db);
			break;

		case 2:
			do {
				cout << "Please enter the stock Id and the value: ";
				cin >> stockId >> value;
			} while(stockId < 0 || value < 0);
			add(db, stockId, value);
			break;

		case 3:
			do {
				cout << "Please enter the stock Id: ";
				cin >> stockId;
			} while(stockId < 0);
			remove(db, stockId);
			break;

		case 4:
			do {
				cout << "Please enter the stock Id and the value: ";
				cin >> stockId >> value;
			} while(stockId < 0 || value < 0);
			set(db, stockId, value);
			break;

		case 5:			
			do {
				cout << "Please enter the stockId and the time: ";
				cin >> stockId >> time;
			} while(stockId < 0);
			cout << "The value of stock " << stockId << " at time " << time << " is: " << getValueAt(db, stockId, time) << endl;
			break;

		case 6:
			printDatabase(db);
			break;

		case 7:
			cout << "The current time is: " << db.currentTime << endl;
			cout << "The interval is: " << db.interval << endl;
			break;

		case 8:
			cout << "Please enter the new interval: ";			
			do {
				cin >> newInterval;
			} while(newInterval < 1);
			reconstruct(db, newInterval);
			break;

		case 9:
			cout << "Stock with ID i with value i will be added if possible, for i in [1...num]" << endl;
			cout << "Please enter the number: ";			
			do {
				cin >> num;
			} while(num < 1);
			
			for(int i=1; i<=num; i++) {
				add(db, i, i);
			}
			break;
			
		default:
			cout << "Invalid option!" << endl;
			break;
		}
	}

	cout << "\nBye!";
}
