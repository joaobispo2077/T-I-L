  import java.util.Scanner;

  public class Main {

      public static void main(String[] args) {
          
      int[] numbers = new int[10];
        
      System.out.println("Coloque 10 numeros no programa ");
        
      Scanner scanner = new Scanner(System.in); 	
        
      for(int i = 0; i < numbers.length; i++) { 
        numbers[i] = scanner.nextInt(); 
      }		
        
      for(int number: numbers) {
        System.out.println("numeros  " + number);
      }

      }
  }