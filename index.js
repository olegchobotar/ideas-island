// Function to calculate the area of an island
function calculateIslandArea(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    let islandArea = 0;

    // Helper function to perform DFS to explore the island
    function exploreIsland(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || matrix[row][col] === 0) {
            return;
        }

        // Mark the cell as visited
        matrix[row][col] = 0;

        // Increment the island area
        islandArea++;

        // Explore adjacent cells
        exploreIsland(row - 1, col); // Up
        exploreIsland(row + 1, col); // Down
        exploreIsland(row, col - 1); // Left
        exploreIsland(row, col + 1); // Right
    }

    // Iterate through the matrix to find islands
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) {
                // Start exploring the island from this cell
                exploreIsland(i, j);
            }
        }
    }

    return islandArea;
}

// Example usage
const islandMatrix = [
    [1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1]
];

const area = calculateIslandArea(islandMatrix);
console.log('Island Area:', area);
