#include <stdio.h>
#define QUANTIDADE_DE_NUMEROS 15

int lerNumero();
int lerTodosNumeros(int numeros[QUANTIDADE_DE_NUMEROS]);
int descobrirMaiorNumero(int numeros[QUANTIDADE_DE_NUMEROS]);
int descobrirMenorNumero(int numeros[QUANTIDADE_DE_NUMEROS]);
int multiplicaMenorPeloMaior(int menorNumero, int maiorNumero);
void exibeOperacao(int menorNumero, int maiorNumero, int resultadoMultiplicacao);

int lerNumero() { 
    int numero;
    printf("\nDigite o numero: ");
    scanf("%d", &numero);

  return numero;
}

int lerTodosNumeros(int numeros[QUANTIDADE_DE_NUMEROS]) {
  for (int i = 0; i < QUANTIDADE_DE_NUMEROS; i++)  {
  printf("\n---- %dº Numero ----\n", i + 1);
  numeros[i] = lerNumero();
}

  return *numeros;
}

int descobrirMaiorNumero(int numeros[QUANTIDADE_DE_NUMEROS]) {
  int maiorNumero = 0;
  
  for (int i = 0; i < QUANTIDADE_DE_NUMEROS; i++) {
    
    int ehMenorQueALista = (maiorNumero < numeros[i]);

    if (ehMenorQueALista) {
      maiorNumero = numeros[i];
    }
  }

  return maiorNumero;
}

int descobrirMenorNumero(int numeros[QUANTIDADE_DE_NUMEROS]) {
  int menorNumero = 0;
  
  for (int i = 0; i < QUANTIDADE_DE_NUMEROS; i++) {

    int ehMaiorQueALista = (menorNumero > numeros[i]);

    int ehIgualAZero = (menorNumero == 0);

    if (ehMaiorQueALista || ehIgualAZero)  {
      menorNumero = numeros[i];
    }
  }

  return menorNumero;
}

int multiplicaMenorPeloMaior(int menorNumero, int maiorNumero) {
  int resultado = menorNumero * maiorNumero;
  return resultado;
}

void exibeOperacao(int menorNumero, int maiorNumero, int resultadoMultiplicacao) {
  printf("\n\n\nO menor numero digitado: [%d] \nmultiplicado pelo maior numero digitado: [%d] \neh igual a: [%d]\n\n\n", menorNumero, maiorNumero, resultadoMultiplicacao);
}

int main() {
  int numeros[QUANTIDADE_DE_NUMEROS];

  *numeros = lerTodosNumeros(numeros);

  int maiorNumero = descobrirMaiorNumero(numeros);  

  int menorNumero = descobrirMenorNumero(numeros);
  
  int resultadoMultiplicacao = multiplicaMenorPeloMaior(menorNumero, maiorNumero);

  exibeOperacao(menorNumero, maiorNumero, resultadoMultiplicacao);

 }