#include <stdio.h>
#include <locale.h>


int main ()
{
    int number, numberDoubled, numberSquared;

    setlocale(LC_ALL, "Portuguese");

    printf("\n---Digite um número para retornar o dobro e o quadrado desse número---\n");

    printf("---Digite um número: ");
    scanf("%i", &number);

    numberDoubled = number * 2;
    numberSquared = number * number;

    printf("\n O número que você digitou é:  %i", number);
    printf("\n O dobro de %i é: %i", number, numberDoubled);
    printf("\n O quadrado de %i é: %i", number, numberSquared);

}
