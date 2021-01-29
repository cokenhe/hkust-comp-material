// scheduler.cc
//	Routines to choose the next thread to run, and to dispatch to
//	that thread.
//
// 	These routines assume that interrupts are already disabled.
//	If interrupts are disabled, we can assume mutual exclusion
//	(since we are on a uniprocessor).
//
// 	NOTE: We can't use Locks to provide mutual exclusion here, since
// 	if we needed to wait for a lock, and the lock was busy, we would
//	end up calling FindNextToRun(), and that would put us in an
//	infinite loop.
//
// 	Very simple implementation -- no priorities, straight FIFO.
//	Might need to be improved in later assignments.
//
// Copyright (c) 1992-1993 The Regents of the University of California.
// All rights reserved.  See copyright.h for copyright notice and limitation
// of liability and disclaimer of warranty provisions.

#include "scheduler.h"
#include "copyright.h"
#include "system.h"
#include <stdio.h>

//----------------------------------------------------------------------
// Scheduler::Scheduler
// 	Initialize the list of ready but not running threads to empty.
//----------------------------------------------------------------------

Scheduler::Scheduler() {
  readyList = new List<Thread *>();
  suspendedList = new List<Thread *>();
  MultiLevelList = NULL;
}

//----------------------------------------------------------------------
// Scheduler::~Scheduler
// 	De-allocate the list of ready threads.
//----------------------------------------------------------------------

Scheduler::~Scheduler() {
  delete readyList;
  delete suspendedList;
  delete ptimer;
  delete[] MultiLevelList;
}

//----------------------------------------------------------------------
// Scheduler::ReadyToRun
// 	Mark a thread as ready, but not running.
//	Put it on the ready list, for later scheduling onto the CPU.
//
//	"thread" is the thread to be put on the ready list.
//----------------------------------------------------------------------

void Scheduler::ReadyToRun(Thread *thread) {
  DEBUG('t', "Putting thread %s on ready list.\n", thread->getName());

  thread->setStatus(READY);
  switch (policy) {

  case SCHED_FCFS: {
    readyList->Append(thread);
    break;
  }

  case SCHED_RR: {
    // YOUR PROJECT2 CODE HERE
    thread->setQuantum(4);
    readyList->Append(thread);
    break;
  }

  case SCHED_PRIO_P: {
    // YOUR PROJECT2 CODE HERE

  }

  case SCHED_MLFQ: {
    // YOUR PROJECT2 CODE HERE

  }

  default:
    readyList->Append(thread);
    break;
  }
}

//----------------------------------------------------------------------
// CHANGED
// Scheduler::FindNextToRun
//----------------------------------------------------------------------

Thread *Scheduler::FindNextToRun() {
  Thread *next_to_run;
  switch (policy) {

  case SCHED_FCFS: {
    next_to_run = readyList->Remove();
    break;
  }

  case SCHED_RR: {
    // YOUR PROJECT2 CODE HERE
    next_to_run = readyList->Remove();
    break;
  }

  case SCHED_PRIO_P: {
    // YOUR PROJECT2 CODE HERE

  }

  case SCHED_MLFQ: {
    // YOUR PROJECT2 CODE HERE

  }

  default:
    next_to_run = readyList->Remove();
    break;
  }
  return (next_to_run);
}

//----------------------------------------------------------------------
// Scheduler::ShouldISwitch
//   This function uses the policy information to tell a thread::fork
// to preempt the current thread or to not.  The answer is the domain of
// the scheduler, so it is a member function call.
//----------------------------------------------------------------------
bool Scheduler::ShouldISwitch(Thread *oldThread, Thread *newThread) {
  bool doSwitch;
  switch (policy) {

  case SCHED_FCFS: {
    doSwitch = false;
    break;
  }

  case SCHED_RR: {
    // YOUR PROJECT2 CODE HERE
    doSwitch = false;
    break;
  }

  case SCHED_PRIO_P: {
    // YOUR PROJECT2 CODE HERE

  }

  case SCHED_MLFQ: {
    // YOUR PROJECT2 CODE HERE

  }

  default:
    doSwitch = false;
    break;
  }

  return doSwitch;
}

//----------------------------------------------------------------------
// Scheduler::Run
// 	Dispatch the CPU to nextThread.  Save the state of the old thread,
//	and load the state of the new thread, by calling the machine
//	dependent context switch routine, SWITCH.
//
//      Note: we assume the state of the previously running thread has
//	already been changed from running to blocked or ready (depending).
// Side effect:
//	The global variable currentThread becomes nextThread.
//
//	"nextThread" is the thread to be put into the CPU.
//----------------------------------------------------------------------

void Scheduler::Run(Thread *nextThread) {
  Thread *oldThread = currentThread;

#ifdef USER_PROGRAM                   // ignore until running user programs
  if (currentThread->space != NULL) { // if this thread is a user program,
    currentThread->SaveUserState();   // save the user's CPU registers
    currentThread->space->SaveState();
  }
#endif

  oldThread->CheckOverflow(); // check if the old thread
                              // had an undetected stack overflow

  currentThread = nextThread;        // switch to the next thread
  currentThread->setStatus(RUNNING); // nextThread is now running

  printf("Switching from thread \"%s\" to thread \"%s\"\n",
         oldThread->getName(), nextThread->getName());

  // This is a machine-dependent assembly language routine defined
  // in switch.s.  You may have to think
  // a bit to figure out what happens after this, both from the point
  // of view of the thread and from the perspective of the "outside world".

  SWITCH(oldThread, nextThread);

  //    printf("Now in thread \"%s\"\n", currentThread->getName());

  // If the old thread gave up the processor because it was finishing,
  // we need to delete its carcass.  Note we cannot delete the thread
  // before now (for example, in Thread::Finish()), because up to this
  // point, we were still running on the old thread's stack!
  if (threadToBeDestroyed != NULL) {
    delete threadToBeDestroyed;
    threadToBeDestroyed = NULL;
  }

#ifdef USER_PROGRAM
  if (currentThread->space != NULL) {  // if there is an address space
    currentThread->RestoreUserState(); // to restore, do it.
    currentThread->space->RestoreState();
  }
#endif
}

