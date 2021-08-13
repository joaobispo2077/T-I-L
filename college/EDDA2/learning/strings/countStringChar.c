#include <stdio.h>

int main()
{
  int getStringLength(char inputedString[]);
  char inputedString[20];
  printf("\n Digite uma palavra: ");
  scanf("%s", &inputedString);

  int stringLength = getStringLength(inputedString);

  printf("O tamanho da string '%s' eh de '%i' caracteres", inputedString, stringLength);

  return 0;
}

int getStringLength(char inputedString[])
{

  int stringLength;
  while (inputedString[stringLength] != '\0')
  {
    stringLength++;
  }

  return stringLength;
}