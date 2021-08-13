#include <stdio.h>
#include <locale.h>
void main()
{
  setlocale(LC_ALL, "Portuguese");
  int vector[3] = {3, 2, 1};

  int *pointer = vector; //pointer tio first member in vector

  printf("%i", *pointer);
  return 0;
}