package types;

public class Calc {

  public static void execute() {
    System.out.println("Calculator");

    int v1 = 100;
    float v2 = 200;

    float r1 = v1 + v2;
    float r2 = v1 - v2;
    float r3 = v1 * v2;
    float r4 = v1 / v2;
    float r5 = v1 % v2;

    System.out.println("Soma: " + r1);
    System.out.println("Subtração: " + r2);
    System.out.println("Multiplicação: " + r3);
    System.out.println("Divisão: " + r4);
    System.out.println("Resto da Divisão: " + r5);

    System.out.println(v1++); // read variable first
    System.out.println(++v1); // make operation first

    System.out.println(v1--); // read variable first
    System.out.println(--v1); // make operation first

    v1 += 7;
    v1 -= 5;
    System.out.println(v1); // make operation first

  }

  public static void operationsOrder() {
    int vA = 12;
    int vB = 9;
    int vC = 6;
    int vD = 3;

    int r1 = vA + vB / vC;
    int r2 = (vA + vB) / vC;
    int r3 = vA / vC * vD + vB;
    int r4 = vA / (vC * (vD + vB));

    System.out.println("r1 = " + r1);
    System.out.println("r2 = " + r2);
    System.out.println("r3 = " + r3);
    System.out.println("r4 = " + r4);
  }
}
