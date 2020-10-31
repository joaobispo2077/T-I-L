#include <stdio.h>
#include <string.h>

void showWelcome() {
	printf("+------------------------------+\n");
	printf("|Bem-vindo ao jogo da forca =D!|\n");
	printf("+------------------------------+\n\n");
}

void tryGuessing(char luckyWords[26], int* attempts) {
	char luckyWord;
	printf("\n\nDigite uma letra: ");
	scanf(" %c", &luckyWord);

	luckyWords[(*attempts)] = luckyWord;
	(*attempts)++;
}

int verifyGuesses(char words, char luckyWords[26], int attempts) {
	int hasFind = 0;

	for (int j = 0; j < attempts; j++) {
		if (luckyWords[j] == words) {
			hasFind = 1;
			break;
		}
	}

	return hasFind;
}

void choiceWord(char secretWord[20]) {
	sprintf(secretWord, "BATATA");
}

void drawnGallows(char secretWord[20], char luckyWords[26], int attempts) {
		for (int i = 0; i < strlen(secretWord); i++){

			int hasFind = verifyGuesses(secretWord[i],	luckyWords, attempts);

			if(hasFind) {
				printf(" %c ", secretWord[i]);
			} else {
				printf(" _ ");
			}
		
	}	
}

int handleLose(int attempts,  char secretWord[20], char luckyWords[26]) {
	int errors = 0;

	for (int i = 0; i < attempts; i++) {
		int isExist = 0;

		for (int j = 0; j < attempts; j++) {
			if (luckyWords[i] == secretWord[j]) {
				isExist = 1;
			}			
		}

		if (!isExist) errors++;
		
	}

	return errors >= 5;
}

int main() {
	char secretWord[20];

	choiceWord(secretWord);

	int hasWon = 0;
	int hasLose = 0;
	
	char luckyWords[26];
	int attempts = 0;

	showWelcome();

	do{
		drawnGallows(secretWord, luckyWords, attempts);

		tryGuessing(luckyWords, &attempts);

		hasLose = handleLose(attempts, secretWord, luckyWords);
	} while (!hasWon && !hasLose);
	
}