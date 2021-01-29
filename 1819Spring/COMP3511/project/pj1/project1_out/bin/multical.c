#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdio.h>
#include <string.h>

#include <expression.h>
#include <fd.h>

#define MAIN_BUF_LEN 1024

/**
 * This part is for debugging.
 * Just print out all the params passed in depends on the flag IS_DEBUG_MODE
 * In this format: "{pid} {...params}"
 */
#include <stdarg.h>
#define IS_DEBUG_MODE false     // change this line to toggle this function.
extern void debug(const char * str, ...);
void debug(const char * str, ...) {
    if (!IS_DEBUG_MODE) return;
    char buffer[4096];
    va_list args;
    va_start(args, str);
    vsnprintf(buffer, sizeof(buffer), str, args);
    printf("#%d %s\n", getpid(), buffer);
    va_end(args);
}

void print_help()
{
    printf(
        "Usage: multical.out [infile] [outfile] [proc]\n"
        "\n"
        "infile:    input file path\n"
        "outfile:   output file path\n"
        "proc:      Number of child process to spawn\n");
}

// You can modify child_work parameters as you need
int child_work(int pipes[][2], int proc, int procid, int outfd)
{
    // Declare your variables here
    int i;
    pid_t mypid;
    Expression exp;
    float result;
    char buf[MAIN_BUF_LEN];

    // TASK 9 Close all other pipes (10 pts)
    //
    // The child only uses one reading end, the matching one the parent will use
    // to communicate with this child. Close all other reading ends of pipes
    // that is not used by this child.
    //
    // You don't need to close pipes here if it is already done in main.
    debug("%d / %d\n", procid + 1, proc);
    for (i = 0; i < proc; ++i)
    {
        // TODO
        close(pipes[i][1]);         // close write end of all pipes
        if (i == procid) {
            debug("closed pipes[%d][1]\n", i);
            continue;
        }
        close(pipes[i][0]);         // close read end except current pipe
        debug("closed pipes[%d][x]\n", i);
    }
    // ---------- END TASK 9 ----------

    // TASK 10 Get child pid to mypid (5 pts)
    mypid = getpid();
    // ---------- END TASK 10 ----------

    // TASK 11 Child read pipe and calculate the expression and output (20 pts)
    //
    // Read from the pipe.
    // Calculate the expression and write to outfile for each expression.
    // Stop when EOF is reached, i.e. parent closed the pipe and read() returns
    // 0.

    // TODO
    debug("start reading pipes[%d][0]\n", procid);
    while (fd_readln(pipes[procid][0], buf, MAIN_BUF_LEN) > 0) {
        debug("<< pipes[%d][0]: %s\n", procid, buf);
        if (exp_readln(&exp, buf) == 0) {       // construct a expression by read a line from pipe
            result = exp_cal(&exp);             // calculate the value from the input
            debug("writing to outfile: #%d %f %c %f", exp.id, exp.a, exp.op, exp.id);
            dprintf(outfd, "#%d %d %.3f\n", exp.id, mypid, result);   // write the value to outfile
        }
    }
    debug("end reading pipes[%d][0]\n", procid);

    // ---------- END TASK 11 ----------

    return 0;
}

int main(int argc, char **argv)
{
    if (argc != 4)
    {
        print_help();
        return 0;
    }

    const char *infile;  // Name of infile
    const char *outfile; // Name of outfile
    int proc;            // Number of child process to fork

    // Save arguments to variables
    infile = argv[1];
    outfile = argv[2];
    sscanf(argv[3], "%u", &proc);

    int pipes[proc][2]; // Pipes to be created
    pid_t child_pids[proc];

    int i; // Loop counter

    char buf[MAIN_BUF_LEN];
    Expression exp;

    // Declare your variables here
    pid_t parentPid;
    pid_t tempPid;
    int infd;
    int outfd;

    // TASK 1 Open the files. (5 points)
    //
    // Open infile with readonly, outfile with write and append.
    // TODO

    infd = open(infile, O_RDONLY);
    outfd = open(outfile, O_WRONLY | O_CREAT);

    // ---------- END TASK 1 ----------

    // TASK 2 Get parent pid and print to outfile (5 pts)
    // TODO

    tempPid = parentPid = getpid();
    dprintf(outfd, "%d\n", parentPid);
    debug("%d\n", parentPid);

    // ---------- END TASK 2 ----------

    // TASK 3 Create pipes (10 pts)
    //
    // $proc pipes should be created and saved to pipes[proc][2]
    for (i = 0; i < proc; ++i)
    {
        // TODO
        if (pipe(pipes[i]) == -1) return -1;    // terminate with error code -1 if fail to create pipe.
    }
    // ---------- END TASK 3 ----------

    // TASK 4 Create child processes (10 pts)
    //
    // $proc child processes should be created.
    // Call child_work() immediately for each child.
    for (i = 0; i < proc; ++i)
    {
        // TODO
        if (tempPid) {                      // it should be fine if omit this line
            tempPid = fork();
            child_pids[i] = tempPid;        // never use this variable
            if (tempPid == 0) {
                debug("#%d forked %dth child #%d\n", parentPid, i+1, getpid());
                return child_work(pipes, proc, i, outfd);   // terminate the child process after finish running child_work()
            }
        }
    }
    // ---------- END TASK 4 ----------

    // TASK 5 Close reading end of pipes for parent (5 pts)
    for (i = 0; i < proc; ++i)
    {
        // TODO
        if (getpid() == parentPid) {        // it should be fine if omit this line
            close(pipes[i][0]);
            debug("closed pipes[%d][0]\n", i);
        }
    }
    // ---------- END TASK 5 ----------

    // TASK 6 Read from file and distribute to children (20 pts)
    //
    // Read lines and distribute the calculations to children in round-robin
    // style.
    // Stop when a empty line is read.
    // Close all the pipes when the task ends.

    // TODO
    i = 0;
    while(fd_readln(infd, buf, MAIN_BUF_LEN) > 0){
        debug("<< infile: %s\n", buf);
        debug(">> pipes[%d][1]\n", i);
        dprintf(pipes[i][1], "%s\n", buf);  // read a line from infile and pass to pipes[i]
        i = ( i + 1 ) % proc;       // Round Robin
    }

    for(i = 0; i < proc; ++i)
    {
        if (getpid() == parentPid) {    // it should be fine if omit this line
            close(pipes[i][1]);         // close all writing pipes after finish writing.
            debug("closed pipes[%d][1]\n", i);
        }
    }
    
    // ---------- END TASK 6 ----------

    // TASK 7 Wait for children (5 pts)
    for (i = 0; i < proc; ++i)
    {
        // TODO
        debug("waiting for %d\n", i + 1);
        wait(NULL);
        debug("end waiting %d\n", i + 1);
    }
    // ---------- END TASK 7 ----------

    // TASK 8 Write last \n (5 pts)
    // TODO
    dprintf(outfd, "\n");
    // ---------- END TASK 8 ----------

    return 0;
}