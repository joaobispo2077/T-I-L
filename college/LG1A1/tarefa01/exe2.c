#include <stdio.h>
#include <locale.h>


int main ()
{
    int number, numberDoubled, numberSquared;

    setlocale(LC_ALL, "Portuguese");

    printf("\n---Digite um n�mero para retornar o dobro e o quadrado desse n�mero---\n");

    printf("---Digite um n�mero: ");
    scanf("%i", &number);

    numberDoubled = number * 2;
    numberSquared = number * number;

    printf("\n O n�mero que voc� digitou �:  %i", number);
    printf("\n O dobro de %i �: %i", number, numberDoubled);
    printf("\n O quadrado de %i �: %i", number, numberSquared);

}
