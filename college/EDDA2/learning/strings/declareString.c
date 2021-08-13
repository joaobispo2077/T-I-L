#include <stdio.h>

int main()
{
  char world[6] = {'B', 'r', 'a', 's', 'i', 'l'};
  char world2[] = {'B', 'r', 'a', 's', 'i', 'l'};
  char world3[7] = {"Brasil"};
  char world4[] = {"Brasil"};
  char world5[] = "Brasil";

  printf("%s \n", world);
  printf("%s \n", world2);
  printf("%s \n", world3);
  printf("%s \n", world4);
  printf("%s \n", world5);
}