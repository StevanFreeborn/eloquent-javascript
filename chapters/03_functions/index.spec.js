import { describe, expect, it } from "vitest";
import { countBs, countChar, isEven, minimum } from "./index.js";

describe('minimum', () => {
  it('should return the smaller of two numbers', () => {
    expect(minimum(0, 10)).toBe(0);
    expect(minimum(0, -10)).toBe(-10);
    expect(minimum(0, 0)).toBe(0);
  });
});

describe('isEven', () => {
  it('should return whether a number is even', () => {
    expect(isEven(null)).toBe(false);
    expect(isEven(undefined)).toBe(false);
    expect(isEven(50)).toBe(true);
    expect(isEven(75)).toBe(false);
    expect(isEven(-1)).toBe(false);
    expect(isEven(-2)).toBe(true);
  });
});

describe('countBs', () => {
  it('should return the number of uppercase B characters in a string', () => {
    expect(countBs(null)).toBe(0);
    expect(countBs(undefined)).toBe(0);
    expect(countBs('')).toBe(0);
    expect(countBs('BBC')).toBe(2);
    expect(countBs('bbC')).toBe(0);
    expect(countBs('bbc')).toBe(0);
  });
});

describe('countChar', () => {
  it('should return the number of a given character in a string', () => {
    expect(countChar(null, 'a')).toBe(0);
    expect(countChar(undefined, 'a')).toBe(0);
    expect(countChar('', 'a')).toBe(0);
    expect(countChar('BBC', 'B')).toBe(2);
    expect(countChar('bbC', 'B')).toBe(0);
    expect(countChar('bbc', 'B')).toBe(0);
  });
});