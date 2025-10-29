import { describe, it, expect } from "vitest";
import { single } from ".";

describe("FizzBuzz single number", () => {
  it('returns "1" for 1', () => {
    const result = single(1);
    expect(result).toBe("1");
  });
});