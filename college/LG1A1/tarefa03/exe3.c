#include <stdio.h>
int main() {

    int numberInt, result, count = 1;

    printf("---OLÁ, VOCÊ FOI ESCOLHIDO PARA DIGITAR UM NÚMERO INTEIRO---\n");

    printf("Digite um número inteiro: \n");
    scanf("%i", &numberInt);

    do{
        result = count * numberInt;
        printf("%i vezes %i eh igual a %i \n", count, numberInt, result);
        count = count + 1;
    } while(count <= 10);

}
