#include <stdio.h>
#include <string.h>

int main() {
	char secretWord[20];

	sprintf(secretWord, "BATATA");

	int hasWon = 0;
	int hasLose = 1;

	do{

		char luckyWord;
		printf("Digite uma letra: ");
		scanf("%c", &luckyWord);

		for (int i = 0; i < strlen(secretWord); i++){
			if (secretWord[i] == luckyWord){
				printf("Acertou! Essa letra está na posição %i\n", i);
			}
			
		}
		

	} while (!hasWon && !hasLose);
	
}