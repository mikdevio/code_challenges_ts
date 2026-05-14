// 007_find_outlier

/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier"*/

export const findOutlier = (values: number[]):number => {
  // code goes here
  const isEven = (n: number):boolean => n%2===0;
  const isOdd = (n: number):boolean => n%2!==0;

  const oddNumbers: number[] = values.filter(isOdd);
  const evenNumbers: number[] = values.filter(isEven);
  
  if(oddNumbers.length === 1) {
    return oddNumbers[0]!;
  } else{
    return evenNumbers[0]!;
  };
};
