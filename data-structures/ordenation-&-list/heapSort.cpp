#include <iostream>
using namespace std;
void heap(int arr[], int n, int root){
  if (l < n && arr[l] > arr[largest])
  largest = l;

  if (r < n && arr[r] > arr[largest])
  largest = r;

  if (largest != root){
    swap(arr[root], arr[largest]);
    heap(arr, n, largest);
  }
}

void heapSort(int arr[], int n){
  for (int i = n / 2 - 1; i >= 0; i--)
  heap(arr, n, i);

  for (int i=n-1; i>=0; i--){
    swap(arr[0], arr[i]);
    heap(arr, i, 0);
  }
}

void mostraArray(int arr[], int n){
  for (int i=0; i<n; ++i)
  cout << arr[i] << " ";
  cout << "\n";
}

int main(){
  int heap_arr[] = {4,17,3,12,9,6};
  int n = sizeof(heap_arr)/sizeof(heap_arr[0]);
  cout<<"Input array"<<endl;
  mostraArray(heap_arr,n);
  heapSort(heap_arr, n);
  cout << "Sorted array"<<endl;
  mostraArray(heap_arr, n);
}