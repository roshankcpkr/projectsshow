import java.util.Stack;

public class MazeSolver {
    public static void main(String[] args) {
        int[][] maze = {
            {1, 1, 1, 1, 1, 0, 0, 0, 0},
            {0, 0, 0, 0, 1, 0, 0, 0, 0},
            {0, 0, 0, 0, 1, 0, 0, 0, 0},
            {0, 0, 1, 1, 1, 0, 0, 0, 0},
            {0, 0, 0, 0, 0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0, 0, 0, 0, 0}
        };

        int startX = 0;
        int startY = 0;
        int endX = 5;
        int endY = 8;

        if (solveMaze(maze, startX, startY, endX, endY)) {
            System.out.println("Maze has a solution:");
            printMaze(maze);
        } else {
            System.out.println("Maze has no solution.");
        }
    }

    private static boolean solveMaze(int[][] maze, int x, int y, int endX, endY) {
        if (x == endX && y == endY) {
            maze[x][y] = 2;
            return true;
        }

        if (isValidMove(maze, x, y)) {
            maze[x][y] = 2;

            if (solveMaze(maze, x + 1, y, endX, endY) ||
                solveMaze(maze, x, y + 1, endX, endY) ||
                solveMaze(maze, x - 1, y, endX, endY) ||
                solveMaze(maze, x, y - 1, endX, endY)) {
                return true;
            }

            maze[x][y] = 0;
        }

        return false;
    }

    private static boolean isValidMove(int[][] maze, int x, int y) {
        return x >= 0 && x < maze.length &&
               y >= 0 && y < maze[0].length &&
               maze[x][y] == 1;
    }

    private static void printMaze(int[][] maze) {
        for (int[] row : maze) {
            for (int cell : row) {
                System.out.print(cell + " ");
            }
            System.out.println();
        }
    }
}
