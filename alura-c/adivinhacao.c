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
    printf("Digite um número para testar a sorte:");
    scanf("%i", &luckyNumber);

    printf("Macacos me mordam! O número que você digitou foi: %i", luckyNumber);

    int isEqual = (luckyNumber == 42);
    

    if (isEqual) {
        printf("Wow, você por acaso é o Albert Einstein? Acertou!");
        printf("Continue jogando para treinar sua sorte!");
    } else {
        int isBiggerThan = (luckyNumber > 42);
        
        if (isBiggerThan) {
            printf("Dessa vez foi QUASE, mas ainda sim, o número que você digitou é maior que o número da sorte");
        } else {
            printf("Dessa vez foi QUASE, mas ainda sim, o número que você digitou é menor que o número da sorte");
        }            
    }
    
}
