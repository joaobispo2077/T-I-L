#include <stdio.h>

int main()
{
  int matrix[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
  void showMatrix(int matrix[3][3]);

  showMatrix(matrix);
  return 0;
}

void showMatrix(int matrix[3][3])
{
  int i, j;

  for (i = 0; i < 3; i++)
  {
    for (j = 0; j < 3; j++)
    {
      printf("%i ", matrix[i][j]);
    }
  }
}