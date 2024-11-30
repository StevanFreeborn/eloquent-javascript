import { describe, expect, it } from 'vitest';
import { sum } from "./index.js";

describe('sum', () => {
  it('returns the sum of all numbers between start and end', () => {
    expect(sum(1, 10)).toBe(55);
    expect(sum(1, 100)).toBe(5050);
  });
});