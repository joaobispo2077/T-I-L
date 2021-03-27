#include <stdio.h>

struct DOCTOR
{
  char name[20];
  int age;
  char crm[9]
};

int main(void)
{
  struct DOCTOR person;

  int numbers[100];

  printf("%li\n", sizeof(numbers));
  printf("%li\n", sizeof(person));
  printf("%li\n", sizeof(double));
  printf("%li\n", sizeof(short));
  return 0;
}