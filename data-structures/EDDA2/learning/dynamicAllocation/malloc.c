#include <stdio.h>
#include <stdlib.h>

int main(void)
{

  int *p = (int *)malloc(sizeof(int)); //malloc -> memmory allocation

  if (p == NULL)
  {
    printf("Memoria insuficiente");
    exit(-1);
  }

  *p = 27;
  printf("%i\n", *p);
  printf("%p\n", p);
  return 0;
}