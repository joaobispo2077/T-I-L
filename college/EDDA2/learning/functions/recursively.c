#include <stdio.h>

int main(void)
{
  int factorial(int number);

  int result, number;

  printf("Digite um numero para saber o fatorial desse numero: ");
  scanf("%i", &number);

  result = factorial(number);

  printf("O fatorial de %i eh %i ", number, result);
}

int factorial(int number)
{
  if (number == 0)
    return 1;

  return number * factorial(number - 1);
}