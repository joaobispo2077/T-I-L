#include <stdio.h>
#include <string.h>

void showWelcome() {
	printf("+------------------------------+\n");
	printf("|Bem-vindo ao jogo da forca =D!|\n");
	printf("+------------------------------+\n\n");
}

void tryGuessing(char luckyWords[26], int attempts) {
	char luckyWord;
	printf("\n\nDigite uma letra: ");
	scanf(" %c", &luckyWord);

	luckyWords[attempts] = luckyWord;
}

int main() {
	char secretWord[20];

	sprintf(secretWord, "BATATA");

	int hasWon = 0;
	int hasLose = 0;
	
	char luckyWords[26];
	int attempts = 0;

	showWelcome();

	do{
		
	for (int i = 0; i < strlen(secretWord); i++){
		int hasFind = 0;

		for (int j = 0; j < attempts; j++) {
			if (luckyWords[j] == secretWord[i]) {
				hasFind = 1;
				break;
			}
		}

			if(hasFind) {
				printf(" %c ", secretWord[i]);
			} else {
				printf(" _ ");
			}
		
	}	
	
	tryGuessing(luckyWords, attempts);
	attempts++;

	} while (!hasWon && !hasLose);
	
}