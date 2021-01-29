// do NOT submit this file
// do NOT modify this file

#ifndef SRC_STOCK_H_
#define SRC_STOCK_H_

// Stock has an ID and a value.
struct Stock {
	const int stockId;  // The stock's ID. It is -1 for the sentinel head StockNode.
	double value;  // The stock's value.
};

#endif /* SRC_STOCK_H_ */
