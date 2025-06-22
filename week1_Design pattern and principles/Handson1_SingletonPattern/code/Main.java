public class Main {
    public static void main(String[] args) {
        // Attempt to get two Logger instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Use the log method
        logger1.log("First log message.");
        logger2.log("Second log message.");

        // Verify both references point to the same instance
        if (logger1 == logger2) {
            System.out.println("Both loggers are the same instance.");
        } else {
            System.out.println("Different logger instances.");
        }
    }
}