import java.util.InputMismatchException;
import java.util.Scanner;

import javax.management.RuntimeErrorException;

public class App {
  public static void main(String[] args) throws Exception {
    try {
      System.out.println("Hello, World!");
      App.handlingErrors2();
    } catch (InputMismatchException err) {
      System.out.println("Error00: " + err.getMessage());
    }
  }

  public static void handlingErrors() {
    try {
      String texto = null;
      int tamanho = texto.length();
      System.out.println(tamanho);
    } catch (NullPointerException err) {
      System.out.println("Erro: " + err.getMessage());
    }
  }

  public static void handlingErrors2() throws Exception {
    try {
      Scanner scan = new Scanner(System.in);
      System.out.println("Digite um número: ");
      int num = scan.nextInt();
      System.out.println("Digite outro número: ");
      int num2 = scan.nextInt();

      double result = num / num2;
      System.out.println("Resultado: " + result);
      scan.close();
    } catch (InputMismatchException err) {
      System.out.println("DIGITE UMA LETRA");
      System.out.println("Erro: " + err.getMessage());
      throw new RuntimeException(err);
      // System.exit(0);
    } finally {
      System.out.println("Executando finally");
    }
  }
}
