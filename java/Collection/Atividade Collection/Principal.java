
import java.util.ArrayList;
import java.util.Scanner;

public class Principal {

    public static void main(String[] args) {
        
      ArrayList<Integer> numeros = new ArrayList<>();

      Scanner scanner = new Scanner(System.in);

      System.out.println("Digite números inteiros: ");

      while(true) {

        System.out.println("Número: ");
        int numero = scanner.nextInt();

        if (numero < 0) {
          break;
        }
        

        numeros.add(numero);

      }

      scanner.close();
     

      System.out.println("Números armazenados" + numeros);
      System.out.println("Soma total: " + calcularSoma(numeros));

    }

    private static int calcularSoma(ArrayList<Integer> numeros) {
        int soma = 0;
        for (int numero : numeros) {
            soma += numero;
        }
        return soma;
    }
}
      

     

    

      
      

  

        


     
  
      

    

