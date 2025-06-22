import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search by productId
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    // Binary Search by productId (array must be sorted)
    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        // Creating sample products
        Product[] products = {
            new Product(103, "Shoes", "Footwear"),
            new Product(101, "Laptop", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(102, "Phone", "Electronics")
        };

        // --- LINEAR SEARCH ---
        System.out.println("Linear Search Result:");
        Product result1 = linearSearch(products, 102);
        if (result1 != null) result1.display();
        else System.out.println("Product not found");

        // Sort products by productId before Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // --- BINARY SEARCH ---
        System.out.println("\nBinary Search Result:");
        Product result2 = binarySearch(products, 102);
        if (result2 != null) result2.display();
        else System.out.println("Product not found");
    }
}