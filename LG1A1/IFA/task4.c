#include <stdio.h>

void calculateSomator() {
  int insertedNumber;

  printf("\n Digite um numero para descobrir a soma de todos ate ele: ");
  scanf("%d", &insertedNumber);

  int result = 0;
  int somator = 1;
  while (somator <= insertedNumber) {
    result += somator++;
  }
  printf("A soma de todos os numeros ate %d eh de: %d\n", insertedNumber, result);
}

int main(void) {
  calculateSomator();
}