import { describe, it, expect } from "vitest";
import { single } from ".";

describe("FizzBuzz single number", () => {
  const asserSingle = (input: number, expected: string) => {
    const result = single(input);
    expect(result).toBe(expected);
  };

  it('returns "1" for 1', () => {
    asserSingle(1, "1");
  });

  it('returns "2" for 2', () => {
    const result = single(2);
    expect(result).toBe("2");
  });
});