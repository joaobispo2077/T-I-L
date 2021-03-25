#include <stdio.h>

int main(void)
{
  int number = 10;

  int *pointer; // pointer declaration

  pointer = &number;        // pointer value agregation with MEMORY ADDRESS
  printf("\n%i", *pointer); //pointer showing value in memory address
  printf("\n%i", pointer);  //pointer showing memory address
}