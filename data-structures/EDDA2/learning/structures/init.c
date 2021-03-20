#include <stdio.h>

int main()
{
  // declarando estrutura
  struct time
  {
    int hours;
    int minutes;
    int seconds;
  };

  struct time now; // instanciando estrutura

  now.hours = 16;
  now.minutes = 41;
  now.seconds = 10;

  printf("%i:%i:%i\n", now.hours, now.minutes, now.seconds);
}