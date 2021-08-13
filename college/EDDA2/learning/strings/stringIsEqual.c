#include <stdio.h>

int main()
{
  _Bool stringsIsEqual(char string1[], char string2[]);

  if (stringsIsEqual("casa", "casa"))
  {
    printf("\n\nEssas strings definitivamente sao identicas");
  }
  else
  {
    printf("\n\nEssas strings sao diferentes");
  }
}

_Bool stringsIsEqual(char string1[], char string2[])
{
  int i = 0;

  while (string1[i] == string2[i] && (string1[i] != '\0') && (string2[i] != '\0'))
  {
    i++;
  }

  if (string1[i] == '\0' && string2[i] == '\0')
  {
    return 1;
  }
  else
  {
    return 0;
  }
}