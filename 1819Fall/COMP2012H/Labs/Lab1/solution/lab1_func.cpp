#include <iostream>
using namespace std;

const int MAX_NUM_BARRIERS = 5;
const int MAX_NUM_ROCKETS = 3;
const int MAX_HEALTH = 4;

bool build_barrier(int player, int& num_barriers) {
	if (num_barriers >= MAX_NUM_BARRIERS) {
		cout << "Player" << player << ", you can't build any more barriers." << endl;
		return false;
	}

	num_barriers++;
	cout << endl;

	return true;
}

bool build_rocket(int player, int& num_rockets) {
	if (num_rockets >= MAX_NUM_ROCKETS) {
		cout << "Player" << player << ", you can't build any more rockets." << endl;
		return false;
	}

	num_rockets++;
	cout << endl;

	return true;
}

bool launch_rockets(int player, int& num_rockets, int& num_barriers, int& health, int& winner) {
	if (num_rockets == 0) {
		cout << "Player" << player << ", you have no rockets to launch." << endl;
		return false;
	}

	while ((num_rockets > 0) && (health > 0)) {
		if (num_barriers > 0) {
			num_barriers--;
		}
		else {
			health--;
		}
		num_rockets--;
	}

	cout << "Player" << ((player == 1) ? 2 : 1) << " has " << num_barriers << " barriers left."; cout << endl;
	cout << "Player" << ((player == 1) ? 2 : 1) << " has " << health << "/" << MAX_HEALTH << " health left."; cout << endl;
	cout << endl;

	if (health <= 0) {
		winner = player;
	}

	return true;
}

int main() {
	int winner = 0;
	int player = 0;

	int p1_num_barriers = 0, p2_num_barriers = 0;
	int p1_num_rockets = 0, p2_num_rockets = 0;
	int p1_health = MAX_HEALTH, p2_health = MAX_HEALTH;

	while (winner == 0) {
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
				winner = ((player == 1) ? 2 : 1);
				cout << "Player" << player << " give up." << endl;
				break;

			case 1:
				invalid = !build_barrier(player, ((player == 1) ? p1_num_barriers : p2_num_barriers));
				break;

			case 2:
				invalid = !build_rocket(player, ((player == 1) ? p1_num_rockets : p2_num_rockets));
				break;

			case 3:
				invalid = !launch_rockets(player,
											((player == 1) ? p1_num_rockets : p2_num_rockets),
											((player == 1) ? p2_num_barriers : p1_num_barriers),
											((player == 1) ? p2_health : p1_health),
											winner);
				break;

			default:
				cout << "Invalid input. Please enter again." << endl;
				invalid = true;
				break;
			}
		} while (invalid);
	}

	cout << "Congratz! Player" << winner << ". You win!" << endl;
}
