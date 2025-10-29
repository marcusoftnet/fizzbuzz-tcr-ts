export const single = (n: number): string => {
  if(n === 5) return "Buzz";
  if(n === 3) return "Fizz";
  return n.toString();
};
