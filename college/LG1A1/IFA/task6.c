#include <stdio.h>
#include <stdlib.h>

//  Assinatura das funções
void scanAges(int agePeoples[10]);
void showMaxiAndMin(int agePeoples[10]);
void showPeopleMajorDezoito(int agePeoples[10]);
void showPeopleMinorDezoito(int agePeoples[10]);
void showWelcome();

void scanAges(int agePeoples[10]) {
  for (int i = 0; i < 10; i++){
    printf("Digite a idade da %dº pessoa: ", i + 1);
    scanf("%d", &agePeoples[i]);
  }

}

void showMaxiAndMin(int agePeoples[10]) {
    int max = 0;
  int min;
  for (int i = 0; i < 10; i++) {

    if (agePeoples[i] > max){
      max = agePeoples[i];
    }


    if (agePeoples[i] < min || min == 0){
      min = agePeoples[i];
    }    
    
  }

  printf("\nA maior idade digitada foi: %d\n", max);
  printf("\nA menor idade digitada foi: %d\n", min);
}

void showPeopleMajorDezoito(int agePeoples[10]) {
  int quantityPeople = 0;
  for (int i = 0; i < 10; i++) {
    if (agePeoples[i] >= 18) {
      quantityPeople++;
    }    
  }
  printf("\nA quantidade de pessoas que tem 18 anos ou mais e de: %d\n", quantityPeople);
}

void showPeopleMinorDezoito(int agePeoples[10]) {
  int quantityPeople = 0;
  for (int i = 0; i < 10; i++) {
    if (agePeoples[i] < 18) {
      quantityPeople++;
    }    
  }
  printf("\nA quantidade de pessoas que tem menos de 18 anos e de: %d\n", quantityPeople);
}

void showWelcome() {
  printf("+---------------+\n");
  printf("|   Bem-vindo   |\n");
  printf("| Profº Evandro |\n");
  printf("| ao calculador |\n");
  printf("|  de idades    |\n");
  printf("+---------------+\n");
}

int main() {
  int agePeoples[10];

  showWelcome();

  scanAges(agePeoples);

  showMaxiAndMin(agePeoples);

  showPeopleMajorDezoito(agePeoples);

  showPeopleMinorDezoito(agePeoples);
}