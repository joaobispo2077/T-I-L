#include <stdio.h>
#include <string.h>

int main() {
	char secretWord[20];

	sprintf(secretWord, "BATATA");

	int hasWon = 0;
	int hasLose = 0;
	
	char luckyWords[26];
	int attempts = 0;

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
	
	char luckyWord;
	printf("\n\nDigite uma letra: ");
	scanf(" %c", &luckyWord);

	luckyWords[attempts] = luckyWord;
	attempts++;

	} while (!hasWon && !hasLose);
	
}