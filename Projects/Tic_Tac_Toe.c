#include <stdio.h>
#include <stdbool.h>

char board[3][3];
int currentPlayer = 1;
bool isGameOver = false;

void initializeBoard() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            board[i][j] = ' ';
        }
    }
}

void drawBoard() {
    printf(" %c | %c | %c \n", board[0][0], board[0][1], board[0][2]);
    printf("---+---+---\n");
    printf(" %c | %c | %c \n", board[1][0], board[1][1], board[1][2]);
    printf("---+---+---\n");
    printf(" %c | %c | %c \n", board[2][0], board[2][1], board[2][2]);
}

bool isMoveValid(int row, int col) {
    if (row < 0 || row >= 3 || col < 0 || col >= 3) {
        return false;
    }
    return board[row][col] == ' ';
}

bool isWin() {
    for (int i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ') {
            return true;
        }
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' ') {
            return true;
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        return true;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        return true;
    }
    return false;
}

bool isDraw() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (board[i][j] == ' ') {
                return false;
            }
        }
    }
    return true;
}

void makeMove(int row, int col) {
    if (isMoveValid(row, col)) {
        board[row][col] = (currentPlayer == 1) ? 'X' : 'O';
        currentPlayer = 3 - currentPlayer;
    }
}

int main() {
    initializeBoard();
    
    while (!isGameOver) {
        drawBoard();
        int row, col;
        printf("Player %d's turn (row [0-2] and column [0-2]): ", currentPlayer);
        scanf("%d %d", &row, &col);
        makeMove(row, col);
        
        if (isWin()) {
            drawBoard();
            printf("Player %d wins!\n", 3 - currentPlayer);
            isGameOver = true;
        } else if (isDraw()) {
            drawBoard();
            printf("It's a draw!\n");
            isGameOver = true;
        }
    }
    
    return 0;
}
