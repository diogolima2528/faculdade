public class Teste {
    public static void main(String[] args) {


        Professor diogo = new Professor();

        diogo.nome = "Diogo";
        diogo.salario = 2000;
        

        System.out.println("Professor contratado: ");
        System.out.println("Nome do professor: " + diogo.nome);
        System.out.println("Salário do professor: " + diogo.getSalario());
        System.err.println("Valor de inss: " + diogo.getInss());
        System.err.println("Salário líquido: " + diogo.getSalarioLiquido());



    }
    
}
