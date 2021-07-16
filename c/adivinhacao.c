#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <time.h>
#define INFINITY 1

int main() {

    printf("\n\n\n");
    printf("+================================+\n");
    printf("|Bem-vindo ao jogo de advinhacao!|\n");
    printf("+================================+\n");
		
		printf("		|`-.._____..-'|						\n");
    printf("       :  > .  ,  <  :						\n");
    printf("       `./ __`' __ \\,'						\n");
    printf("        | (|_) (|_) |							\n");
    printf("        ; _  .  __  :							\n");
    printf("        `.,' - `-. ,'							\n");
    printf("          `, `_  .'								\n");
    printf("          /       \\								\n");
    printf("         /         :							\n");
    printf("        :          |_							\n");
    printf("       ,|  .    .  | \\						\n");
    printf("      : :   \\   |  |  :						\n");
    printf("      |  \\   :`-;  ;  |						\n");
    printf("      :   :  | /  /   ;						\n");
    printf("       :-.'  ;'  / _,'`------.		\n");
    printf("       `'`''-`'''-'-''--.---  )		\n");
    printf("                        `----'		\n");
    int seconds = time(0);
    srand(seconds);

    int randomNumber = rand();
    int secretNumber = (randomNumber % 100);
    int luckyNumber;
    int attempts = 1;
    int numberOfAttempts = 12;

    int level = 1;

    double points = 1000;
		int won;

    printf("Preparado para tentar a sua sorte?!\n\n");

    printf("+============================================================+\n");
    printf("|             Escolha um nível de dificuldade!               |\n");
    printf("+------------------------------------------------------------+\n");
    printf("| 1 - Fácil (12 tentativas)                                  |\n");
    printf("| 2 - Médio (9 tentativas)                                   |\n");
    printf("| 3 - Difícil (6 tentativas)                                 |\n");
    printf("+============================================================+\n");

    printf("\n\nDigite o número da dificuldade: ");
    scanf("%d", &level);

    switch(level) {
			case 1:
					numberOfAttempts = 12;
					break;

			case 2:
					numberOfAttempts = numberOfAttempts - 3;
					break;
			
			default:
					numberOfAttempts = numberOfAttempts - 6;
					break;
    }

    for(int i = 1; i <= numberOfAttempts; i++) {

			printf("\nTentativa: %d.\n\n", attempts);

			printf("Digite um número para testar a sorte: ");
			scanf("%i", &luckyNumber);

			if (luckyNumber < 0){
					printf("+============================================================+\n");
					printf("|Tá de brincadeira? VOCÊ PRECISA DIGITAR UM NÚMERO POSITIVO! |\n");
					printf("+============================================================+\n");
					printf("\n\n\n\n");
					continue;
			}
			
			printf("\nMacacos me mordam! \nO número que você digitou foi: %i\n\n\n", luckyNumber);

			won = (luckyNumber == secretNumber);
			int isBiggerThan = (luckyNumber > secretNumber);

			if (won) {
					break;
			} else if (isBiggerThan) {       
					printf(".\nO número que você digitou é MAIOR que o número da sorte\n");
			} else {
					printf(".\nO número que você digitou é MENOR que o número da sorte\n");
			}            
			attempts++;

			double lostPoints = (abs(luckyNumber - secretNumber) / (double)2);
			points = points - lostPoints;
    }

		if (won)		{
			printf("Wow, você por acaso é o Albert Einstein? Acertou!\n");
			printf(".\n.\nContinue jogando para treinar sua sorte!\n");

		} else {
			printf("Wow, você tentou e acabou perdendo, que pena!\n");
			printf(".\n.\nNão desista! Continue jogando para treinar sua sorte!\n");
			printf("O número secreto era: %d", secretNumber);
		}
		
    printf("\nO seu número de tentativas foi: %d!\n", attempts);
    printf("\nPontuação: %.1f!\n", points);
    printf("\nFim de jogo!\n");
    
}