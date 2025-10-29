import { describe, it, expect } from "vitest";
import { single } from ".";

describe("FizzBuzz single number", () => {
  const assertSingle = (input: number, expected: string) => {
    expect(single(input)).toBe(expected);
  };

  it('returns "1" for 1', () => assertSingle(1, "1"));
  it('returns "2" for 2', () => assertSingle(2, "2"));
  it('returns "Fizz" for 3', () => assertSingle(3, "Fizz"));
  it('returns "Buzz" for 5', () => assertSingle(5, "Buzz"));
});
