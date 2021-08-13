#include <stdio.h>
#include <string.h>
#define QUANTIDADE_REGISTROS 10

void flush_in(){ 
int ch;
while( (ch = fgetc(stdin)) != EOF && ch != '\n' ){} 
}

int main() {

      struct tipo_registro {
        char  nome_completo[30];
        int   idade;
        char  endereco[50];
        float salario;
        int   filhos; 
    };

    struct tipo_registro cadastro_fichas[QUANTIDADE_REGISTROS];
 

    int i; 
    char linha[100];

    printf("\n\n---------- Cadastro de Fichas ----------\n\n");
    printf("Digite sem espacos. Separando as informacoes por hifen!");

    //contrói ficha

    for(i = 0; i < QUANTIDADE_REGISTROS; i++) {

        printf("\n\nDigite os dados do %d° funcionario\n\n", i+1);

        printf("Nome completo: ");
        scanf("%30[^\n]", cadastro_fichas[i].nome_completo);
        flush_in();

        printf("\nEndereco: ");
        scanf("%50[^\n]", cadastro_fichas[i].endereco);
        flush_in();

        printf("\nIdade: ");
        scanf("%d", &cadastro_fichas[i].idade);

        printf("\nSalario: ");
        scanf("%f", &cadastro_fichas[i].salario);

        printf("\nQuantidade de filhos: ");
        scanf("%d", &cadastro_fichas[i].filhos);
    }

    //exibe dados inseridos

      printf("\n\n---------- Saída de dados ----------\n\n");

    for(i = 0; i < QUANTIDADE_REGISTROS; i++){
        printf("Nome completo: %s", cadastro_fichas[i].nome_completo);
        printf("\nEndereco: %s", cadastro_fichas[i].endereco);
        printf("\nIdade: %d", cadastro_fichas[i].idade);
        printf("\nSalario: %.2f", cadastro_fichas[i].salario);
        printf("\nQuantidade de filhos: %d\n", cadastro_fichas[i].filhos);
    }

}