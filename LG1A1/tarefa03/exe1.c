
#include <stdio.h>
#include <stdlib.h>
int main ()
{
     int cont;

     float base, altura, area;

     system ("cls");

     cont=0; base=0; altura=0; area=0;

    do{
         printf ("\n Base :"); fflush(stdin); scanf("%f", &base);
         printf ("\n Altura :"); fflush(stdin); scanf("%f", &altura);
         if (base==0 || altura==0)
            printf ("\nImposs�vel calcular �rea do tri�ngulo!");
         else
         {
             area = base*altura/2;
             printf ( "\n �rea =%5.2f" , area );
         }
     cont++;
     } while(cont < 3);

     printf ("\n");
     system ("pause");
}
