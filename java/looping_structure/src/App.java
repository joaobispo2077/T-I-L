public class App {
  public static void main(String[] args) throws Exception {
    int resultFactorial = App.getFactorial(4);

    System.out.println(resultFactorial);

    App.makeMultiTables(10);
    App.makeSumTable(10);
    App.runVector();
    App.runForEach();
  }

  public static int getFactorial(int value) {

    int fatorial = 1;
    while (value > 1) {
      fatorial *= value;
      value--;
    }

    return fatorial;
  }

  public static void makeMultiTables(int number) {
    int limit = 10;
    int counter = 1;

    System.out.println("\n\n Showing multi table of " + number);
    do {
      int result = number * counter;
      System.out.format("%d x %d = %d%n\n", number, counter, result);
      counter++;
    } while (counter <= limit);
  }

  public static void makeSumTable(int number) {
    int limit = 10;

    System.out.println("\n\n Showing sum table of " + number);
    for (int counter = 1; counter <= limit; counter++) {
      int result = number + counter;
      System.out.format("%d + %d = %d%n\n", number, counter, result);
    }
  }

  public static void runVector() {
    int[] vector1; // vector of int without initialization
    int[] vector2 = new int[3]; // vector of int with initialization of 3 elements
    int[] vector3 = { 10, 20, 30 }; // vector of int with initialization of 3 elements with values

    vector2[0] = 10;
    vector3[1] = 1;

    int sum = 0;

    for (int counter = 0; counter < vector3.length; counter++) {
      sum += vector3[counter];
    }

    System.out.println("\n\nA soma de vetores resultou em: " + sum);
  }

  public static void runForEach() {
    int[] vector = { 10, 20, 30, 40, 50 };

    for (int element : vector) {
      System.out.println("\n\nUm dos valores desse vetor eh: " + element);
    }
  }
}
