package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingDemo {

    // Create Logger instance for this class
    private static final Logger logger = LoggerFactory.getLogger(LoggingDemo.class);

    public static void main(String[] args) {
        logger.warn("This is a warning message");
        logger.error("This is an error message");

        try {
            int result = 10 / 0; // will cause ArithmeticException
        } catch (ArithmeticException e) {
            logger.error("Caught an exception: ", e);
        }
    }
}
