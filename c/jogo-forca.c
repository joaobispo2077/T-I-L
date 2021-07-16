#include <stdio.h>
#include <string.h>
#include <time.h>
#include <stdlib.h>
#include "jogoForca.h"

void showWelcome() {
	printf("+------------------------------+\n");
	printf("|Bem-vindo ao jogo da forca =D!|\n");
	printf("+------------------------------+\n\n");
}

void tryGuessing(char luckyWords[26], int* givenAttemptsNumber) {
	char luckyWord;
	printf("\n\nDigite uma letra: ");
	scanf(" %c", &luckyWord);

	luckyWords[(*givenAttemptsNumber)] = luckyWord;
	(*givenAttemptsNumber)++;
}

int verifyGuesses(char words, char luckyWords[26], int givenAttemptsNumber) {
	int hasFind = 0;

	for (int j = 0; j < givenAttemptsNumber; j++) {
		if (luckyWords[j] == words) {
			hasFind = 1;
			break;
		}
	}

	return hasFind;
}

void choiceWord(char secretWord[20]) {
	FILE* f;

	f = fopen("words.txt", "r");

	if (f == 0){
		printf("Nao foi possivel acessar a base de dados =c \n\n");
		exit(1);
	}

	int wordNumber;
	fscanf(f, "%d", &wordNumber);

	srand(time(0));
	int randomNumber = rand() % wordNumber;

	for (int i = 0; i < randomNumber; i++) {
		fscanf(f, "%s", secretWord);
	}

	fclose(f);	
}

void drawnGallows(char secretWord[20], char luckyWords[26], int givenAttemptsNumber) {
		for (int i = 0; i < strlen(secretWord); i++){

			int hasFind = verifyGuesses(secretWord[i],	luckyWords, givenAttemptsNumber);

			if(hasFind) {
				printf(" %c ", secretWord[i]);
			} else {
				printf(" _ ");
			}
		
	}	
}

int handleLose(int givenAttemptsNumber,  char secretWord[20], char luckyWords[26]) {
	int errors = 0;

	for (int i = 0; i < givenAttemptsNumber; i++) {
		int isExist = 0;

		for (int j = 0; j < givenAttemptsNumber; j++) {
			if (luckyWords[i] == secretWord[j]) {
				isExist = 1;
			}			
		}

		if (!isExist) errors++;
		
	}

	return errors >= 5;
}

int handleWon(char secretWord[20], char luckyWords[26], int givenAttemptsNumber) {
	for(int i = 0; i < strlen(secretWord); i++) {
		if (!verifyGuesses(secretWord[i], luckyWords, givenAttemptsNumber)){
			return 0;
		}
		
	}
	return 1;

}

void createWord() {
	char intetion;
	printf("Você quer adicionar uma nova palavra? (S/N): ");
	scanf(" %c", &intetion);

	if (intetion == 'S') {

		char newWord[20];
		printf("Qual a nova Palavra: ");
		scanf("%s", newWord);

		FILE* f;

		f = fopen("words.txt", "r+");

		if (f == 0) {
			printf("Nao foi possivel acessar a base de dados =c \n\n");
			exit(1);
		}
		
		int quantity;
		fscanf(f, "%d", &quantity);
		quantity++;

		fseek(f, 0, SEEK_SET);
		fprintf(f, "%d", quantity);

		fseek(f, 0, SEEK_END);
		fprintf(f, "\n%s", newWord);

		fclose(f);
	}
}

int main() {
	char secretWord[20];

	choiceWord(secretWord);

	int hasWon = 0;
	int hasLose = 0;
	
	char luckyWords[26];
	int givenAttemptsNumber = 0;

	showWelcome();

	do{
		drawnGallows(secretWord, luckyWords, givenAttemptsNumber);

		tryGuessing(luckyWords, &givenAttemptsNumber);

		hasLose = handleLose(givenAttemptsNumber, secretWord, luckyWords);
		hasWon = handleWon(secretWord, luckyWords, givenAttemptsNumber);
	} while (!hasWon && !hasLose);
	createWord();
}