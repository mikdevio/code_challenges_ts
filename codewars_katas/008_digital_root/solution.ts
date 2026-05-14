/* 008_digital_root
  Digital root is the recursive sum of all the digits in a number.

  Given n, take the sum of the digits of n. If that value has more than one digit, 
  continue reducing in this way until a single-digit number is produced. The input 
  will be a non-negative integer. */

export const digitalRoot = (n: number): number => {
  const arrayStr = n.toSting().split("")
  return arrayStr.map(Number).reduce((a, value) => a+value, 0);
};
