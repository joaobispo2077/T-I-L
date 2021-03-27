#include <stdio.h>

void main()
{
  struct CRONOS
  {
    int *hour;
    int *minute;
    int *second;
  };

  struct CRONOS now;

  int hour = 10;
  int minute = 0;
  int second = 15;

  now.hour = &hour;
  now.minute = &minute;
  now.second = &second;

  printf("\n\n%i:%i:%i", *now.hour, *now.minute, *now.second);

  *now.second = 27;
  printf("\n\n%i:%i:%i", *now.hour, *now.minute, *now.second);
}