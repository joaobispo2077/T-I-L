#include <stdio.h>

 int i, vetA[10], vetB[10];
 int main() {

  for ( i=0; i<10; i++ ) { 
    vetB[i] = 0;

    if ( i%2 == 0 )
      vetA[i] = i;
    else
    vetA[i] = 2 * i;
 }

 for ( i=0; i<10; i++ ) {

    while ( vetA[i] > i )  
    {
      vetB[i] = vetA[i];
      vetA[i] = vetA[i]-1;
    }
  }
  printf("\n------ Imprimindo vetores Invertidos ------\n");
  printf("\n------ Vetor A Invertido ------\n");

    for (i = 9; i > -1; i--) {
      printf("\nNa posicao %d do vetA, tem-se o numero invertido: %d\n", i, vetA[i]);
    }

  printf("\n----------------------------------------------\n");
  printf("\n------ Vetor B Invertido ------\n");

    for (i = 9; i != -1; i--) {
      printf("\nNa posicao %d do vetB, tem-se o numero invertido: %d\n", i, vetB[i]);
    }
  
}