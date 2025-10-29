export const single = (n: number): string => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (isBuzz(n)) return "Buzz";
  if (isFizz(n)) return "Fizz";
  return n.toString();
};

const isFizz = (n: number): boolean => n % 3 === 0;
const isBuzz = (n: number): boolean => n % 5 === 0;

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i)

export const sequence = (start: number, end: number): string => {
  const arr = range(start, end);
  return arr.map(single).join(", ");
};
