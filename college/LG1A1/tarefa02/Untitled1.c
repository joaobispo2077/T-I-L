#include <stdio.h>
#include <stdlib.h>

 int main() {
  char option[1];

    print("Digite a sua op��o: \n a = saldo \n b = deposito \n c = pagamentos \n d = transferencias \n e = sair");
    scanf("%c", &option);

    switch(option){
    case 'a':
        printf("Opera��o: Saldo");
        break;

        case 'b':
        printf("Opera��o: Deposito");
        break;

            case 'c':
        printf("Opera��o: pagamentos");
        break;

            case 'd':
        printf("Opera��o: transferencias");
        break;

            case 'e':
        printf("Opera��o: sair");
        break;

            default:
                printf("Opcao invalida");
                break;

    }
}
