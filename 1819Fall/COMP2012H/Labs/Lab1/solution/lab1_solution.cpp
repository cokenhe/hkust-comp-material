#include <iostream>
using namespace std;

int main() {
	int win = 0;
	int player = 0;

	const int MAX_NUM_BARRIERS = 5;
	const int MAX_NUM_ROCKETS = 3;
	const int MAX_HEALTH = 4;

	int p1_num_barriers = 0, p2_num_barriers = 0;
	int p1_num_rockets = 0, p2_num_rockets = 0;
	int p1_health = MAX_HEALTH, p2_health = MAX_HEALTH;

	while (win == 0) {
		int player1_rps = 0, player2_rps = 0;

		while (player1_rps == player2_rps) {
			do {
				cout << "Player1: Please choose between rock(1), paper(2) or scissor(3): ";
				cin >> player1_rps;
			} while (player1_rps < 1 || player1_rps > 3);

			do {
				cout << "Player2: Please choose between rock(1), paper(2) or scissor(3): ";
				cin >> player2_rps;
			} while (player2_rps < 1 || player2_rps > 3);

			if (player1_rps == player2_rps) {
				cout << "Its a draw. Do it again." << endl;
			}
		}

		if (((player1_rps == 1) && (player2_rps == 3))
			|| ((player1_rps == 2) && (player2_rps == 1))
			|| ((player1_rps == 3) && (player2_rps == 2))) {
			player = 1;
		}
		else {
			player = 2;
		}

		int input = 0;
		bool invalid = false;

		do {
			cout << endl;
			for (int i = 0; i < 50; i++) {
				cout << "-";
			}
			cout << "\nPlayer1: Health x " << p1_health << " | Rockets x "
					<< p1_num_rockets << " | Barriers x " << p1_num_barriers
					<< endl;
			cout << "Player2: Health x " << p2_health << " | Rockets x "
					<< p2_num_rockets << " | Barriers x " << p2_num_barriers
					<< endl;
			for (int i = 0; i < 50; i++) {
				cout << "-";
			}
			cout << "\n" << endl;

			invalid = false;
			cout << "Player" << player << ", choose any one action below: " << endl;
			cout << "0: Give up." << endl;
			cout << "1: Build Barriers." << endl;
			cout << "2: Build Rockets." << endl;
			cout << "3. Launch Rockets." << endl;
			cin >> input;

			switch (input) {
				case 0:
					win = ((player == 1) ? 2 : 1);
					cout << "Player" << player << " give up." << endl;
					break;

				case 1:
					if (player == 1) {
						if (p1_num_barriers >= MAX_NUM_BARRIERS) {
							cout << "Player1, you can't build any more barriers." << endl;
							invalid = true;
						}
						else {
							p1_num_barriers++;
							cout << "Player1, you now have " << p1_num_barriers << " barriers." << endl;
						}
					}

					else {
						if (p2_num_barriers >= MAX_NUM_BARRIERS) {
							cout << "Player2, you can't build any more barriers." << endl;
							invalid = true;
						}
						else {
							p2_num_barriers++;
							cout << "Player2, you now have " << p2_num_barriers << " barriers." << endl;
						}
					}

					break;

				case 2:
					if (player == 1) {
						if (p1_num_rockets >= MAX_NUM_ROCKETS) {
							cout << "Player1, you can't build any more rockets." << endl;
							invalid = true;
						}
						else {
							p1_num_rockets++;
							cout << "Player1, you now have " << p1_num_rockets << " rockets." << endl;
						}
					}

					else {
						if (p2_num_rockets >= MAX_NUM_ROCKETS) {
							cout << "Player2, you can't build any more rockets." << endl;
							invalid = true;
						}
						else {
							p2_num_rockets++;
							cout << "Player2, you now have " << p2_num_rockets << " rockets." << endl;
						}
					}

					break;

				case 3:
					if (player == 1) {
						if (p1_num_rockets == 0) {
							cout << "Player1, you have no rockets to launch." << endl;
							invalid = true;
						}
						else {
							while ((p1_num_rockets > 0) && (p2_health > 0)) {
								if (p2_num_barriers > 0) {
									p2_num_barriers--;
								}
								else {
									p2_health--;
								}
								p1_num_rockets--;
							}

							cout << "Player2 has " << p2_num_barriers << " barriers left." << endl;
							cout << "Player2 has " << p2_health << "/" << MAX_HEALTH << " health left." << endl;

							if (p2_health == 0) {
								win = 1;
							}
						}
					}

					else {
						if (p2_num_rockets == 0) {
							cout << "Player2, you have no rockets to launch." << endl;
							invalid = true;
						}
						else {
							while ((p2_num_rockets > 0) && (p1_health > 0)) {
								if (p1_num_barriers > 0) {
									p1_num_barriers--;
								}
								else {
									p1_health--;
								}
								p2_num_rockets--;
							}

							cout << "Player1 has " << p1_num_barriers << " barriers left." << endl;
							cout << "Player1 has " << p1_health << "/" << MAX_HEALTH << " health left." << endl;

							if (p1_health == 0) {
								win = 2;
							}
						}
					}

					break;

				default:
					cout << "Invalid input. Please enter again." << endl;
					invalid = true;
					break;
			}
		} while (invalid);
	}

	cout << "Congratz! Player" << win << ". You win!" << endl;
}
