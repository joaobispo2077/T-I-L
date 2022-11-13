import java.util.Optional;

public class Main {

    public static void main(String[] args) {
        // 1. of()
        Optional<String> optional1 = Optional.of("Hello");
        System.out.println(optional1);

        // 2. ofNullable()
        Optional<String> optional2 = Optional.ofNullable("Hello");
        System.out.println(optional2);

        // 3. filter()
        Optional<String> optional3 = Optional.of("Hello").filter(s -> s.length() > 5);
        System.out.println(optional3);

        // 4. orElse()
        String optional4 = Optional.of("Hello").filter(s -> s.length() > 5).orElse("World");
        System.out.println(optional4);

        // 5. orElseGet()
        String optional5 = Optional.of("Hello").filter(s -> s.length() > 5).orElseGet(() -> "World");
        System.out.println(optional5);

        // 6. orElseThrow()
        String optional6 = Optional.of("Hello").filter(s -> s.length() > 5).orElseThrow(() -> new RuntimeException("Error"));
        System.out.println(optional6);
    }

}



    // Escreva uma nova classe de exceção que utilize dois construtores, o primeiro com uma mensagem de erro e o segundo que aceite também um Throwable com a causa.
public static class MyException extends RuntimeException {
      public MyException(String message) {
          super(message);
      }

      public MyException(String message, Throwable cause) {
          super(message, cause);
      }

      // Faça um exemplo no qual ao capturar uma exceção, gere uma nova exceção passando a exceção original como causa.
      public static void exce(String[] args) {
        try {
            throw new RuntimeException("Error");
        } catch (RuntimeException e) {
            throw new MyException("Error", e);
        }
    }

    // Faça uma demonstração do funcionamento do método getCause da nova exceção que tenha criado.
    public static void excecause(String[] args) {
      try {
          exce(args);
      } catch (MyException e) {
          System.out.println(e.getCause());
      }
    }

    // Faça um exemplo com tratamento várias exceções, cada qual em seu bloco catch.

    public static void multi(String[] args) {
      try {
          throw new RuntimeException("Error");
      } catch (RuntimeException e) {
          System.out.println("RuntimeException");
      } catch (Exception e) {
          System.out.println("Exception");
      }
    }

    // Faça um exemplo tratando múltiplas exceções em um mesmo bloco catch, usando o operador "|".

    public static void multi2(String[] args) {
      try {
          throw new RuntimeException("Error");
      } catch (RuntimeException | Exception e) {
          System.out.println("RuntimeException | Exception");
      }
    }

}