//---------------------------------------------------------------------
// NEW
// Suspends a thread from execution. The suspended thread is removed
// from ready list and added to suspended list. The suspended thread
// remains there until it is resumed by some other thread. Note that
// it is not an error to suspend an thread which is already in the
// suspended state.
//
// NOTE: This method assumes that interrupts have been turned off.
//---------------------------------------------------------------------
void Scheduler::Suspend(Thread *thread) {
  List<Thread *> *tmp = new List<Thread *>();
  Thread *t;

  // Remove the thread from ready list.
  while (!readyList->IsEmpty()) {
    t = readyList->Remove();
    if (t == thread)
      break;
    else
      tmp->Prepend(t);
  }

  // Add the suspended thread to the suspended list
  if (t == thread) {
    t->setStatus(SUSPENDED);
    suspendedList->Append(t);
  }

  // Now all threads before the suspended thread in the ready list
  // are in the suspended list. Add them back to the ready list.
  while (!tmp->IsEmpty()) {
    t = tmp->Remove();
    readyList->Prepend(t);
  }
}

//---------------------------------------------------------------------
// NEW
// Resumes execution of a suspended thread. The thread is removed
// from suspended list and added to ready list. Note that it is not an
// error to resume a thread which has not been suspended.
//
// NOTE: This method assumes that interrupts have been turned off.
//---------------------------------------------------------------------
void Scheduler::Resume(Thread *thread) {
  List<Thread *> *tmp = new List<Thread *>();
  Thread *t;

  // Remove the thread from suspended list.
  while (!suspendedList->IsEmpty()) {
    t = suspendedList->Remove();
    if (t == thread)
      break;
    else
      tmp->Prepend(t);
  }

  // Add the resumed thread to the ready list
  if (t == thread) {
    t->setStatus(READY);
    readyList->Append(t);
  }

  // Now all threads before the suspended thread in the ready list
  // are in the suspended list. Add them back to the ready list.
  while (!tmp->IsEmpty()) {
    t = tmp->Remove();
    suspendedList->Prepend(t);
  }
}

//----------------------------------------------------------------------
// Scheduler::Print
// 	Print the scheduler state -- in other words, the contents of
//	the ready list.  For debugging.
//----------------------------------------------------------------------
void Scheduler::Print() {
  printf("Ready list contents:\n");
  readyList->Mapcar((VoidFunctionPtr)ThreadPrint);
}

//----------------------------------------------------------------------
// Scheduler::InterruptHandler
//   Handles timer interrupts for Round-robin scheduling.  Since this
//   is called while the system is an interrupt handler, use YieldOnReturn.
//   Be sure that your scheduling policy is still Round Robin.
//----------------------------------------------------------------------
void Scheduler::InterruptHandler(int dummy) {
  switch (policy) {

  case SCHED_FCFS: {
    break;
  }

  case SCHED_RR: {
    // YOUR PROJECT2 CODE HERE
    printf(">>> CURRENT THREAD: %s, BURST TIME: %d, NEXT THREAD: %s, SYSTEM TICK: %d, TOTAL TICK: %d\n", 
            oldThread->getName(), oldThread->getBurstTime(), newThread->getName(), stats->systemTicks, stats->totalTicks);
    if (dummy == 0) interrupt->YieldOnReturn();
    break;
  }

  case SCHED_PRIO_P: {
    break;
  }

  case SCHED_MLFQ: {
    // YOUR PROJECT2 CODE HERE

  }

  default:
    break;
  }
}

// This is needed because GCC doesn't like passing pointers to member functions.
void SchedInterruptHandler(int dummy) { scheduler->InterruptHandler(dummy); }

//----------------------------------------------------------------------
// Scheduler::SetSchedPolicy
//      Set the scheduling policy to one of SCHED_FCFS, SCHED_SJF,
//      SCHED_PRIO_NP，SCHED_PRIO_P
//----------------------------------------------------------------------
void Scheduler::SetSchedPolicy(SchedPolicy pol) {
  ptimer = new Timer(SchedInterruptHandler, 0, false);
  SchedPolicy oldPolicy = policy;
  policy = pol;
  switch (policy) {
  case SCHED_FCFS:
    printf("First-come first-served scheduling\n");
    break;
  case SCHED_SJF:
    printf("Shortest job first scheduling\n");
    break;
  case SCHED_RR:
    printf("Round robin scheduling\n");
    break;
  case SCHED_PRIO_NP:
    printf("Non-preemptive Priority scheduling\n");
    break;
  case SCHED_PRIO_P:
    printf("Preemptive Priority scheduling\n");
    break;
  case SCHED_MLQ:
    printf("Multi level queue scheduling\n");
    break;
  case SCHED_MLFQ:
    printf("Multi level feedback queue scheduling\n");
    break;
  default:
    break;
  }

  // YOUR MODIFICATIONS TO THIS FUNCTION ARE SUGGESTED.
}

//----------------------------------------------------------------------
// Scheduler::SetNumOfQueues
//      Set the number of queues for MLQ - should be called only once
//----------------------------------------------------------------------
void Scheduler::SetNumOfQueues(int level) {
  NumOfLevel = level;
  MultiLevelList = new List<Thread *>[level];
}
