#include <stdio.h>

int main() {

  int divider;
  printf("Digite o numero: ");
  scanf("%d", &divider);

  if (!((divider % 5) && (divider & 3)))  {
    printf("Esse numero %d eh divisivel por 5 e 3", divider);
  } else {
    printf("Esse numero nao %d eh divisivel por 5 e 3", divider);
  }
  
}