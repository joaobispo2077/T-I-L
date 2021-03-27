#include <stdio.h>
#include <stdlib.h>

int main(void)
{

  int *p = (int *)calloc(2, sizeof(int)); /*
   faz o mesmo que malloc(2 * sizeof(int)), mas iniializa o valor do ponteiro com 0
    se sizeof(int) libera 4 bits, 2 * 4 libera 8 bits
   */
  if (p == NULL)
  {
    printf("Memoria insuficiente");
    exit(-1);
  }
  printf("%i\n", *p);
  printf("%p\n", p);

  *p = 27;
  printf("%i\n", *p);
  printf("%p\n", p);
  free(p); //libera a memoria alocada pelo malloc - use quando nao for mais usar a variavel
  return 0;
}