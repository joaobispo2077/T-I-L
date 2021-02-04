
void getValue(myStruct *ptr)
{
    printf("\nEnter Data:");
    scanf("%d",&ptr->data);
    ptr->next=NULL;
}

myStruct * create()
{
   myStruct * a_head = NULL; 
   myStruct * a_tail = NULL;  
   int size,i;
   printf("Enter Size of List : ");
   scanf("%d",&size);

   for(i=0;i<size;i++)
   {
      
      if(i==0)
      {
         a_head=a_tail=malloc(sizeof(myStruct));
         getValue(a_tail);
      }
      
      else
      {
         a_tail->next=malloc(sizeof(myStruct)); 
         getValue(a_tail->next);
         a_tail=a_tail->next; 
      }
   }
return a_head;
}