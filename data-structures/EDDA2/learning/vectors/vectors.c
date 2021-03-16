#include <stdio.h>
#define NOTES_NUMBER 5
int main()
{
  float notes[NOTES_NUMBER] = {10, 2};
  float average;
  float totalNotes;

  for (int i = 0; i != NOTES_NUMBER; i++)
  {
    printf("\nDigite a nota de numero %d: ", i + 1);
    scanf("%f", &notes[i]);
    totalNotes += notes[i];
  }

  for (int i = 0; i != NOTES_NUMBER; i++)
  {
    printf("\nA nota de numero %d eh %f", i, notes[i]);
  }

  average = totalNotes / NOTES_NUMBER;
  printf("\nA media eh %.1f", average);
}