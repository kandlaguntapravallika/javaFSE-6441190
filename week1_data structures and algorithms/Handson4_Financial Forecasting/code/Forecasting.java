public class Forecasting {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue, double rate, int years) {
       
        if (years == 0) return presentValue;

        // Recursive case: call the method again for (years - 1)
        return futureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double pv = 1000;     // starting money
        double rate = 0.10;   // 10% growth
        int years = 5;        // how many years

        double fv = futureValue(pv, rate, years);  
        System.out.println("Future Value after " + years + " years: ₹" + fv);
    }
}