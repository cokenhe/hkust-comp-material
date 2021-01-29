#include <unistd.h>

#include <fd.h>

int fd_readln(int fd, char *buf, size_t len)
{
    char c;
    char *cur;
    int i;

    i = 0;
    cur = buf;
    while (read(fd, &c, 1) == 1 && i < len)
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
        ++i;
    }
    return 0;
}