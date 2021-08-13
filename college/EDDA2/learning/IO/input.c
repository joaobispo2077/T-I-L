#include <stdio.h>

int main()
{
  char text[100];

  // fgets(text, 100, stdin); //read x - 1 caracteres, in this case 99, in the last use \0
  // printf("%s\n", text);

  // system("pause");

  freopen("D:\\vitor\\Estudo\\src\\www\\T-I-L\\data-structures\\EDDA2\\earning\\IO\\string2.txt", "r", stdin);
  fgets(text, 100, stdin);
  printf("%s\n", text);

  system("pause");
  return 0;
}