public class App {
  public static void main(String[] args) throws Exception {
    Pessoa person1 = new Pessoa();
    person1.nome = "Joao";
    person1.idade = 25;
    person1.mostrarDados();

    Pessoa person2 = new Pessoa();
    person2.mostrarDados();

    Pessoa person3 = new Pessoa("Joao", 21);
    person3.mostrarDados();

  }

}
