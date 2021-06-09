import java.util.Scanner;

	public class Main {
		
		public static void main(String[] args) {
			
			int[] nums = new int[9];
			int majorNumber = 0;
			
			System.out.println("Digita ai 9 numeros ");
			
			Scanner scanner = new Scanner(System.in); 	
			
			for(int i = 0; i < nums.length; i++) { 
				nums[i] = scanner.nextInt(); 
			}
			
			for(int i = 0; i < 8; i++) {
				if(nums[i] > majorNumber) {
					majorNumber = nums[i];
				}
			}
			
			
			System.out.println( majorNumber + ". ");
			System.out.println( (majorNumber - 1) + ". ");

			}
}