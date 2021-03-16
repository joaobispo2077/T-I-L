#include <stdio.h>
#define FourMatrix 4
int main(void)
{
  //[line][column]
  int matrix[3][3] = {{0, 6, 7},
                      {5, 2, 1},
                      {9, 1, 0}};

  int matrixFourXFour[FourMatrix][FourMatrix] = {{0, 6, 7, 6},
                                                 {5, 2, 1, 9},
                                                 {9, 1, 0, 3},
                                                 {4, 1, 0, 3}};

  //reading all values of a matrix
  for (int n = 0; n < FourMatrix; n++)
  {
    for (int m = 0; m < FourMatrix; m++)
    {
      printf("\nLinha: %i | Coluna: %i | Conteudo: %i \n", n, m, matrixFourXFour[n][m]);
    }
  }
  return 0;
}