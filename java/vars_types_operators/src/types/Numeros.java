package types;

public class Numeros {
  public static void execute() {

    System.out.println("Numeros");

    // Integers
    byte v2 = 30; // 8 bits
    short v3 = 60; // 16 bits
    int v1 = 50; // 32 bits
    long v4 = -9; // 64 bits

    long exampleLong = 5645646464654L;

    System.out.println("  v1: " + v1 + "  v2: " + v2 + "  v3: " + v3 + " v4: " + v4);
    System.out.println("Byte: " + Byte.MIN_VALUE + " - " + Byte.MAX_VALUE);
    System.out.println("Short: " + Short.MIN_VALUE + " - " + Short.MAX_VALUE);
    System.out.println("Integer: " + Integer.MIN_VALUE + " - " + Integer.MAX_VALUE);
    System.out.println("Long: " + Long.MIN_VALUE + " - " + Long.MAX_VALUE);

    // Floating-point
    float f1 = 42.00f; // 32 bits
    double d1 = 42.00; // 64 bits

    System.out.println("Float: " + Float.MIN_VALUE + " - " + Float.MAX_VALUE);
    System.out.println("Double: " + Double.MIN_VALUE + " - " + Double.MAX_VALUE);

  }
}
