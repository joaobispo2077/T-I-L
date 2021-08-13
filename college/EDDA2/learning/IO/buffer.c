#include <stdio.h>

int main()
{
  void clearBuffer(void);

  char a, b, c;

  a = getchar();
  clearBuffer();
  b = getchar();
  clearBuffer();
  c = getchar();
  clearBuffer();

  printf("\n%c", a);
  printf("\n%c", b);
  printf("\n%c", c);
}

void clearBuffer(void)
{
  // fflush(stdin);
  char c;
  while ((c = getchar()) != '\n' && c != EOF)
    ;
}