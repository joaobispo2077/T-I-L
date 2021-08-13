#include <stdio.h>
#include <locale.h>

int main ()
{
    float celsius, fahrenheit;
    setlocale(LC_ALL, "Portuguese");
    printf("\n---Converta Graus Celsius em Fahrenheit---\n");
    printf("Digite um valor em Graus Celsius: ");
    scanf("%f", &celsius);
    fahrenheit = (celsius * 1.8) + 32;
    printf("%.1fºCelsius são %.1fºF", celsius, fahrenheit);
}
