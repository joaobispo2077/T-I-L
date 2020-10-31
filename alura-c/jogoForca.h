void showWelcome();
void tryGuessing(char luckyWords[26], int* givenAttemptsNumber);
int verifyGuesses(char words, char luckyWords[26], int givenAttemptsNumber);
void choiceWord(char secretWord[20]);
void drawnGallows(char secretWord[20], char luckyWords[26], int givenAttemptsNumber);
int handleLose(int givenAttemptsNumber,  char secretWord[20], char luckyWords[26]);
int handleWon(char secretWord[20], char luckyWords[26], int givenAttemptsNumber);
void createWord();
