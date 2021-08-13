#include <stdio.h>

int main(void)
{
  char firstname[20];
  char lastname[20];

  printf("Insira o seu nome e sobrenome: \n");
  scanf("%s%s", &firstname, &lastname);

  printf("%s %s", firstname, lastname);

  return 0;
}