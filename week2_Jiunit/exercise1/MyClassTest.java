import org.junit.Test;
import static org.junit.Assert.*;

public class MyClassTest {

    // A simple test method using JUnit
    @Test
    public void testAddition() {
        int result = 2 + 3;
        assertEquals(5, result);
    }

    // Main method for manual execution (not for running JUnit tests)
    public static void main(String[] args) {
        MyClassTest test = new MyClassTest();
        try {
            test.testAddition();  // Manually invoking the test method
            System.out.println("testAddition passed.");
        } catch (AssertionError e) {
            System.out.println("testAddition failed: " + e.getMessage());
        }
    }
}
