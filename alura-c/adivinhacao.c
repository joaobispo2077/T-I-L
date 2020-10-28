#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <time.h>
#define INFINITY 1

int main() {

    printf("\n\n\n");
    printf("+================================+\n");
    printf("|Bem-vindo ao jogo de advinhacao!|\n");
    printf("+================================+\n");

    int seconds = time(0);
    srand(seconds);

    int randomNumber = rand();
    int secretNumber = (randomNumber % 100);
    int luckyNumber;
    int attempts = 1;
    double points = 1000;

    printf("Preparado para tentar a sua sorte?!\n");

    while(INFINITY){

        printf("\nTentativa: %d.\n\n", attempts);

        printf("Digite um número para testar a sorte: ");
        scanf("%i", &luckyNumber);

        if (luckyNumber < 0){
            printf("+============================================================+\n");
            printf("|Tá de brincadeira? VOCÊ PRECISA DIGITAR UM NÚMERO POSITIVO! |\n");
            printf("+============================================================+\n");
            printf("\n\n\n\n");
            continue;
        }
        
        printf("\nMacacos me mordam! \nO número que você digitou foi: %i\n\n\n", luckyNumber);

        int isEqual = (luckyNumber == 42);
        int isBiggerThan = (luckyNumber > 42);

        if (isEqual) {
            printf("Wow, você por acaso é o Albert Einstein? Acertou!\n");
            printf(".\n.\nContinue jogando para treinar sua sorte!\n");

            break;
        } else if (isBiggerThan) {       
            printf(".\nDessa vez foi QUASE, mas ainda sim, o número que você digitou é maior que o número da sorte\n");
        } else {
            printf(".\nDessa vez foi QUASE, mas ainda sim, o número que você digitou é menor que o número da sorte\n");
        }            
        attempts++;

        double lostPoints = (abs(luckyNumber - secretNumber) / (double)2);
        points = points - lostPoints;
    }

    printf("\nFim de jogo!\n");
    printf("\nO seu número de tentativas foi: %d!\n", attempts);
    printf("\nPontuação: %.1f!\n", points);
    
}