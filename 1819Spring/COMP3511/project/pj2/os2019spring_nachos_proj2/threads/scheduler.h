// scheduler.h
//	Data structures for the thread dispatcher and scheduler.
//	Primarily, the list of threads that are ready to run.
//
// Copyright (c) 1992-1993 The Regents of the University of California.
// All rights reserved.  See copyright.h for copyright notice and limitation
// of liability and disclaimer of warranty provisions.

#ifndef SCHEDULER_H
#define SCHEDULER_H

#include "copyright.h"
#include "list.h"
#include "thread.h"
#include "timer.h"

enum SchedPolicy {
  SCHED_FCFS,    // 5.3.1 First-come first-served scheduling
  SCHED_SJF,     // 5.3.2 Shortest job first scheduling
  SCHED_PRIO_NP, // 5.3.3 Nonpreemptive Priority scheduling
  SCHED_PRIO_P,  // 5.3.3 Preemptive     Priority scheduling
  SCHED_RR,      // 5.3.4 Round robin scheduling
  SCHED_MLQ,     // 5.3.5 Multilevel queue scheduling
  SCHED_MLFQ     // 5.3.6 Multilevel feedback queue scheduling
};

// The following class defines the scheduler/dispatcher abstraction --
// the data structures and operations needed to keep track of which
// thread is running, and which threads are ready but not running.

class Scheduler {
public:
  Scheduler();  // Initialize list of ready threads
  ~Scheduler(); // De-allocate ready list

  void ReadyToRun(Thread *thread); // Thread can be dispatched.
  Thread *FindNextToRun();         // Dequeue first thread on the ready
                                   // list, if any, and return thread.
  bool ShouldISwitch(Thread *oldThread, Thread *newThread);
  void Run(Thread *nextThread); // Cause nextThread to start running
  void Print();                 // Print contents of ready list
  void Suspend(Thread *thread);
  void Resume(Thread *thread);
  void SetSchedPolicy(SchedPolicy pol);
  void SetNumOfQueues(int level); // set the number of queues for MLQ
  void InterruptHandler(int dummy);

private:
  SchedPolicy policy;            // scheduling policy to be used
  List<Thread *> *readyList;     // queue of threads that are ready to run,
                                 // but not running
  List<Thread *> *suspendedList; // List of suspended threads.
  Timer *ptimer;                 // The timer used in Round robin scheduling
  List<Thread *>
      *MultiLevelList; // multilevel queue used in Multilevel queue scheduling
  int NumOfLevel;      // The number of queues in multilevel queue scheduling
};

#endif // SCHEDULER_H
