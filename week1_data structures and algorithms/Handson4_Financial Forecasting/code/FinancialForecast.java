import java.util.Random;

public class FinancialForecast {
    public static void main(String[] args) {
        // creating object 
        Random rand = new Random();
     
        int months = 6;
        double[] revenues = new double[months];

        // generate random revenues between 500 and 700
        for (int i = 0; i < months; i++) {
            revenues[i] = 500 + rand.nextInt(20001); // 500 to 700
        }

        double total = 0;
        double highest = revenues[0];
        double lowest = revenues[0];

        // calculate the total, highest, lowest revenues
        for (double revenue : revenues) {
            total += revenue;
            if (revenue > highest) {
                highest = revenue;
            }
            if (revenue < lowest) {
                lowest = revenue;
            }
        }

        double average = total / revenues.length;

        System.out.println("----------Financial Forecast Report ---------- "); 
        System.out.println("Monthly Revenues ($): "); 
        for (double revenue : revenues) {
            System.out.print(revenue + " ");
        }
        System.out.println("Total Revenue: $" + total);        System.out.println("Average Monthly Revenue: $" + average); 
        System.out.println("Highest Monthly Revenue: $" + highest); 
        System.out.println("Lowest Monthly Revenue: $" + lowest); 

        // forecast or predict next month revenue (assume 5% growth in revenue = 0.05)
        double growthRate = 0.05;
        double forecastNext = revenues[revenues.length - 1] * (1 + growthRate);
        // printing output for 5% growth in revenue
        System.out.println("Forecasted/ predicted Revenue for Next Month (5% growth): $" + forecastNext); 
    }
}