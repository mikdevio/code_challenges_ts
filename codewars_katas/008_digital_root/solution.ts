/* 008_digital_root
  Digital root is the recursive sum of all the digits in a number.

  Given n, take the sum of the digits of n. If that value has more than one digit, 
  continue reducing in this way until a single-digit number is produced. The input 
  will be a non-negative integer. */

export const digitalRoot = (n: number): number => {
  const arrayStr = n.toString().split("")
  const sumNumber = arrayStr.map(Number).reduce((a, value) => a+value, 0);
  if(sumNumber === arrayStr.map(Number)[0]){
    return sumNumber;
  }
  return digitalRoot(sumNumber);
};

describe("solution", () => {
  it('should work for fixed tests', () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(195), 6);
    assert.equal(digitalRoot(992), 2);
    assert.equal(digitalRoot(999999999999), 9);
    assert.equal(digitalRoot(167346), 9);
    assert.equal(digitalRoot(10), 1);
    assert.equal(digitalRoot(0), 0);
    assert.equal(digitalRoot(200), 2);
  });
  
  it('should work for random tests', () => {
    
    const myDigitalRoot = (n:number):number => {
      return n < 10 ?
             n :
             myDigitalRoot([...n.toString()].map(Number).reduce((acc, cur) => acc + cur, 0));
    };

    const generateRandom = (): number[] => {
      const biggestNumber: number = 999999999999;
      let arrOfRandom: number[] = Array.from({length: 10}, (_) => Math.random());
      return arrOfRandom.map(n => Math.floor(n * biggestNumber));
    };
    
    generateRandom().forEach(n => {
      assert.equal(digitalRoot(n), myDigitalRoot(n), `Testing for n = ${n}`);
    });
  });
});
