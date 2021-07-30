public class App {
  public static void main(String[] args) throws Exception {
    App.compareText();
    App.utilText();
  }

  public static void compareText() {
    String text1 = "Hello, World!";
    String text2 = "hello, world!";

    System.out.println("equals(): " + text1.equals(text2));
    System.out.println("equalsIgnoreCase(): " + text1.equalsIgnoreCase(text2));

    System.out.println("compareTo(): " + text1.compareTo(text2));
    System.out.println("compareToIgnoreCase(): " + text1.compareToIgnoreCase(text2));
  }

  public static void utilText() {
    String text1 = "Hello, World!";
    String text2 = "hello, world!";

    String text3 = text1.concat(text2);
    System.out.println("concat(): " + text3);

    String text4 = text1.replace("World", "Batata"); // replaceAll
    System.out.println("replace(): " + text4);

    String text5 = text1.toLowerCase();
    String text6 = text1.toUpperCase();

    System.out.println("toLowerCase(): " + text5);
    System.out.println("toUpperCase(): " + text6);

    String text7 = text1.trim();
    String[] text8 = text1.split(" ");

    System.out.println("trim(): " + text7);
    System.out.println("split(): " + text8);

    String text9 = text1.substring(0, 4);

    int number = 1;
    String text10 = text1.valueOf(number);

    System.out.println("substring(): " + text9);
    System.out.println("valueOf(): " + text10);

    System.out.println("contains(): " + text1.contains(text2));
    System.out.println("startsWith(): " + text1.startsWith("W"));
    System.out.println("endsWith(): " + text1.endsWith("b"));

    System.out.println("indexOf(): " + text1.indexOf("b"));
    System.out.println("lastIndexOf(): " + text1.lastIndexOf("!"));

    System.out.println("isEmpty(): " + text1.isEmpty());
    System.out.println("length(): " + text1.length());
  }
}
