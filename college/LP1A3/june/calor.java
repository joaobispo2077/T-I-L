public class Main {
	
	public static void main(String[] args) {
		
		double temperaturaEDia[][] = {
				{ 35.6, 36.4, 38.6, 38,   36},
				{ 36.1, 37,   37.2, 40.5, 40.4},
				{ 35.5, 35.7, 36.1, 37,   39.2},
		};
		
		int linhas = 3;
		int colunas = 5;
		double maiorValor = 0;
		int dia = 0;
	
		
		for(int i = 0; i < linhas; i++) {
			for(int j = 0; j < colunas; j++)
			if(temperaturaEDia[i][j] > maiorValor) {
				maiorValor = temperaturaEDia[i][j];
				dia = j;
			}
		}
		
		System.out.println("A maior temperatura registrada foi: " + maiorValor);
		System.out.println("E ela foi registrada no " + dia);
			
	}
}