import static java.util.stream.Collectors.*;


public class Main {

    public static void main(String[] args) {
        List<String> list = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h", "i", "j");
        Map<String, Integer> map = new HashMap<>();
        map.put("a", 1);
        map.put("b", 2);
        map.put("c", 3);
        map.put("d", 4);
        map.put("e", 5);
        map.put("f", 6);
        map.put("g", 7);
        map.put("h", 8);
        map.put("i", 9);
        map.put("j", 10);

        Set<String> set = new HashSet<>();
        set.add("a");
        set.add("b");
        set.add("c");
        set.add("d");
        set.add("e");
        set.add("f");
        set.add("g");
        set.add("h");
        set.add("i");
        set.add("j");

        // 1. Collectors.toList()
        List<String> list1 = list.stream().collect(toList());
        System.out.println(list1);

        // 2. Collectors.toSet()
        Set<String> set1 = list.stream().collect(toSet());
        System.out.println(set1);

        // 3. Collectors.toMap()
        Map<String, Integer> map1 = map.entrySet().stream().collect(toMap(Map.Entry::getKey, Map.Entry::getValue));
        System.out.println(map1);

        // 4. Collectors.toCollection()
        List<String> list2 = list.stream().collect(toCollection(ArrayList::new));
        System.out.println(list2);

        // 5. Collectors.joining()
        String joined = list.stream().collect(joining(", "));
        System.out.println(joined);

    }

}
