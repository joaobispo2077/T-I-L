#include <stdio.h>
#include <locale.h>

void showWelcome()
{
  printf("+---------------+\n");
  printf("|   Bem-vindo   |\n");
  printf("| ao calculador |\n");
  printf("|  de idades    |\n");
  printf("+---------------+\n");
}

int main()
{
  setlocale(LC_ALL, "Portuguese");
  showWelcome();
  int age;
  int birthyear;
  printf("\n\nEm que ano voce nasceu? ");
  scanf("%d", &birthyear);
  age = 2021 - birthyear;
  printf("\nA sua idade eh %d\n", age);
  printf("hello");
  return 0;
}