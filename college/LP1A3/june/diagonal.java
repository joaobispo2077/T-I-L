class Main {
  public static void main(String[] args) {
      int[][] matrix = {{10,15,15},
                      {10,15,15},
                      {10,15,15}};
          
      int total = 0;

      for (int i = 0; i < 3; ++i) {
        total += matrix[i][i];
      }
        
      System.out.println("A soma da diagonal principal eh " + total);
  }
}
