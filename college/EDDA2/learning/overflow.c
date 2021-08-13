#include <stdio.h>
#include <locale.h>

void main()
{
  //short int long
  short x = 6546545; //overflow
  short y = -654654; //underflow

  printf("%i", x);
  printf("%i", y);
}