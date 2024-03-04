# Island Area Calculator

This JavaScript script calculates the area of an island represented by a matrix of 1s and 0s, where 1 represents land and 0 represents water.

## Usage

1. Clone the repository:

    ```bash
    git clone [https://github.com/your-username/island-area-calculator.git](https://github.com/olegchobotar/ideas-island.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd ideas-island
    ```

3. Install dependencies (not required for this example, but your project may have dependencies in the future):

    ```bash
    # This example doesn't have dependencies, but you may have them in your project
    ```

4. Run the script:

    ```bash
    node island-calculator.js
    ```

5. Modify the `islandMatrix` variable in `island-calculator.js` to represent your own islands and run the script again.

## Example

```javascript
const islandMatrix = [
    [1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1]
];

const area = calculateIslandArea(islandMatrix);
console.log('Island Area:', area);
