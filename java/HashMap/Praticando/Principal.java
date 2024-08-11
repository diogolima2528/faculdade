import java.util.HashMap;

public class Principal {

    public static void main(String[] args) {
        


        HashMap<Integer, String> Carros = new HashMap<>();
        Carros.put(1,"Fusca");
        Carros.put(2,"Celta");
        Carros.put(3,"Corsa");
        Carros.put(4,"Uno");

        System.out.println("Catálogo de carros: " + Carros);

        String Valor = Carros.get(3);
        System.out.println("Carro de chave 3: " + Valor);


        System.out.println("Todas as chaves: " + Carros.keySet());
        System.out.println("Todos os valores: " + Carros.values());
        System.out.println("Chave/valor: " + Carros.entrySet());

        
        HashMap<Integer, String> Carros2 = new HashMap<>(Carros);
        Carros2.put(5,"Brasília");

        System.out.println("Catálogo de carros atualizado: " + Carros2);

        
    }
}