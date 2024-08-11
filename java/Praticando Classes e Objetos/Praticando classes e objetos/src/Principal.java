public class Principal {
    public static void main(String[] args) {

    AlunoEnsinoMedio alunoEnsinoMedio = new AlunoEnsinoMedio();
    AlunoEnsinoSuperior alunoEnsinoSuperior = new AlunoEnsinoSuperior();

    alunoEnsinoMedio.nome = "Diogo";
    alunoEnsinoMedio.teste = 9;
    alunoEnsinoMedio.prova = 8;

    System.out.println("Aluno do ensino médio: ");
    System.out.println("Nome: " + alunoEnsinoMedio.nome);
    System.out.println("Média: " + alunoEnsinoMedio.getMedia());


    alunoEnsinoSuperior.nome = "Diego";
    alunoEnsinoSuperior.teste = 8;
    alunoEnsinoSuperior.prova = 6;


    System.out.println("Aluno do ensino superior: ");
    System.out.println("Nome: " + alunoEnsinoSuperior.nome);
    System.out.println("Média: " + alunoEnsinoSuperior.getMedia());

    }


}
