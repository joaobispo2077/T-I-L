#include <stdio.h>

struct time
{
  int hours;
  int minutes;
  int seconds;
};

int main()
{
  void showTime(struct time cronos);

  struct time times[3] = {{12, 10, 15}, {16, 30, 10}, {15, 41, 20}};

  for (int i = 0; i < 3; i++)
  {
    showTime(times[i]);
  }
}

void showTime(struct time cronos)
{
  printf("%i:%i:%i\n", cronos.hours, cronos.minutes, cronos.seconds);
}