#include <stdio.h>
#include <stdlib.h>
void copyContent(FILE *original, FILE *copy)
{
  char reader[1000];
  while (fgets(reader, 1000, original) != NULL)
  {
    fputs(reader, copy);
  }
}

int main(void)
{
  void copyContent(FILE * original, FILE * copy);
  FILE *file;
  file = fopen("string.txt", "r");

  if (file == NULL)
  {
    printf("O arquivo nao pode ser aberto\n");
    system("pause");
    exit(0);
  }

  FILE *file2;
  file2 = fopen("string2.txt", "w");

  copyContent(file, file2);

  fclose(file);
  fclose(file2);

  return 0;
}