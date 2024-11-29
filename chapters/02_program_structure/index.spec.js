import { afterEach, describe, expect, it, vi } from "vitest";
import { expectedFizzBuzzOutput } from "./data.js";
import { printChessboard, printFizzBuzz, printTriangle } from "./index.js";

describe("printTriangle", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should print a triangle", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    printTriangle(7);
    
    expect(spy).toHaveBeenCalledWith('#\n##\n###\n####\n#####\n######\n#######');
  });
});

describe("printFizzBuzz", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should print correct output for the numbers from 1 to 100", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    printFizzBuzz(1, 100);

    for (const output of expectedFizzBuzzOutput) {
      expect(spy).toHaveBeenCalledWith(output);
    }
  });
});

describe("printChessboard", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should print a chessboard of size 8', () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    
    printChessboard(8);

    expect(spy).toHaveBeenCalledWith(' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ')
  });

  it('should print chessboard of size 4', () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    
    printChessboard(4);

    expect(spy).toHaveBeenCalledWith(' # #\n# # \n # #\n# # ');
  })
});