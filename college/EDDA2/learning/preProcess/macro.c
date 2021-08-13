#include <stdio.h>

#define PI 3.14159

#define GET_CIRCLE_AREA(radius) radius *radius *PI; //This is a Macro

#define IS_MAJOR_THAN(x, y) x > y ? x : y
#define IS_TINY_LETTER(letter) letter >= 'a' && letter <= 'z'

double getCircleArea(double radius)
{
  return GET_CIRCLE_AREA(radius);
}

int main()
{
  int number;
  char letter;
  printf("\nDigite um numero para saber se ele eh maior que 10, retornara o maior numero: ");
  scanf("%i", &number);
  printf("\nO maior eh %i", IS_MAJOR_THAN(number, 10));

  printf("\nDigite uma letra para saber se ela eh minuscula: ");
  scanf("%c", &letter);
  if (IS_TINY_LETTER(letter))
    printf("\nSim ela eh minuscula");
  else
    printf("\nEla nao eh minuscula");

  return 0;
}