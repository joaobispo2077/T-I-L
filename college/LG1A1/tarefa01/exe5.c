#include <stdio.h>
#include <locale.h>

int main ()
{

    float grossSalary, netSalary, socialSecurity, ir;
    setlocale(LC_ALL, "Portuguese");

    printf("Digite o seu salário bruto: ");
    scanf("%f", &grossSalary);

    socialSecurity = grossSalary * 0.085;
    grossSalary = grossSalary - socialSecurity;

    ir = grossSalary * 0.275;
    netSalary = grossSalary - ir;


    printf("\nO seu salário líquido é: %.6f\n", netSalary);
    printf("8,5 por cento do seu salário vai para a previdência, sendo exatamente: %.1f\n", socialSecurity);
    printf("27,5 por cento do seu salário vai para o IR, sendo exatamente: %.1f\n", ir);


}
