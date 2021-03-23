#include <stdio.h>

int main(void)
{
  void isAlphabetic(char word);

  char word[20];

  printf("Digite uma palavra: ");
  scanf("%s", word);

  int i = 0;
  while (word[i] != '\0')
  {
    isAlphabetic(word[i]);
    i++;
  }

  system("pause");
  return 0;
}

void isAlphabetic(char word)
{
  if ((word >= 'a' && word <= 'z') || (word >= 'A' && word <= 'Z'))
  {
    printf("\n%c eh uma letra do alfabeto", word);
  }
  else
  {
    printf("\nnao %c eh uma letra do alfabeto", word);
  }
}