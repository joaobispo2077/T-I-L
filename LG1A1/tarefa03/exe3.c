#include <stdio.h>
int main() {

    int numberInt, result, count = 1;

    printf("---OL�, VOC� FOI ESCOLHIDO PARA DIGITAR UM N�MERO INTEIRO---\n");

    printf("Digite um n�mero inteiro: \n");
    scanf("%i", &numberInt);

    do{
        result = count * numberInt;
        printf("%i vezes %i eh igual a %i \n", count, numberInt, result);
        count = count + 1;
    } while(count <= 10);

}
