#include <stdio.h>
#define TIMES_LENGTH 2
struct time
{
  int hours;
  int minutes;
  int seconds;
};

int main(void)
{
  struct time clocks[5];
  void createTimes(struct time cronos[TIMES_LENGTH]);
  void showTimes(struct time cronos[TIMES_LENGTH]);

  createTimes(clocks);
  showTimes(clocks);
}

void createTimes(struct time cronos[])
{
  struct time createTime(struct time clock, int actualClock);

  for (int i = 0; i < TIMES_LENGTH; i++)
  {
    cronos[i] = createTime(cronos[i], i + 1);
  }
}

struct time createTime(struct time cronos, int actualCrono)
{
  printf("\n\n-- Adicionado horario %i --\n", actualCrono);
  printf("\n Digite uma hora do dia: ");
  scanf("%i", &cronos.hours);
  printf("\n Digite um minuto dessa hora: ");
  scanf("%i", &cronos.minutes);
  printf("\n Digite uma segundo desse minuto: ");
  scanf("%i", &cronos.seconds);
  return cronos;
}

void showTimes(struct time cronos[])
{
  void showTime(struct time clock, int actualClock);

  printf("\nOs horarios digitados foram:");

  for (int i = 0; i < TIMES_LENGTH; i++)
  {
    showTime(cronos[i], i + 1);
  }
}

void showTime(struct time cronos, int actualClock)
{
  printf("\n %i - %i:%i:%i", actualClock, cronos.hours, cronos.minutes, cronos.seconds);
}