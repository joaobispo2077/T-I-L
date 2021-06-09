class Main {
  public static void main(String[] args) {
    int[][] myNumbers = { {1, 2, 3, 4}, {10,12,13,14} };

    int majorThanTen = 0;

    for (int i = 0; i < myNumbers.length; ++i) {
      for(int j = 0; j < myNumbers[i].length; ++j) {
        if(myNumbers[i][j] > 10)
        majorThanTen++;

      }
    }
        System.out.println("A quantidade de numeros maiores que 10 eh " + majorThanTen);
  }
}