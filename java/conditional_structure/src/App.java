public class App {
  public static void main(String[] args) throws Exception {

    System.out.println("Hello, World!");
    App.circuits();
    App.conditionalStructures();
    App.relationalCondition();
  }

  public static void circuits() {
    int v1 = 10;
    int v2 = 5;

    System.out.format("%d >  %d :: %b%n", v1, v2, v1 > v2);
    System.out.format("%d <  %d :: %b%n", v1, v2, v1 < v2);
    System.out.format("%d >= %d :: %b%n", v1, v2, v1 >= v2);
    System.out.format("%d <= %d :: %b%n", v1, v2, v1 <= v2);
    System.out.format("%d == %d :: %b%n", v1, v2, v1 == v2);
    System.out.format("%d != %d :: %b%n", v1, v2, v1 != v2);

    int r1 = v2 > 0 ? v2 / v1 : 0;
    System.out.println(r1);
  }

  public static void conditionalStructures() {
    int v1 = 10;
    int v2 = 0;
    int r = 0;

    if (v2 != 0) {
      r = v1 / v2;
    } else {
      r = 2;
    }

    if (r > 0) {
      System.out.println("Resultado positivo: ");
    } else if (r < 0) {
      System.out.println("Resultado negativo: ");
    }

    switch (r) {
      case 1:
        System.out.println("Resultado 1");
        break;
      case 2:
        System.out.println("Resultado 2");
        break;
      default:
        System.out.println("Resultado 0");
    }
    ;

    System.out.println(r);
  }

  public static void relationalCondition() {
    boolean c1 = false;
    boolean c2 = true;

    System.out.format("%b == %b :: %b%n", c1, c2, c1 & c2);
    System.out.format("%b != %b :: %b%n", c1, c2, c1 | c2);
    System.out.format("%b ^ %b :: %b%n", c1, c2, c1 ^ c2);
    System.out.format("%b !c2 :: %b%n", c2, !c2);
  }
}
