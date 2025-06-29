package com.example;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.platform.console.ConsoleLauncher;

import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals(5, 2 + 3, "2 + 3 should equal 5");

        // Assert true
        assertTrue(5 > 3, "5 should be greater than 3");

        // Assert false
        assertFalse(5 < 3, "5 should not be less than 3");

        // Assert null
        assertNull(null, "Object should be null");

        // Assert not null
        assertNotNull(new Object(), "Object should not be null");
    }

    public static void main(String[] args) {
        System.out.println("Running JUnit test via main()...");

        // Run JUnit programmatically using ConsoleLauncher
        ConsoleLauncher.main(new String[] {
            "--select-class", "com.example.AssertionsTest"
        });
    }
}
