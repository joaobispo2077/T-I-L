#include <stdio.h>
// #include <string.h>
int main()
{
  char phrase1[] = {'T', 'i', 'g', 'r', 'e', ' '};
  char phrase2[] = {'B', 'r', 'a', 'n', 'c', 'o'};
  char concatedPhrases[12];

  void concatString(char phrase1[],
                    int lengthPhrase1,
                    char phrase2[],
                    int lengthPhrase2,
                    char concatedPhrases[]);

  concatString(phrase1, 6, phrase2, 6, concatedPhrases);

  for (int i = 0; i < 12; i++)
  {
    printf("%c", concatedPhrases[i]);
  }
}

void concatString(char phrase1[],
                  int lengthPhrase1,
                  char phrase2[],
                  int lengthPhrase2,
                  char concatedPhrases[])
{
  int i, j;

  for (i = 0; i < lengthPhrase1; i++)
  {
    concatedPhrases[i] = phrase1[i];
  }

  for (j = 0; j < lengthPhrase2; j++)
  {
    concatedPhrases[lengthPhrase1 + j] = phrase2[j];
  }
}