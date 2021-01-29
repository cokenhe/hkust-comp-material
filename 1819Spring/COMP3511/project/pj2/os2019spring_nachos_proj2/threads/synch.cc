// synch.cc
//	Routines for synchronizing threads.  Three kinds of
//	synchronization routines are defined here: semaphores, locks
//   	and condition variables (the implementation of the last two
//	are left to the reader).
//
// Any implementation of a synchronization routine needs some
// primitive atomic operation.  We assume Nachos is running on
// a uniprocessor, and thus atomicity can be provided by
// turning off interrupts.  While interrupts are disabled, no
// context switch can occur, and thus the current thread is guaranteed
// to hold the CPU throughout, until interrupts are reenabled.
//
// Because some of these routines might be called with interrupts
// already disabled (Semaphore::V for one), instead of turning
// on interrupts at the end of the atomic operation, we always simply
// re-set the interrupt state back to its original value (whether
// that be disabled or enabled).
//
// Copyright (c) 1992-1993 The Regents of the University of California.
// All rights reserved.  See copyright.h for copyright notice and limitation
// of liability and disclaimer of warranty provisions.

#include "synch.h"
#include "copyright.h"
#include "list.h"
#include "system.h"
//----------------------------------------------------------------------
// Semaphore::Semaphore
// 	Initialize a semaphore, so that it can be used for synchronization.
//
//	"debugName" is an arbitrary name, useful for debugging.
//	"initialValue" is the initial value of the semaphore.
//----------------------------------------------------------------------

Semaphore signal_counter("signal_counter", 1),
    signal_writer("signal_writer", 1);
int readercount = 0;

Semaphore::Semaphore(char *debugName, int initialValue) {
  name = debugName;
  value = initialValue;
  queue = new List<Thread *>();
}

//----------------------------------------------------------------------
// Semaphore::Semaphore
// 	De-allocate semaphore, when no longer needed.  Assume no one
//	is still waiting on the semaphore!
//----------------------------------------------------------------------

Semaphore::~Semaphore() { delete queue; }

//----------------------------------------------------------------------
// Semaphore::P
// 	Wait until semaphore value > 0, then decrement.  Checking the
//	value and decrementing must be done atomically, so we
//	need to disable interrupts before checking the value.
//
//	Note that Thread::Sleep assumes that interrupts are disabled
//	when it is called.
//----------------------------------------------------------------------

void Semaphore::P() {
  IntStatus oldLevel = interrupt->SetLevel(IntOff); // disable interrupts

  value--; // semaphore available,
  // consume its value
  if (value < 0) { // semaphore not available
                   //       printf("    %s hit semaphore %s but starts
                   //       waiting.\n",currentThread->getName(), name);
    queue->Append(currentThread); // so go to sleep
    currentThread->Sleep();
    //        printf("    %s assumed from waiting for semaphore %s and get
    //        it.\n",currentThread->getName(), name);
  } else {
    //        printf("    %s hit semaphore %s and get it
    //        successfully.\n",currentThread->getName(), name);
  }

  (void)interrupt->SetLevel(oldLevel); // re-enable interrupts
}
//----------------------------------------------------------------------
// Semaphore::V
// 	Increment semaphore value, waking up a waiter if necessary.
//	As with P(), this operation must be atomic, so we need to disable
//	interrupts.  Scheduler::ReadyToRun() assumes that threads
//	are disabled when it is called.
//----------------------------------------------------------------------

void Semaphore::V() {
  Thread *thread;
  //    printf("    %s release semaphore %s.\n",currentThread->getName(), name);
  IntStatus oldLevel = interrupt->SetLevel(IntOff);

  thread = (Thread *)queue->Remove();
  if (thread != NULL) // make thread ready, consuming the V immediately
    scheduler->ReadyToRun(thread);
  value++;
  (void)interrupt->SetLevel(oldLevel);
}

//----------------------------------------------------------------------
// Lock::Lock(char* debugName)
//      Initialize a lock so that it can be used for synchronization.
//
//----------------------------------------------------------------------
Lock::Lock(char *debugName) {
  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Lock::~Lock()
//      De-allocate lock, when no longer needed.  Assume no one
//      is still waiting on the lock!
//
//----------------------------------------------------------------------
Lock::~Lock() {
  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Lock::Acquire()
//      Acquire a lock. If it is already held by another thread then
//      get in line and go to sleep waiting for the lock to be released.
// MP1 Fill in this code
//----------------------------------------------------------------------

void Lock::Acquire() {
  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Lock::Release()
//      Release a lock and wake up a process waiting to acquire it.
//
//----------------------------------------------------------------------

void Lock::Release() {
  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Lock::isHeldByCurrentThread()
//      Interesting that interrupts don't need to be disabled here!
//----------------------------------------------------------------------

bool Lock::isHeldByCurrentThread() {
  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Condition::Condition(char* debugName)
//      Here is an example of using a condition variable:
//
//      Lock *lock = new Lock("lock");
//      Condition *condition = new Condition("condition");
//      lock->Acquire();
//      while (not OK) condition.Wait(lock);
//      S;
//      condition.Signal(lock);
//
// DH: Note changed semantics The Signal and Broadcast do the job of
// releasing the lock
//----------------------------------------------------------------------

Condition::Condition(char *debugName) {
  name = debugName;

  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Condition::~Condition()
//      De-allocate condition, when no longer needed.  Assume no one
//      is still waiting on the condition!
//----------------------------------------------------------------------

Condition::~Condition() {
  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Condition::Wait(Lock *conditionLock)
//      Put thread to sleep waiting for a signal.
// MP1  Fill in this code
//----------------------------------------------------------------------

void Condition::Wait(Lock *conditionLock) {
  // MP 2 Code here.
}

//----------------------------------------------------------------------
// Condition::Signal(Lock *conditionLock)
//      Wake up one thread waiting on this condition.
// MP1  Fill in this code
//----------------------------------------------------------------------

void Condition::Signal(Lock *conditionLock) {
  // MP 2 Code here.
}

//-------------------------------------------------------------------
// mutex controls access to "rc"--readers' counter"
// db controls access to the data base
// rc :the number of the threads reading or wanting to
//-------------------------------------------------------------------

// MP2: Declare and initialize semaphore(s) and anything else.

Reader::Reader(char *DebugName) { name = DebugName; }

Reader::~Reader() {}

void Reader::read(int num) {

  int i = 0;
  // Insert Code here
  // insert more code here.
  signal_counter.P();
  readercount++;
  if (readercount == 1)
    signal_writer.P();
  signal_counter.V();
  // For the simulation of the reading.  (Do not change)
  printf("%s starts reading.\n", currentThread->getName());
  while (i < num) {
    printf("%s is reading the page of %d in the database\n",
           currentThread->getName(), i);
    i++;
  }
  printf("%s finishes reading.\n", currentThread->getName());
  signal_counter.P();
  readercount--;
  if (readercount == 0)
    signal_writer.V();
  signal_counter.V();
}

Writer::Writer(char *DebugName) { name = DebugName; }

Writer::~Writer() {}

void Writer::write(int num) {
  int i = 0;
  // Insert Code here

  signal_writer.P();

  printf("%s starts writing.\n", currentThread->getName());
  // For the simulation of the writing.  (Do not change)
  while (i < num) {
    printf("%s is writing the page of %d in the database\n",
           currentThread->getName(), i);
    i++;
  }
  signal_writer.V();
  printf("%s finish writing\n", currentThread->getName());
}
