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

 printf("Primeiras operações\n");
  for (i = 0; i < 10; i++) {
    printf("\nNa posição %d do vetA, tem-se: %d\n", i, vetA[i]);
  }

  printf("----------------------------------------------");

  for (i = 0; i < 10; i++) {
    printf("\nNa posição %d do vetB, tem-se: %d\n", i, vetB[i]);
  }

 for ( i=0; i<10; i++ ) {

    while ( vetA[i] > i )  
    {
      vetB[i] = vetA[i];
      vetA[i] = vetA[i]-1;
    }
  }
 printf("Segundas operações\n");

  for (i = 0; i < 10; i++) {
    printf("\nNa posição %d do vetA, tem-se: %d\n", i, vetA[i]);
  }

  printf("----------------------------------------------");

  for (i = 0; i < 10; i++) {
    printf("\nNa posição %d do vetB, tem-se: %d\n", i, vetB[i]);
  }
  
}