import java.util.Scanner; 

class Main {
  public static void main(String[] args) {
    System.out.print("Hello world!");
    Scanner scanner = new Scanner(System.in); 	 
    
    System.out.print("Digite a sua altura: ");
    float height = scanner.nextFloat();

    System.out.print("Digite o seu genero [0 - HOMEM] e [1 - MULHER]:");
    int gender = scanner.nextInt();

    if(gender == 0 ) {
      System.out.printf("O seu peso ideal eh " + ((height * 72.7) - 58));
    }

    if(gender == 1 ) {
      System.out.printf("O seu peso ideal eh "+ ((height * 62.1) - 44.7));
    }


  }
}
