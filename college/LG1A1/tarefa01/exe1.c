#include <stdio.h>
#include <locale.h>


int main ()
{
    setlocale(LC_ALL, "Portuguese");

    float height, radius, volume;

    printf("\n------------C�lculo do volume de uma lata de �leo------------\n");

    printf("\n*********Para calcular o volume da lata voc� deve digitar os valores do raio e altura da lata*********\n");

    printf("\nDigite o raio(cm) da lata de �leo: ");
    scanf("%f", &radius);

    printf("\nAgora, digite a altura(cm) a da lata de �leo: ");
    scanf("%f", &height);

    volume = (3.14159 * (radius*radius) * height);

    printf("\nO volume da lata de �leo em mililitros � %.1fml", volume);
}
