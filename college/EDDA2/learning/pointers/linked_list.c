#include <stdio.h>
#include <locale.h>
void main()
{
  setlocale(LC_ALL, "Portuguese");

  struct LIST
  {
    int value;
    struct LIST *next;
  };

  struct LIST node1, node2, node3;

  struct LIST *hook = &node1;

  node1.value = 10;
  node2.value = 120;
  node3.value = 130;

  node1.next = &node2;
  node2.next = &node3;
  node3.next = (struct LIST *)0;

  while (hook != (struct LIST *)0)
  {
    printf("%i\n", hook->value);
    hook = hook->next;
  }
}