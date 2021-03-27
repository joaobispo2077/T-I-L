#include <stdio.h>
#include <locale.h>
int plusVector(int vector[], const int vectorSize)
{
  int plus = 0;
  int *pointer;
  int *const finalMember = vector + vectorSize;

  for (pointer = vector; pointer < finalMember; ++pointer)
  {
    plus += *pointer;
  }

  return plus;
}

void main()
{
  int plusVector(int vector[], const int vectorSize);
  int vector[10] = {2, 2, 2, 2, 2, 2, 2, 2, 2, 2};

  printf("A soma de todos elementos no vetor eh: %i", plusVector(vector, 10));
}