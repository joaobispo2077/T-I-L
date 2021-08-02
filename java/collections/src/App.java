import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

/*
  ArrayList é mais indicado quando você precisa acessar elementos
  aleatorios de uma lista e adicionar elementos somente ao final da lista.

  LinkedList é mais indicado quando para acessar um elemento da colecão, você percorre
  ela completamente no início ao fim sem acessar posicões aleatorias e se você adiciona
  e remove no inicío e no meio da colecão.

  HashSet é mais indicado para uma colecão é composta por valores únicos.
*/

public class App {
  public static void main(String[] args) throws Exception {
    App.execute();
  }

  public static void manageList() {
    ArrayList<String> names = new ArrayList<String>();

    names.add("John");
    names.add("Doe");
    names.add("Teste");

    App.showTextList(names, "nomes");
  }

  public static void showTextList(ArrayList<String> list, String itemName) {

    System.out.println("O tamanho da lista eh de " + list.size() + " " + itemName);
    for (String item : list) {
      System.out.println("Um dos " + itemName + " na lista eh: " + item);
    }
  }

  public static void useHashList() {
    HashSet<String> tags = new HashSet<String>();

    tags.add("java");
    tags.add("poo");
    tags.add("curso");
    tags.add("programacão");

    for (String tag : tags) {
      System.out.println(tag + " - " + tag.hashCode());
    }
  }

  public static void cleanScreen() throws IOException, InterruptedException {
    new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();

  }

  public static void execute() throws IOException, InterruptedException {
    HashMap<Integer, String> names = new HashMap<Integer, String>();
    HashMap<Integer, Double> prices = new HashMap<Integer, Double>();

    Scanner scan = new Scanner(System.in);

    int option = 0;

    do {
      cleanScreen();
      showMenu();

      option = getUserOption(scan);
      if (!processMenuOption(scan, option, names, prices)) {
        System.out.println("Opcao invalida");
        Thread.sleep(2000);
      }
    } while (option != 5);

    scan.close();
  }

  private static boolean processMenuOption(Scanner scan, int option, HashMap<Integer, String> names,
      HashMap<Integer, Double> prices) throws IOException, InterruptedException {
    switch (option) {
      case 1:
        addProduct(scan, names, prices);
        return true;
      case 2:
        updateProduct(scan, names, prices);
        return true;
      case 3:
        removeProduct(scan, names, prices);
        return true;
      case 4:
        showProducts(scan, names, prices);
        return true;
      case 5:
        turnOffProgram();
        return true;
      default:
        return false;
    }
  }

  private static void turnOffProgram() throws InterruptedException, IOException {
    System.out.println("Saindo do programa...");
    Thread.sleep(1000);
    cleanScreen();
  }

  private static void showProducts(Scanner scan, HashMap<Integer, String> names, HashMap<Integer, Double> prices)
      throws IOException, InterruptedException {
    cleanScreen();
    System.out.println("Produtos Cadastrados:");
    System.out.println("---------------------");
    System.out.format("%6s | %-10s | %6s%n", "Codigo", "Nome", "Preco");

    for (int key : names.keySet()) {
      System.out.format("%06d | %-10s | %6.2f%n", key, names.get(key), prices.get(key));
    }
    System.out.println("---------------------\n\n");
    System.out.print(">> Pressione ENTER para voltar ao menu...");
    System.in.read();
  }

  private static void removeProduct(Scanner scan, HashMap<Integer, String> names, HashMap<Integer, Double> prices)
      throws IOException {
    System.out.println("REMOCAO DE PRODUTO");
    System.out.println("-------------------");

    System.out.print(">> Codigo: ");
    int code = scan.nextInt();
    scan.nextLine();

    if (names.containsKey(code)) {
      System.out.format("Valores originais: %n%s, RS %2.f%n", names.get(code), prices.get(code));
      System.out.print(">> Confirma a exclusao (S/N): ");
      String answer = scan.nextLine().trim();

      if (answer.toUpperCase().equals("S")) {
        names.remove(code);
        prices.remove(code);
        System.out.println("-------------------");
        System.out.println("Produto removido com sucesso!");
      } else {
        System.out.println("Remocao não confirmada.");
      }
    } else {
      System.out.println("Produto nao encontrado");
    }

    System.out.print(">> Pressione ENTER para voltar ao menu...");
    System.in.read();
  }

  private static void updateProduct(Scanner scan, HashMap<Integer, String> names, HashMap<Integer, Double> prices)
      throws IOException {
    System.out.println("ALTERACAO DE PRODUTO");
    System.out.println("-------------------");

    System.out.print(">> Codigo: ");
    int code = scan.nextInt();
    scan.nextLine();

    if (names.containsKey(code)) {
      System.out.format("Valores originais: %n%s, RS %2.f%n", names.get(code), prices.get(code));
      System.out.println("Deixe em branco para manter o valor original..");
      System.out.print(">> Nome: ");

      String newName = scan.nextLine().trim();
      newName = newName.isEmpty() ? names.get(code) : newName;

      System.out.print(">> Preco: ");

      String newPriceText = scan.nextLine().trim();
      Double newPrice = newPriceText.isEmpty() ? prices.get(code) : Double.parseDouble(newPriceText.replace(',', '.'));

      names.put(code, newName);
      prices.put(code, newPrice);

      System.out.println("-------------------");
      System.out.println("Produto alterado com sucesso!");
    } else {
      System.out.println("Produto nao encontrado");
    }

    System.out.print(">> Pressione ENTER para voltar ao menu...");
    System.in.read();
  }

  private static void addProduct(Scanner scan, HashMap<Integer, String> names, HashMap<Integer, Double> prices)
      throws IOException, InterruptedException {
    cleanScreen();
    System.out.println("INSERCAO DE PRODUTO");
    System.out.println("--------------------");

    System.out.print(">> Nome: ");
    String name = scan.nextLine();

    System.out.print(">> Preco: ");
    Double price = scan.nextDouble();

    int nextKey = getNextKey(names.keySet());
    names.put(nextKey, name);
    prices.put(nextKey, price);
    System.out.println("--------------------");
    System.out.print(">>Produto inserido com sucesso!");

    System.out.print(">> Pressione ENTER para voltar ao menu...");
    System.in.read();
  }

  private static int getNextKey(Set<Integer> keySet) {
    if (keySet.size() > 0) {
      return Collections.max(keySet) + 1;
    } else
      return 1;
  }

  private static int getUserOption(Scanner scan) {
    System.out.print(">> Selecione a opcao desejada: ");
    int selectedOption = scan.nextInt();
    scan.nextLine(); // limpa buffer
    return selectedOption;
  }

  private static void showMenu() {
    System.out.println("CADASTRO DE PRODUTOS");
    System.out.println("--------------------");
    System.out.println("1. Adicionar");
    System.out.println("2. Alterar");
    System.out.println("3. Remover");
    System.out.println("4. Listar");
    System.out.println("5. Sair");
    System.out.println("--------------------");
  }
}
