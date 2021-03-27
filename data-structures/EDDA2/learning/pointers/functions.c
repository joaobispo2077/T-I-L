#include <stdio.h>

void main()
{
  void testVariable(int x);
  void testPointer(int *pX);

  int test = 26;

  int *pTest = &test;

  printf("%i\n", test);

  testVariable(test);

  printf("%i\n", test);

  testPointer(pTest);

  printf("%i\n", test);
}

void testVariable(int x)
{
  ++x;
}
void testPointer(int *pX)
{
  ++*pX;
}
