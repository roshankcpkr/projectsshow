import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Product {
    private String name;
    private int quantity;

    public Product(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void addQuantity(int quantity) {
        this.quantity += quantity;
    }

    public void removeQuantity(int quantity) {
        this.quantity -= quantity;
    }
}

public class InventorySystem {
    private List<Product> products = new ArrayList<>();

    public void addProduct(String name, int quantity) {
        products.add(new Product(name, quantity));
        System.out.println("Product added to the inventory.");
    }

    public void displayInventory() {
        System.out.println("Inventory:");
        for (Product product : products) {
            System.out.println(product.getName() + ": " + product.getQuantity());
        }
    }

    public static void main(String[] args) {
        InventorySystem inventory = new InventorySystem();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nInventory System Menu:");
            System.out.println("1. Add Product");
            System.out.println("2. Display Inventory");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter product name: ");
                    String name = scanner.next();
                    System.out.print("Enter initial quantity: ");
                    int quantity = scanner.nextInt();
                    inventory.addProduct(name, quantity);
                    break;
                case 2:
                    inventory.displayInventory();
                    break;
                case 3:
                    System.out.println("Exiting the program.");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
