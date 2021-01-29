#include <unistd.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int fdreadln(int fd, char *buf)
{
    char c;
    char *cur;

    cur = buf;
    while (read(fd, &c, 1) == 1)
    {
        if (c == '\n')
        {
            *cur = '\0';
            return cur - buf;
        }
        else
        {
            *cur = c;
            ++cur;
        }
    }
    return 0;
}

int main()
{
    int pipefd[2];
    char buf[1024];
    char *cur;
    int i;
    pid_t pid;

    if (pipe(pipefd) == -1)
        return -1;

    pid = fork();
    if (pid == -1)
        return -1;
    else if (pid)
    {
        sleep(1);
        printf("Parent: goodbye\n");


        // close(pipefd[1]);
        // pid = getpid();
        // while(1){
        //     int read = fdreadln(pipefd[0], buf);
        //     printf("%d\t" , read);
        //     if (read > 0) {
        //         printf("Parent: goodbye\n %s \n", buf);
        //         break;
        //     }
        //     else {
        //         printf("NOT YET\n");
        //     }
        // }
    }
    else
    {
        close(pipefd[0]);
        pid = getpid();
        printf("Child: hello\n");
        // dprintf(pipefd[1], "DONE");
    }

    return 0;
}