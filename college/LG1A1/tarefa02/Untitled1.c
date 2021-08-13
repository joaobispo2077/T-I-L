#include <stdio.h>
#include <stdlib.h>

 int main() {
  char option[1];

    print("Digite a sua opção: \n a = saldo \n b = deposito \n c = pagamentos \n d = transferencias \n e = sair");
    scanf("%c", &option);

    switch(option){
    case 'a':
        printf("Operação: Saldo");
        break;

        case 'b':
        printf("Operação: Deposito");
        break;

            case 'c':
        printf("Operação: pagamentos");
        break;

            case 'd':
        printf("Operação: transferencias");
        break;

            case 'e':
        printf("Operação: sair");
        break;

            default:
                printf("Opcao invalida");
                break;

    }
}
