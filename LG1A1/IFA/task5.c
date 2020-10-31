#include <stdio.h>

int main () {

    int  sair, opcaoEscolhida, desejaSair;
    float media_Aritmetica,media_Ponderada;
    
    printf("1. Média Aritmética \n");
    printf("2. Média Ponderada \n");
    printf("3. Sair \n\n\n");

    printf("Digite aqui a opção desejada...: ");
    scanf("%i", &opcaoEscolhida);


    switch (opcaoEscolhida) {

    case 1: 

        do
        {
            float nota_1_Aritmetica, nota_2_Aritmetica, mediaNotasAritmeticas;

            opcaoEscolhida = 0;
            desejarSair = 0;

            printf("\nDigite aqui a primeira nota: ");
            scanf("%f", &nota_1_Aritmetica);

            printf("Digite aqui a segunda nota: ");
            scanf("%f", &nota_2_Aritmetica);

            mediaNotasAritmeticas = (nota_1_Aritmetica + nota_2_Aritmetica) / 2; 

            printf("\n\nBem, de acordo com as notas que você digitou - %.2f e %.2f - a média aritmética é igual a: %.2f \n", nota_1_Aritmetica, nota_2_Aritmetica, mediaNotasAritmeticas);

            opcaoEscolhida = 1;
            desejarSair = 1;

         } while (!opcaoEscolhida && !desejaSair);
        break;

    case 2:

}