/**
 * @summary Returns the maximum of two numbers.
 * @param {number} a - The first number to compare.
 * @param {number} b - The second number to compare.
 * @returns {number} The smaller of the two numbers.
 */
export function minimum(a, b) {
  return a < b ? a : b;
}

/**
 * @summary Returns whether a number is even.
 * @param {number} n - The number to check.
 * @returns {boolean} Whether the number is even.
 */
export function isEven(n) {
  if (n === null || n === undefined) {
    return false;
  }

  // if n is negative, make it positive
  if (n < 0) {
    return isEven(-n);
  }

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  return isEven(n - 2);
}

/**
 * @summary Returns the number of uppercase 'B' characters in a string.
 * @param {string} str - The string to search.
 * @returns {number} The number of uppercase 'B' characters.
 */
export function countBs(str) {
  return countChar(str, 'B');
}

export function countChar(str, char) {
  if (!str) {
    return 0;
  }

  return str.split('').filter(c => c === char).length;
}