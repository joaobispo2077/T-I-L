#include <stdio.h>
#include <locale.h>

int main ()
{
    int age, months, days, weeks, birthdayYear, currentYear;
    setlocale(LC_ALL, "Portuguese");
    printf("\n***Descubra h� quantos meses, dias e semanas voc� est� aqui***\n ");
    printf("\nDigite o ano do seu nascimento: ");
    scanf("%i", &birthdayYear);

    printf("\nDigite o ano atual: ");
    scanf("%i", &currentYear);

    age = currentYear - birthdayYear;

    months = age * 12;
    days = months * 30;
    weeks = months * 4;

    printf("\nA sua idade �: %i\n", age);
    printf("\nA sua idade em meses s�o %i meses\n", months);
    printf("\nA sua idade em dias s�o %i dias\n", days);
    printf("\nA sua idade em semanas s�o %i semanas\n", weeks);
}
