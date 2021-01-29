#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
int main() {
  int child = fork();
  int c = 5;
  if(child == 0)
  {
c += 5; }
else {
child = fork(); c += 10; if(child)
c += 5;
  }
  printf("%d\n",c);
  return 0;
}
