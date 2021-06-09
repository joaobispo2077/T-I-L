public class Main {

	public static void main(String[] args) {
		
		int[] vetorPrimeiro = new int[5];
		int[] vetorSegundo = new int[5];
		
		System.out.println("Digitem 5 numeros coleguinhas ");
		
		Scanner scanner = new Scanner(System.in); 	
		
		for(int i = 0; i < vetorPrimeiro.length; i++) { 
			vetorPrimeiro[i] = scanner.nextInt(); 
		}
		
		vetorSegundo = vetorPrimeiro;
	
		System.out.println("vetorPrimeiro: ");
		
		for(int vet: vetorPrimeiro) {
			System.out.println("-  " + vet);
		}
		
		System.out.println("vetorSegundo: ");

		for(int vet: vetorSegundo) {
			System.out.println("-  " + vet);
		}
		
		}
}