
#include <stdio.h>
#include <locale.h>

int main ()
{
    float salary;
    setlocale(LC_ALL, "Portuguese");
    printf("Digite o seu sal�rio para conferir o reajuste de 25 por cento: ");
    scanf("%f", &salary);
    salary = salary * 1.25;
    printf("O seu novo sal�rio � de: %.0fR$", salary);
}
