#include <stdio.h>

int main(void)
{
  //declare int
  int numberInteger = 10;
  //or
  int numberInteger2;
  numberInteger2 = 10;

  double decimalNumber = 75.7;

  char letter = 'v';

  //declare pointers
  int *pNumberInteger;
  pNumberInteger = &numberInteger; // pointer to memory address to variable after "&"

  int *pNumberInteger2 = &numberInteger2;
  /* pointer with "*pointer" access the pointer value and
  pointer without "*" access the pointer memory address  */

  double *pointerDecimalNumber = &decimalNumber;
  char *pointerLetter = &letter;

  numberInteger = 15;
  printf("Memory Address: %i - Value: %i", pNumberInteger, *pNumberInteger);
  // printf("\n\nMemory Address: %i - Value: %i", atx, *atx);
  return 0;
}