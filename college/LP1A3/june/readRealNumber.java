import java.util.Scanner;

class Main {
	
  public static void main(String[] args)  {
    	
    double[] vetNumbers = new double[20];
    
    Scanner scanner = new Scanner(System.in);
    
    System.out.println("Digite abaixo reais 20 numeros: ");
        
    	
    for(int i = 0; i < vetNumbers.length; i++) { 
      System.out.print("-  ");  
      vetNumbers[i] = Double.parseDouble(scanner.nextLine());
    }
        
    System.out.println("Os números reais digitados foram: ");
        
    for(double number : vetNumbers) {
      System.out.println("- " + number);
    }
  }
}