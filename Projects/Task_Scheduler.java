import java.util.Timer;
import java.util.TimerTask;

public class TaskScheduler {
    public static void main(String[] args) {
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            @Override
            public void run() {
                System.out.println("Task executed at: " + System.currentTimeMillis());
            }
        };
        long delay = 1000;
        long period = 2000;
        timer.schedule(task, delay, period);
    }
}
