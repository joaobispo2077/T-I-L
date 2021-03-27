#include <stdio.h>
#include <locale.h>

void copyString(char *copier, char *pastier)
{
  while (*copier != '\0')
  {
    *pastier = *copier;
    ++copier;
    ++pastier;
  }
  *pastier = "\0";
}

void main()
{
  void copyString(char *copier, char *pastier);
  char string1[] = "Tigre Branco";
  char string2[20];

  copyString(string1, string2);
  printf("%s", string2);
}