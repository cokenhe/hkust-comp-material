//     Test FCFS scheduling
//
#include "list.h"
#include "system.h"
#include "testcase.h"

//----------------------------------------------------------------------
// ThreadTest0
//      FCFS algorithm
//      Order of arrival: A, B, C, D, E
//      Process  Burst Time  Priority  Arrival
//        P1         25          1	13
//        P2        17          4	 0
//        P3        12          9 	20
//        P4         6          10	18
//        P5        10          5	10
//----------------------------------------------------------------------

void ThreadTest0() {

  int numThreads = 5;
  int startTime[] = {13, 0, 20, 18, 10};
  int burstTime[] = {25, 17, 12, 6, 10};
  int priority[] = {1, 4, 9, 10, 5};
  schedpair *a_pair;

  List<schedpair *> *procList = new List<schedpair *>();

  for (int i = 0; i < numThreads; i++) {
    a_pair = new schedpair;
    a_pair->burst = burstTime[i];
    a_pair->prior = priority[i];
    procList->SortedInsert(a_pair, startTime[i]);
  }

  scheduler->SetSchedPolicy(SCHED_FCFS);

  printf("Starting at ");
  stats->PrintElapsedTicks();
  printf("Queuing threads.\n");

  TestScheduler((int)procList);
}
