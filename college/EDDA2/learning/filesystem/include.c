#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  FILE *file;
  file = fopen("string.txt", "a"); // file have to exist Hakunah Matata
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
  // coloca texto dentro da ultima linha de arquivo
  fprintf(file, "Nova linha 1\n");

  // coloca string dentro da ultima linha de arquivo
  char phrase[] = "Nova linha 2\n";
  fputs(phrase, file);

  // coloca char dentro da ultima linha de arquivo mas nao possui quebra de linha
  char character = '9';
  fputc(character, file);
  fputc("\n", file);

  fclose(file);
  printf("\n");
  system("pause");
  return 0;
}