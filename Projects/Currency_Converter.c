#include <stdio.h>

int main() {
    float amount, convertedAmount;
    int choice;

    printf("Currency Converter\n");
    printf("1. USD to EUR\n");
    printf("2. USD to GBP\n");
    printf("3. EUR to USD\n");
    printf("4. GBP to USD\n");
    printf("Enter your choice (1/2/3/4): ");
    scanf("%d", &choice);

    printf("Enter the amount: ");
    scanf("%f", &amount);

    switch (choice) {
        case 1:
            convertedAmount = amount * 0.86;
            printf("%.2f USD is equal to %.2f EUR\n", amount, convertedAmount);
            break;
        case 2:
            convertedAmount = amount * 0.73;
            printf("%.2f USD is equal to %.2f GBP\n", amount, convertedAmount);
            break;
        case 3:
            convertedAmount = amount / 0.86;
            printf("%.2f EUR is equal to %.2f USD\n", amount, convertedAmount);
            break;
        case 4:
            convertedAmount = amount / 0.73;
            printf("%.2f GBP is equal to %.2f USD\n", amount, convertedAmount);
            break;
        default:
            printf("Invalid choice\n");
    }

    return 0;
}
