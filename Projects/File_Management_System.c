#include <stdio.h>
#include <stdlib.h>

int main() {
    int choice;
    char filename[50];
    FILE *file;

    while (1) {
        printf("\nFile Management System\n");
        printf("1. Create a new file\n");
        printf("2. Write to a file\n");
        printf("3. Read from a file\n");
        printf("4. Exit\n");
        printf("Enter your choice (1/2/3/4): ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter the filename: ");
                scanf("%s", filename);
                file = fopen(filename, "w");
                if (file == NULL) {
                    printf("Error creating the file.\n");
                } else {
                    printf("File created successfully.\n");
                    fclose(file);
                }
                break;
            case 2:
                printf("Enter the filename: ");
                scanf("%s", filename);
                file = fopen(filename, "a");
                if (file == NULL) {
                    printf("Error opening the file.\n");
                } else {
                    char data[100];
                    printf("Enter data to write to the file: ");
                    scanf(" %[^\n]", data);
                    fprintf(file, "%s\n", data);
                    printf("Data written to the file successfully.\n");
                    fclose(file);
                }
                break;
            case 3:
                printf("Enter the filename: ");
                scanf("%s", filename);
                file = fopen(filename, "r");
                if (file == NULL) {
                    printf("Error opening the file.\n");
                } else {
                    char data[100];
                    while (fgets(data, sizeof(data), file) != NULL) {
                        printf("%s", data);
                    }
                    fclose(file);
                }
                break;
            case 4:
                printf("Exiting the program.\n");
                exit(0);
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}
