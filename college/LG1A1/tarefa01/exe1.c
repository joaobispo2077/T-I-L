#include <stdio.h>
#include <locale.h>


int main ()
{
    setlocale(LC_ALL, "Portuguese");

    float height, radius, volume;

    printf("\n------------Cálculo do volume de uma lata de Óleo------------\n");

    printf("\n*********Para calcular o volume da lata você deve digitar os valores do raio e altura da lata*********\n");

    printf("\nDigite o raio(cm) da lata de óleo: ");
    scanf("%f", &radius);

    printf("\nAgora, digite a altura(cm) a da lata de óleo: ");
    scanf("%f", &height);

    volume = (3.14159 * (radius*radius) * height);

    printf("\nO volume da lata de óleo em mililitros é %.1fml", volume);
}
