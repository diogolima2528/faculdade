public class Principal {

    public static void main(String[] args) {
        
     AlunoSuperior aluno = new AlunoSuperior();

    aluno.nome = "Diogo";
    aluno.prova = 5;
    aluno.teste = 9;

    System.err.println(aluno.getmedia());

}   
    
}
