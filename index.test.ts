import { describe, it, expect } from "vitest";
import { single } from ".";

describe("FizzBuzz single number", () => {
  const assertSingle = (input: number, expected: string) => {
    const result = single(input);
    expect(result).toBe(expected);
  };

  it('returns "1" for 1', () => {
    assertSingle(1, "1");
  });

  it('returns "2" for 2', () => {
    assertSingle(2, "2");
  });
});
