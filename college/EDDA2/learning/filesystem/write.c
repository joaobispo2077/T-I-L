#include <stdio.h>

int main(void)
{
  FILE *file;                     //FILE is datatype of file
  file = fopen("TEXTE.TXT", "w"); //opt R, W, A
                                  /* 
  r - read file.
  w - write file.
  a - append file. (update)  add in the end of file
  */

  fprintf(file, "\nTigre Branco");
  fclose(file);

  return 0;
}
