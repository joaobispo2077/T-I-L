public class Pessoa {
  String nome;
  int idade;

  void mostrarDados() {
    System.out.println("Nome: " + this.nome);
    System.out.println("Idade: " + this.idade);
  }

  Pessoa() {
    this.nome = "none";
    this.idade = 0;
  }

  Pessoa(String nome, int idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
