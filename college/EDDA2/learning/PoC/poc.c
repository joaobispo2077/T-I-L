/*****************************************************************************
usaAlgumaEstruturaDeDados.c
Este programa interage com o usuário para gerenciar uma ESTRUTURA DE DADOS.
******************************************************************************/
/*-----------------------------Bibliotecas------------------------------------*/
#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#include <string.h>
#include <malloc.h>
#include <locale.h>
/*--------------------------Constantes pré-definidas--------------------------*/
#define ERRO -1
#define true 1
#define false 0

/*--------------------Tipos de dados definidos pelo programador---------------*/
typedef int bool;
typedef int TIPOCHAVE;

typedef struct tempRegistro
{
  TIPOCHAVE chave;
  struct tempRegistro *prox;
} REGISTRO;

typedef REGISTRO *PONT;

typedef struct
{
  PONT inicio;
} LISTA;

typedef LISTA ESTRUTURA;

/*-----------------------------Criação das funções----------------------------*/

void inicializarLista(LISTA *l)
{
  l->inicio = NULL;
}

void salvaDados(ESTRUTURA *l)
{
  {
    PONT end = l->inicio;
    if (end == NULL)
      printf("Nada a salvar.");

    FILE *f;
    f = fopen("ESTRUTURA.DAT", "w");
    while (end != NULL)
    {
      fprintf(f, "%d\n", end->chave);

      end = end->prox;
    }
    fclose(f);
  }
}

void exibirLista(LISTA *l)
{
  PONT end = l->inicio;
  printf("Estrutura:\n");
  while (end != NULL)
  {
    printf("\n%d ", end->chave); // lembrando TIPOCHAVE = int
    end = end->prox;
  }
  printf("\n");
}

int tamanho(LISTA *l)
{
  PONT end = l->inicio;
  int tam = 0;
  while (end != NULL)
  {
    tam++;
    end = end->prox;
  }
  return tam;
}

int tamanhoEmBytes(LISTA *l)
{
  return (tamanho(l) * sizeof(REGISTRO));
}

PONT buscaSeq(TIPOCHAVE ch, LISTA *l)
{
  PONT pos = l->inicio;
  while (pos != NULL)
  {
    if (pos->chave == ch)
      return pos;
    pos = pos->prox;
  }
  return NULL;
}

PONT buscaSeqExc(TIPOCHAVE ch, LISTA *l, PONT *ant)
{
  *ant = NULL;
  PONT pos = l->inicio;
  while ((pos != NULL) && (pos->chave < ch))
  {
    *ant = pos;
    pos = pos->prox;
  }
  if ((pos != NULL) && (pos->chave == ch))
    return pos;
  return NULL;
}

bool excluirElemLista(TIPOCHAVE ch, LISTA *l)
{
  PONT ant, i;
  i = buscaSeqExc(ch, l, &ant);
  if (i == NULL)
    return false;
  if (ant == NULL)
    l->inicio = i->prox;
  else
    ant->prox = i->prox;
  free(i);
  return true;
}

void destruirLista(LISTA *l)
{
  PONT end = l->inicio;
  while (end != NULL)
  {
    PONT apagar = end;
    end = end->prox;
    free(apagar);
  }
  l->inicio = NULL;
}

bool inserirElemListaOrd(REGISTRO reg, LISTA *l)
{
  TIPOCHAVE ch = reg.chave;
  PONT ant, i;
  i = buscaSeqExc(ch, l, &ant);
  if (i != NULL)
    return false;
  i = (PONT)malloc(sizeof(REGISTRO));
  *i = reg;
  if (ant == NULL)
  {
    i->prox = l->inicio;
    l->inicio = i;
  }
  else
  {
    i->prox = ant->prox;
    ant->prox = i;
  }
  return true;
}

PONT retornarPrimeiro(LISTA *l, TIPOCHAVE *ch)
{
  if (l->inicio != NULL)
    *ch = l->inicio->chave;
  return l->inicio;
}

PONT retornarUltimo(LISTA *l, TIPOCHAVE *ch)
{
  PONT ultimo = l->inicio;
  if (l->inicio == NULL)
    return NULL;
  while (ultimo->prox != NULL)
    ultimo = ultimo->prox;
  *ch = ultimo->chave;
  return ultimo;
}

void inicializarESTRUTURA(ESTRUTURA *l)
{
  inicializarLista(l);
  insereDefault(l);
}

void exibirESTRUTURA(ESTRUTURA *l)
{
  exibirLista(l);
}

int tamanhoESTRUTURA(ESTRUTURA *l)
{
  return tamanho(l);
}

int tamanhoEmBytesESTRUTURA(ESTRUTURA *l)
{
  return tamanhoEmBytes(l);
}

PONT buscaESTRUTURA(ESTRUTURA *l)
{
  return l->inicio;
}

void destruirESTRUTURA(ESTRUTURA *l)
{
  destruirLista(l);
}

