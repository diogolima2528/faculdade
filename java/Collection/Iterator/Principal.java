import java.util.ArrayList;
import java.util.Iterator;

public class Principal {

    public static void main(String[] args) {
        
        ArrayList<String> listaNomee = new ArrayList<>();
        listaNomee.add("Diogo");
        listaNomee.add("Diego");
        listaNomee.add("Gabriel");
        listaNomee.add("Giovana");

        Iterator<String> iterator = listaNomee.iterator();

        while(iterator.hasNext()) {

            System.out.println(iterator.next());
        }


    }
}

