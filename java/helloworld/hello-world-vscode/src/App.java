import com.aeroporto.aeronave.Aviao;
import com.aeroporto.pessoa.Passageiro;

public class App {
  public static void main(String[] args) throws Exception {
    System.out.println("Hello, World! I'm on vscode");

    Aviao aviaozinho = new Aviao();
    aviaozinho.adicionarPassageiro();

    Passageiro passageiro = new Passageiro();
    passageiro.entrarAviao();

    com.aeroporto.aeronave.Passageiro passageiro2 = new com.aeroporto.aeronave.Passageiro();
    passageiro2.raioLaser();
  }
}
