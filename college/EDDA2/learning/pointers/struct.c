#include <stdio.h>

void main()
{

  struct TIME
  {
    int hour;
    int minute;
    int second;
  };

  struct TIME now, *after;
  after = &now;

  // (*after).hour = 13;
  // (*after).minute = 13;
  // (*after).second = 13;
  after->hour = 24;
  after->minute = 18;
  after->second = 8;

  struct TIME moment, *before;
  before = &moment;

  int minusTime = 8;

  moment.hour = after->hour - minusTime;
  moment.minute = now.minute - minusTime;
  moment.second = ((after->second * 2) - minusTime);

  printf("\n\n%i:%i:%i", now.hour, now.minute, now.second);
  printf("\n\n%i:%i:%i", moment.hour, moment.minute, moment.second);
}