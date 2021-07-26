import types.Calc;
import types.Numeros;
import types.Textos;

public class App {
  public static void main(String[] args) throws Exception {

    System.out.println("Hello, World!");

    Numeros.execute();
    Textos.execute();

    App.getOtherTypes();

    Calc.execute();
  }

  public static void getOtherTypes() {
    boolean allowedToPrint = true;

    System.out.println("Boolean: " + allowedToPrint);
  }
}
