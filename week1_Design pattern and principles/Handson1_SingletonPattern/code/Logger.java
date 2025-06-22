public class Logger {
    // Private static instance
    private static Logger instance;

    // Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger initialized.");
    }

    // Public static method to provide access to the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // Example log method
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}