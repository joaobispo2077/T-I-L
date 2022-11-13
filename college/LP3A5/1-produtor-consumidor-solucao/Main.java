import java.util.LinkedList;
import java.util.Queue;
import java.util.Random;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

class Holder<T> {

    private int capacity;
    private Queue<T> items = new LinkedList<T>();

    public Holder(int capacity) {
        this.capacity = capacity;
    }

    public void addItem(T item) throws InterruptedException {
      Thread.sleep(new Random().nextInt(2000));

      synchronized (this) {
          while (isFull()) {
              System.out.println("Holder FULL. adding operation is waiting... [" + item + "]");
              this.wait();
          }
          System.out.println(items.size() + "  -- holder +++ added " + item);
          items.add(item);
          this.notifyAll();
      }
  }

    public T getItem() throws InterruptedException {
        synchronized (this) {
            while (isEmpty()) {
                System.out.println("Holder EMPTY. getting operation is waiting...");
                this.wait();
            }
            T next = items.poll();
            System.out.println(items.size() + "  -- holder --- removed " + next + " - remaining: " + items.size());
            this.notifyAll();
            return next;
        }
    }

    private synchronized boolean isEmpty() {
        return items.isEmpty();
    }

    private synchronized boolean isFull() {
        return items.size() >= capacity;
    }

}

class Producer implements Runnable {

    public static final int GENERATED_ITEMS_COUNT = 10;
    private int id;
    private Holder<String> holder;

    public Producer(int id, Holder<String> holder) {
        this.id = id;
        this.holder = holder;
    }

    @Override
    public void run() {
        try {
            for (int i = 0; i < GENERATED_ITEMS_COUNT; i++) {
                String produced = "Message " + i + " from [P" + id + "] " + System.nanoTime();
                holder.addItem(produced);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();

        }
    }
}

class Consumer implements Runnable {

    private Holder<String> holder;

    public Consumer(Holder<String> hodler) {
        this.holder = hodler;
    }

    @Override
    public void run() {
        while (true) {
            try {
                String consumed = holder.getItem();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class Main {

    public static void main(String[] args) {
        Holder<String> holder = new Holder<String>(5);
        Executor executor = Executors.newFixedThreadPool(5);

        for (int i = 0; i < 3; i++) {
            executor.execute(new Producer(i, holder));
        }

        for (int i = 0; i < 2; i++) {
            executor.execute(new Consumer(holder));
        }
    }
}

// vi por aqui: https://stackoverflow.com/a/28862386/14364587
