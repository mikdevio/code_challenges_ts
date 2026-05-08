
import {assert} from "chai";
import {narcissistic} from "./solution";

describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(narcissistic(7)).to.equal(true, '7 is narcissistic');
    expect(narcissistic(153)).to.equal(true, '153 is narcissistic');
    expect(narcissistic(1634)).to.equal(true, '1634 is narcissistic');
  });
});

describe('Random tests', () => {
  function randomNumber(min: number, max: number) {
    return ~~(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 20; i += 1){
    const num = randomNumber(0, 9999);
    const res = narcissistic(num);

    it(`Testing for ${num}`, () => {
      expect(narcissistic(num)).to.equal(narcissistic(num), `${num} is ${res ? '' : 'not'} narcissistic`);
    });
  }
});

describe('Additional tests', () => {
  const nums = [8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051];

  nums.forEach((num) => {
    const res = narcissistic(num);

    it(`Testing for ${num}`, () => {
      expect(narcissistic(num)).to.equal(narcissistic(num), `${num} is ${res ? '' : 'not'} narcissistic`);
    })
  })
});