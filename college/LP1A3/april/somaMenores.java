
import java.util.Scanner; 
import java.util.Arrays; 

public class Main { 

	public static void main(String[] args) { 

		int[] numbers = new int[4]; 

		int sum = 0; 
 
		Scanner scanner = new Scanner(System.in); 	 

		for(int i = 0; i < numbers.length; i++) { 
			System.out.print("Digite um número: ");  
			numbers[i] = scanner.nextInt(); 
		}
	 
		Arrays.sort(numbers); 

		for(int i = 0; i < numbers.length - 1; i++) { 
			sum += numbers[i]; 
		}

		System.out.println("A soma dos três menores é igual a " + sum + ".");	   
	} 
} 