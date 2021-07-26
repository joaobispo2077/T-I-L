public class App {
  public static void main(String[] args) throws Exception {
    // implicit conversion

    byte num = 8;

    long num2 = num;

    // explicit conversion
    int num3 = (int) num2;

    System.out.println(num3);
  }
}
