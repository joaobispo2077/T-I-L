public class Main {

    public static void main(String[] args) throws Exception {
        // 1. Instantiate classes using the parameterless constructor;
        Class<?> clazz = Class.forName("java.util.ArrayList");
        Object object = clazz.newInstance();
        System.out.println(object);

        // 2. Instantiate classes that use the parameterized constructor;
        Class<?> clazz2 = Class.forName("java.util.ArrayList");
        Constructor<?> constructor = clazz2.getConstructor(int.class);
        Object object2 = constructor.newInstance(10);
        System.out.println(object2);

        // 3. List Methods and Attributes of the Class;
        Class<?> clazz3 = Class.forName("java.util.ArrayList");
        Method[] methods = clazz3.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println(method);
        }

        // 4. Change the visibility of a private method to public.
        Class<?> clazz4 = Class.forName("java.util.ArrayList");
        Method method = clazz4.getDeclaredMethod("ensureCapacityInternal", int.class);
        method.setAccessible(true);
        System.out.println(method);
    }

}
