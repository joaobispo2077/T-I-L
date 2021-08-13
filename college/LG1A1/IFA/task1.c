#include <stdio.h>
#include <stdlib.h>

struct numbersDiferent {
    int numberDistinct;
};

int main() {

  struct numbersDiferent numbers[4];
  for (int i = 0; i < 4; i++) {
    printf("Digite o numero: ");
    scanf("%d", &numbers[i].numberDistinct);

  }

  struct numbersDiferent major;

  for (int i = 0; i < 4; i++) {
    if (major.numberDistinct < numbers[i].numberDistinct || major.numberDistinct == 0) {
      major.numberDistinct = numbers[i].numberDistinct;
      printf("\n%d\n", major.numberDistinct);
    }   
  }

  printf("\nmenor---%d---\n", major.numberDistinct);
  printf("menor: %d", major.numberDistinct);

  struct numbersDiferent result;
  result.numberDistinct = 0;
  for (int i = 0; i < 4; i++) {
    if (major.numberDistinct != numbers[i].numberDistinct ) {
      result.numberDistinct = result.numberDistinct + numbers[i].numberDistinct;
      printf("\n%d", result.numberDistinct);
    }    
  }

  FILE* f;
  f = fopen("RESPOSTA.TXT", "w");

  fprintf(f, " %d", result.numberDistinct);

  fclose(f);
}



void salvaDados (ESTRUTURA *l){
    FILE* f;
  f = fopen("RESPOSTA.TXT", "w");

  fprintf(f, " %d", result.numberDistinct);

  fclose(f);
}