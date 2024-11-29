/**
 * @summary - Prints a triangle with a given number of lines.
 * @param {number} numOfLines - The number of lines in the triangle.
 * @returns {void} - The triangle is printed to the console.
 */
export function printTriangle(numOfLines) {
  const lines = [];
  
  for (let i = 0; i < numOfLines; i++) {
    lines.push("#".repeat(i + 1));
  }

  const triangle = lines.join("\n");

  console.log(triangle);
}

/**
 * @summary - Prints the numbers from a lower bound to an upper bound. 
 * If the number is divisible by 3, print "Fizz". 
 * If the number is divisible by 5, print "Buzz". 
 * If the number is divisible by both 3 and 5, print "FizzBuzz".
 * Otherwise, print the number.
 * @param {number} lower - The lower bound of the range.
 * @param {number} upper - The upper bound of the range.
 * @returns {void} - The numbers are printed to the console.
 */
export function printFizzBuzz(lower, upper) {
  for (let i = lower; i <= upper; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "Fizz";
    }

    if (i % 5 === 0) {
      output += "Buzz";
    }

    console.log(output || i);
  }
}

/**
 * @summary - Prints a chessboard of the given size to the console.
 * @param {number} size - The size of the chess board to print
 * @returns {void} - The chessboard is printed to the console.
 */
export function printChessboard(size) {
  const EMPTY_SPACE = ' ';
  const POUND_SIGN = '#';
  const numOfRows = size;
  const numOfCols = size;
  const rows = [];

  for (let currRow = 0; currRow < numOfRows; currRow++) {
    const row = [];

    for (let currCol = 0; currCol < numOfCols; currCol++) {
      const character = (currRow + currCol) % 2 === 0
        ? EMPTY_SPACE
        : POUND_SIGN;
  
      row.push(character);
    }

    rows.push(row);
  }

  const board = rows.map(r => r.join('')).join('\n');

  console.log(board);
}