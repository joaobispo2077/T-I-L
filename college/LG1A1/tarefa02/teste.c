#include<stdio.h>
#include<conio.h>
int main(void){
    char password[4];

    printf("password:\n");
    int p=0;
    do{
        password[p]=getch();
        if(password[p]!='\r'){
            printf("*");
        }
        p++;
    }while(password[p-1]!='\r');
    password[p-1]='\0';
    printf("\nYou have entered %s as password.",password);
    getch();
}