bool inserirElementoESTRUTURA(REGISTRO reg, ESTRUTURA *l)
{
  PONT novo = (PONT)malloc(sizeof(REGISTRO));
  if (novo == NULL)
    return false;
  novo->chave = reg.chave;
  novo->prox = l->inicio;
  l->inicio = novo;
  return true;
}

bool excluirElementoESTRUTURA(ESTRUTURA *l, REGISTRO *reg)
{
  if (l->inicio == NULL)
    return false;
  *reg = *l->inicio;
  PONT apagar = l->inicio;
  l->inicio = apagar->prox;
  free(apagar);
  return true;
}

PONT retornarDaESTRUTURA(ESTRUTURA *l, TIPOCHAVE *ch)
{
  return retornarPrimeiro(l, ch);
}

void inserir(ESTRUTURA *l)
{
  TIPOCHAVE ch;
  printf("\nForneça o elemento: ");
  fflush(stdin);
  scanf("%d", &ch);
  REGISTRO reg;
  reg.chave = ch;
  if (inserirElementoESTRUTURA(reg, l))
    printf("Elemento [%d] inserido corretamente.\n", ch);
  else
    printf("Não foi possível inserir elemento [%d].\n", ch);
}

void exibirEspecificoDaESTRUTURA(ESTRUTURA *l)
{
  TIPOCHAVE ch;
  PONT posicao = retornarDaESTRUTURA(l, &ch);
  if (posicao != NULL)
    printf("Específico da ESTRUTURA elemento [%d] encontrado no endereço [%p].\n", ch, posicao);
  else
    printf("Não foi possível encontrar o específico da ESTRUTURA (ESTRUTURA vazia).\n");
}

void excluir(ESTRUTURA *l)
{
  REGISTRO reg;
  if (excluirElementoESTRUTURA(l, &reg))
    printf("Elemento [%d] excluído corretamente.\n", reg.chave);
  else
    printf("Não foi possível excluir elemento - ESTRUTURA vazia.\n");
}

void exibir(ESTRUTURA *l)
{
  exibirESTRUTURA(l);
}

void meuLog(ESTRUTURA *l)
{
  printf("Número de elementos na ESTRUTURA: %d.\n", tamanhoESTRUTURA(l));
  printf("Tamanho da ESTRUTURA (em bytes): %d.\n", tamanhoEmBytesESTRUTURA(l));
}

void help()
{
  printf("Comandos válidos: \n");
  printf("   i <chave1>: inserir elemento com chave=chave1 na ESTRUTURA\n");
  printf("   e : excluir elemento da ESTRUTURA\n");
  printf("   m : imprimir ESTRUTURA\n");
  printf("   d : destruir (zerar) ESTRUTURA\n");
  printf("   l : exibir log de utilização da ESTRUTURA\n");
  printf("   h : exibir esta mensagem de ajuda\n");
  printf("   x : exibir a chave e o endereço do elemento específico\n");
}

void destruir(ESTRUTURA *l)
{
  destruirESTRUTURA(l);
  printf("ESTRUTURA vazia.\n");
}

void msgErro(void)
{
  system("cls");
  printf("ERRO");
  getch();
}
void insereDefault(ESTRUTURA *l)
{
  int valoresIniciais[9] = {100, 200, 300, 400, 500, 600, 700, 800, 900};

  for (int i = 0; i < 9; i++)
  {
    REGISTRO reg;
    reg.chave = valoresIniciais[i];
    if (inserirElementoESTRUTURA(reg, l))
      printf("Elemento [%i] inserido corretamente.\n", valoresIniciais[i]);
    else
      printf("Não foi possível inserir elemento [%i].\n", valoresIniciais[i]);
  }
}

/*-----------------------------CORPO DO PROGRAMA------------------------------*/
int main()
{
  ESTRUTURA e;
  inicializarESTRUTURA(&e);
  char comando = '*';
  setlocale(LC_ALL, "");
  while (comando != 's')
  {
    system("cls");
    printf("\n=========================");
    printf("\nAlguma estrutura de dados");
    printf("\n=========================");
    printf("\n i = inserir      		");
    printf("\n e = excluir      		");
    printf("\n m = mostrar      		");
    printf("\n d = destruir     		");
    printf("\n l = log          		");
    printf("\n h = help         		");
    printf("\n x = mostrar específico 	");
    printf("\n s = sair         		");
    printf("\n=========================");
    printf("\n Escolha: ");
    fflush(stdin);
    comando = getche();
    system("cls");
    switch (comando)
    {
    case 'i':
      inserir(&e);
      break;
    case 'e':
      excluir(&e);
      break;
    case 'm':
      exibir(&e);
      break;
    case 'd':
      destruir(&e);
      break;
    case 'l':
      meuLog(&e);
      break;
    case 'h':
      help();
      break;
    case 'x':
      exibirEspecificoDaESTRUTURA(&e);
      break;
    case 's':
      exit(0);
      break;
    default:
      msgErro();
      break;
    }
    getch();
  }
  return 0;
}
