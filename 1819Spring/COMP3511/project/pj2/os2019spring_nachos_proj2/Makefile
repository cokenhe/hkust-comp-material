# Copyright (c) 1992 The Regents of the University of California.
# All rights reserved.  See copyright.h for copyright notice and limitation 
# of liability and disclaimer of warranty provisions.

MAKE = make

all: test0 test1 test2 test3

test0: nachos
	ln nachos test0

test1: nachos
	ln nachos test1

test2: nachos
	ln nachos test2

test3: nachos
	ln nachos test3

nachos:
	cd threads; $(MAKE) depend
	cd threads; $(MAKE) nachos
	mv threads/nachos ./nachos

# don't delete executables in "test" in case there is no cross-compiler
clean:
	/bin/sh -c "rm -f machine/*.o threads/*.o nachos test0 test1 test2 test3 *.out.txt"

format:
	clang-format -i machine/*.cc machine/*.h threads/*.cc threads/*.h

exec: all
	rm -f *.out.txt
	test0 >> test0.out.txt
	test1 >> test1.out.txt
	test2 >> test2.out.txt
	test3 >> test3.out.txt
