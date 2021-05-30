import java.util.Scanner; 

class Main {
  public static void main(String[] args) {

    int[] numberlist;

    Scanner scanner = new Scanner(System.in); 

    int count = 0;	 
    while(true) {
      System.out.print("Digite um numero positivo para somar e negativo para parar: ");    
      
      int candidate = scanner.nextInt();

      if(candidate >= 0) {
        numberlist[count] = candidate;
      }

      if(candidate < 0 ) break;

    }

    int sum = 0;
    for (int i = 0; i < numberlist.length; i++) {
      sum += numberlist[i];
    }

    System.out.print("A soma dos numeros digitados eh " + sum);    


  }
}
