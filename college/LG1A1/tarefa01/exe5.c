#include <stdio.h>
#include <locale.h>

int main ()
{

    float grossSalary, netSalary, socialSecurity, ir;
    setlocale(LC_ALL, "Portuguese");

    printf("Digite o seu sal�rio bruto: ");
    scanf("%f", &grossSalary);

    socialSecurity = grossSalary * 0.085;
    grossSalary = grossSalary - socialSecurity;

    ir = grossSalary * 0.275;
    netSalary = grossSalary - ir;


    printf("\nO seu sal�rio l�quido �: %.6f\n", netSalary);
    printf("8,5 por cento do seu sal�rio vai para a previd�ncia, sendo exatamente: %.1f\n", socialSecurity);
    printf("27,5 por cento do seu sal�rio vai para o IR, sendo exatamente: %.1f\n", ir);


}
