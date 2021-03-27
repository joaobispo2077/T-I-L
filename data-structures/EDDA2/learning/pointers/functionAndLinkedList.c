#include <stdio.h>
#include <locale.h>

struct LIST
{
  int value;
  struct LIST *next;
};

struct LIST *findValueInLinkedList(struct LIST *pList, int value)
{
  while (pList != (struct LIST *)0)
  {
    if (pList->value == value)
    {
      return (pList);
    }
    else
    {
      pList = pList->next;
    }
  }

  return (struct LIST *)0;
}

void main()
{
  setlocale(LC_ALL, "Portuguese");
  struct LIST *findValueInLinkedList(struct LIST * pList, int value);

  struct LIST node1, node2, node3;

  struct LIST *hook = &node1, *result;

  node1.value = 10;
  node2.value = 120;
  node3.value = 130;

  node1.next = &node2;
  node2.next = &node3;
  node3.next = (struct LIST *)0;

  int value;
  printf("Digite o valor que você acha que existe na lista");
  scanf("%i", &value);

  result = findValueInLinkedList(hook, value);

  if (result == (struct LIST *)0)
  {
    printf("Valor nao encontrado");
  }
  else
  {
    printf("Valor %i encontrado", result->value);
  }
}