#include <stdio.h>
// #define SIM 100
// #define NAO -100

#define PI 3.14159
#define NULL 0

double getCircleArea(double radius)
{
  return radius * radius * PI;
}

int main()
{
  // int number;

  // printf("\n\nDigite um numero: ");
  // scanf("%i", &number);

  // if (number <= 100)
  //   printf("%i", NAO);
  // else
  //   printf("%i", SIM);

  double getCircleArea(double radius);
  double radius;

  int i = 2;

  while (i != NULL)
  {

    printf("\n\nDigite o raio de um circulo para descobrir a area: ");
    scanf("%lf", &radius);

    printf("\n\nArea do circulo eh: %lf\n", getCircleArea(radius));
    --i;
  }

  system("pause");
  return NULL;
}