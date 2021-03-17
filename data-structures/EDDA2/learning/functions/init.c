#include <stdio.h>

int main(void)
{
  void showSquareArea(float area); //  declara função dentro do código principal, nao eh necessario se a funcao estiver acima de main()
  float calculateSquareArea(float side);

  float area = calculateSquareArea(2);
  showSquareArea(area);
  return 0;
}

void showSquareArea(float area)
{
  printf("hey, i am a message, %.2f", area);
}

float calculateSquareArea(float side)
{
  float area = side * side;

  return area;
}