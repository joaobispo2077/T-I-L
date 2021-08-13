#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  FILE *file;
  file = fopen("string.txt", "r"); // file have to exist Hakunah Matata
                                   /* 
  r - read file.
  w - write file.
  a - append file. (update)  add in the end of file
  */
  if (file == NULL)
  {
    printf("O arquivo nao pode ser aberto\n");
    system("pause");
    exit(0);
  }

  char phrase[100];
  //fgets - file get string
  /* le strings ate a quebra de linha e vai para a proxima linha se estiver em um ciclo while */
  while (fgets(phrase, 100, file) != NULL)
  {
    printf("%s", phrase);
  }
  printf("%s", phrase);

  fclose(file);
  printf("\n");
  system("pause");
  return 0;
}