import java.util.Scanner;

public class Hangman {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] words = { "java", "programming", "hangman", "computer", "code" };
        String word = words[(int) (Math.random() * words.length)];
        StringBuilder guessedWord = new StringBuilder(new String(new char[word.length()]).replace('\0', '_'));
        int tries = 6;

        while (tries > 0 && guessedWord.toString().contains("_")) {
            System.out.println("Word: " + guessedWord);
            System.out.println("Tries left: " + tries);
            System.out.print("Guess a letter: ");
            char guess = scanner.next().charAt(0);

            if (word.contains(String.valueOf(guess))) {
                for (int i = 0; i < word.length(); i++) {
                    if (word.charAt(i) == guess) {
                        guessedWord.setCharAt(i, guess);
                    }
                }
            } else {
                tries--;
            }
        }

        if (guessedWord.toString().equals(word)) {
            System.out.println("Congratulations! You've guessed the word: " + word);
        } else {
            System.out.println("Sorry, you're out of tries. The word was: " + word);
        }

        scanner.close();
    }
}
