#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ARRAY_SIZE 15

void swap(char **first, char **second);
void print(char **array, const int arraySize);
void heapSort(char **a);
void makeHeap(char **a);
void siftDown(char **a, int node, int size);

int main()
{

  char **someArray;

  someArray = (char **)calloc(sizeof(char **), ARRAY_SIZE);
  if (someArray == NULL)
  {
    printf("Error allocating filename array\n");
    exit(1);
  }

  someArray[0] = "M";
  someArray[1] = "I";
  someArray[2] = "C";
  someArray[3] = "R";
  someArray[4] = "O";
  someArray[5] = "C";
  someArray[6] = "O";
  someArray[7] = "M";
  someArray[8] = "P";
  someArray[9] = "U";
  someArray[10] = "T";
  someArray[11] = "A";
  someArray[12] = "D";
  someArray[13] = "O";
  someArray[14] = "R";
  heapSort(someArray);
  print(someArray, ARRAY_SIZE);
  free(someArray);
  system("PAUSE");
  return 0;
}

void swap(char **first, char **second)
{
  char *temp = *first;
  *first = *second;
  *second = temp;
}

void print(char **array, const int arraySize)
{
  int i;
  for (i = 0; i < arraySize; i++)
    printf("%s ", array[i]);
}

void siftDown(char **a, int node, int size)
{
  while (2 * node + 1 < size)
  {
    int largest = node;
    //If the child has a sibling and the child's value is less than its sibling's
    if (*a[largest] < *a[2 * node + 1])
      largest = 2 * node + 1;
    if (2 * node + 2 < size &&
        *a[largest] < *a[2 * node + 2])
      largest = 2 * node + 2;

    if (*a[node] < *a[largest])
    { //out of max-heap order
      swap(&a[node], &a[largest]);
      node = largest;
    }
    else
      break;
  }
}

void makeHeap(char **a)
//This function will play a in a max-heap order.
//The shiftDown function is called.
{
  int i;
  for (i = ARRAY_SIZE / 2; i >= 0; --i)
    siftDown(a, i, ARRAY_SIZE);
}

void heapSort(char **a)
//This function will sort the values using heap
//sort. makeHeap and shiftDown functions are called.
{
  int size;
  makeHeap(a); //first place a in max-heap order
  size = ARRAY_SIZE;

  while (size != 1)
  { //swap the root(maximum value) of the heap with the last element of the heap
    swap(&a[0], &a[size - 1]);
    //decrease the size of the heap by one so that the previous max value will
    //stay in its proper placement
    --size;
    siftDown(a, 0, size); //put the heap back in max-heap order
  }
}

