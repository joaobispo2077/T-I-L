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

  struct time now; // instanciando estrutura

  now.hours = 16;
  now.minutes = 41;
  now.seconds = 10;

  printf("%i:%i:%i\n", now.hours, now.minutes, now.seconds);

  void showOtherFormats();

  showOtherFormats();
}
// Outras formas de declarar estruturas
// declarando estrutura
struct tempo
{
  int hours;
  int minutes;
  int seconds;
} now = {16, 41, 10};

void showTime(struct tempo cronos)
{
  printf("%i:%i:%i\n", cronos.hours, cronos.minutes, cronos.seconds);
}

void showOtherFormats()
{
  void showTime(struct tempo cronos);

  struct tempo before = {17, 41, 10};
  struct tempo after = {.seconds = 10, .hours = 13, .minutes = 25};

  showTime(now);
  showTime(before);
  showTime(after);
}
