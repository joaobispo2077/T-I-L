#include <stdio.h>
// Ordena números no vetor
int main(void)
{
  int vector[10] = {3, 6, 4, 9, 20, 2, 1, 0, 7, 6};
  int i;
  void toAscendingOrder(int vector[], int len);

  toAscendingOrder(vector, 10);

  for (i = 0; i < 10; i++)
  {
    printf(" %i ", vector[i]);
  }
  return 0;
}

void toAscendingOrder(int vector[], int len)
{
  int i, j, temp;

  for (i = 0; i < len; i++)
  {

    for (j = i + 1; j < len; j++)
    {
      if (vector[i] > vector[j])
      {
        temp = vector[i];

        vector[i] = vector[j];
        vector[j] = temp;
      }
    }
  }
}