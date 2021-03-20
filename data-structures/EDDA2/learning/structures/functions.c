#include <stdio.h>

// declarando estrutura
struct time
{
  int hours;
  int minutes;
  int seconds;
};

int main()
{
  void showTime(struct time cronos);

  struct time now; // instanciando estrutura

  now.hours = 16;
  now.minutes = 41;
  now.seconds = 10;

  showTime(now);
}

void showTime(struct time cronos)
{
  printf("%i:%i:%i\n", cronos.hours, cronos.minutes, cronos.seconds);
}