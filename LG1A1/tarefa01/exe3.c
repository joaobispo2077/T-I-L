#include <stdio.h>
#include <locale.h>

int main ()
{
    int base, exponent, potency, acumulator, i;
    setlocale(LC_ALL, "Portuguese");

     printf("\n--Calcule uma potência digitando sua base e expoente--\n");
     printf("Digite um número para ser a base: ");
     scanf("%i", &base);
     printf("\nDigite um número para ser a expoente: ");
     scanf("%i", &exponent);
     acumulator = 1;
     for(i = 0; i < exponent; i++) {
        acumulator = acumulator * base;
     }
     potency = acumulator;
     printf("\nA potência da base %i elevado ao expoente %i é: %i", base, exponent, potency);
}
