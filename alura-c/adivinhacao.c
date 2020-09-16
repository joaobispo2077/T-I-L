#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main() {

    printf("================================\n");
    printf("Bem-vindo ao jogo de advinhacao!\n");
    printf("================================\n");

    int secretNumber = 42;   

    int luckyNumber;

    printf("Preparado para tentar a sua sorte?!\n");

    for(int i = 1; i <= 3; i =  i + 1) {

      printf("\nTentativa %d de 3\n\n", i);

      printf("Digite um número para testar a sorte: ");
      scanf("%i", &luckyNumber);

      printf("\nMacacos me mordam! \nO número que você digitou foi: %i\n", luckyNumber);

      int isEqual = (luckyNumber == 42);
      

      if (isEqual) {
          printf("Wow, você por acaso é o Albert Einstein? Acertou!\n");
          printf(".\n.\nContinue jogando para treinar sua sorte!\n");

          break;
      } else {
          int isBiggerThan = (luckyNumber > 42);
          
          if (isBiggerThan) {
              printf(".\nDessa vez foi QUASE, mas ainda sim, o número que você digitou é maior que o número da sorte\n");
          } else {
              printf(".\nDessa vez foi QUASE, mas ainda sim, o número que você digitou é menor que o número da sorte\n");
          }            
      }
    }

    printf("\nFim de jogo!\n");
    
}