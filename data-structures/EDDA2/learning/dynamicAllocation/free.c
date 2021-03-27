#include <stdio.h>
#include <stdlib.h>

int main(void)
{

  int *p = (int *)malloc(sizeof(int)); //malloc -> memmory allocation, retorna um ponteiro de tipo void, necessario usar caasting para usar um ponteiro do tipo que voce precisa

  if (p == NULL)
  {
    printf("Memoria insuficiente");
    exit(-1);
  }

  *p = 27;
  printf("%i\n", *p);
  printf("%p\n", p);
  free(p); //libera a memoria alocada pelo malloc - use quando nao for mais usar a variavel
  return 0;
}