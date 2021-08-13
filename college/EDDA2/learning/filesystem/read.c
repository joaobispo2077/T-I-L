#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  FILE *file;
  file = fopen("numero.md", "r"); // file have to exist Hakunah Matata
                                  /* 
  r - read file.
  w - write file.
  a - append file. (update)  add in the end of file
  */
  if (file == NULL)
  {
    printf("O arquivo nao pode ser aberto");
    system("pause");
    return 0;
  }
  int x, y, z;

  fscanf(file, "%i %i %i", &x, &y, &z);
  fclose(file);
  printf("%i %i %i", x, y, z);

  return 0;
}