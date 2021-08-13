#include <stdio.h>

int main(void)
{
  char line[100];
  char caractere;

  int i = 0;

  do
  {
    caractere = getchar();
    line[i] = caractere;
    i++;
  } while (caractere != '\n');
  line[i - 1] = '\0';

  printf("%s", line);

  return 0;
}