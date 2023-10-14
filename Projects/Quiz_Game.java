import java.util.Scanner;

public class QuizGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int score = 0;

        System.out.println("Welcome to the Java Quiz Game!");

        // Question 1
        System.out.println("Question 1: What is the capital of France?");
        System.out.println("A) London");
        System.out.println("B) Madrid");
        System.out.println("C) Paris");
        System.out.print("Your answer (A, B, or C): ");
        String answer1 = scanner.next();

        if (answer1.equalsIgnoreCase("C")) {
            System.out.println("Correct!\n");
            score++;
        } else {
            System.out.println("Incorrect. The correct answer is C.\n");
        }

        // Question 2
        System.out.println("Question 2: Which planet is known as the 'Red Planet'?");
        System.out.println("A) Earth");
        System.out.println("B) Mars");
        System.out.println("C) Venus");
        System.out.print("Your answer (A, B, or C): ");
        String answer2 = scanner.next();

        if (answer2.equalsIgnoreCase("B")) {
            System.out.println("Correct!\n");
            score++;
        } else {
            System.out.println("Incorrect. The correct answer is B.\n");
        }

        // Question 3
        System.out.println("Question 3: How many continents are there on Earth?");
        System.out.println("A) 5");
        System.out.println("B) 6");
        System.out.println("C) 7");
        System.out.print("Your answer (A, B, or C): ");
        String answer3 = scanner.next();

        if (answer3.equalsIgnoreCase("C")) {
            System.out.println("Correct!\n");
            score++;
        } else {
            System.out.println("Incorrect. The correct answer is C.\n");
        }

        System.out.println("Quiz complete! Your score: " + score + " out of 3");
    }
}
