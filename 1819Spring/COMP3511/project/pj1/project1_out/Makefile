
PROJECT := comp3511-2019s-project1

BIN := bin
TEST := test
SRC := src
INC := include

LD := gcc
CC := gcc

INCLUDES := -I$(INC)
CFLAGS := $(INCLUDES) -g
LIBS :=
LDFLAGS := $(LIBS)

all: clean $(addsuffix .out,$(basename $(wildcard $(BIN)/*.c))) $(addsuffix .out,$(basename $(wildcard $(TEST)/*.c)))

%.out: %.o  $(addsuffix .o,$(basename $(wildcard $(SRC)/*.c)))
	$(LD) $(LDFLAGS) $^ -o $@

%.o: %.c $(wildcard $(INC)/*.h)
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm ./$(BIN)/*.out
	rm ./$(TEST)/*.out

