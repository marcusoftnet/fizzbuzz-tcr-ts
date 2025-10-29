import { describe, it, expect } from "vitest";
import { single, sequence } from ".";

describe("FizzBuzz single number", () => {
  const assertSingle = (input: number, expected: string) => {
    expect(single(input)).toBe(expected);
  };

  it('returns "1" for 1', () => assertSingle(1, "1"));
  it('returns "2" for 2', () => assertSingle(2, "2"));
  it('returns "Fizz" for 3', () => assertSingle(3, "Fizz"));
  it('returns "Buzz" for 5', () => assertSingle(5, "Buzz"));
  it('returns "Fizz" for 6', () => assertSingle(6, "Fizz"));
  it('returns "Buzz" for 10', () => assertSingle(10, "Buzz"));
  it('returns "FizzBuzz" for 15', () => assertSingle(15, "FizzBuzz"));
});

describe("FizzBuzz string", () => {
  const assertSequence = (start: number, end: number, expected: string) => {
    expect(sequence(start, end)).toBe(expected);
  };

  it('returns "1" for 1 to 1', () => {
    assertSequence(1, 1, "1");
  });

  it('returns "1, 2, Fizz" for 1 to 3', () => {
    assertSequence(1, 3, "1, 2, Fizz");
  });

  it("returns the correct string for 1 to 15", () => {
    assertSequence(
      1,
      15,
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"
    );
  });
});
