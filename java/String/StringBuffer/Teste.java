public class Teste {

    public static void main(String[] args) {


        String nome = "Diogo";
        String sobreNome = "Lima";
        String nomeCompleto = nome + sobreNome;
        String nomeComBuffer;
        String nomeComBuilder;

        System.out.println(nomeCompleto);

        
        StringBuffer buffer = new StringBuffer();

        buffer.append(nome);
        buffer.append(sobreNome);

        nomeComBuffer = buffer.toString();

        System.out.println(nomeComBuffer);


        StringBuilder builder = new StringBuilder();

        buffer.append(nome);
        buffer.append(sobreNome);

        nomeComBuilder = buffer.toString();

        System.out.println(nomeComBuilder);







    


    
        


    }

}