import java.util.Scanner;

public class App {
    
    public static void main(String[] args) {


    Scanner input = new Scanner(System.in);

    double nota1, nota2, nota3, media;

        System.out.println("Digite o valor da nota 1: ");
        nota1 = input.nextDouble();

        System.out.println("Digite o valor da nota 2: ");
        nota2 = input.nextDouble();

        System.out.println("Digite o valor da nota 3: ");
        nota3 = input.nextDouble();

        media = (nota1 + nota2 + nota3)/3;

        System.out.println("A média é igual a " + media);

        if(media >= 7) {

        System.out.println("Você está aprovado");
        }


        else {
            if(media<4) {
                System.out.println("Você está reprovado");
            }

        else{

            System.out.println("Você está de recuperação");
        }

        }





    }
    

}


