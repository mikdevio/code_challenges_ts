// 007_find_outlier

import { assert } from "chai";
import { findOutlier } from "./solution";

it("Simple test", function() {
  assert.equal(findOutlier([0,1,2]), 1);
  assert.equal(findOutlier([1,2,3]), 2);
  assert.equal(findOutlier([2,6,8,10,3]), 3);
  assert.equal(findOutlier([0,0,3,0,0]), 3);
  assert.equal(findOutlier([1,1,0,1,1]), 0);
});

it('More complex tests', () => {
  const inputs = [
    [2, 6, 8, 10, 3],
    [2, 6, 8, 200, 700, 1, 84, 10, 4],
    [17, 6, 8, 10, 6, 12, 24, 36],
    [2, 1, 7, 17, 19, 211, 7],
    [1, 1, 1, 1, 1, 44, 7, 7, 7, 7, 7, 7, 7, 7],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 1000],
    [2, -6, 8, -10, -3],
    [2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4],
    [-100000000007, -18, 6, -8, -10, 6, 12, -24, 36],
    [-20, 1, 7, 17, 19, 211, 7],
    [1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7],
    [1, 0, 0],
    [3, 7, -99, 81, 90211, 0, 7],
  ];
  const expected = [3, 1, 17, 2, 44, 1000, -3, -35, -100000000007, -20, -44, 1, 0];

  for (let i = 0; i < inputs.length; i++) {
    assert.equal(findOutlier(inputs[i]), expected[i]);
  }
});

describe('Random tests', () => {
  const randint = (a: number, b: number): number => Math.floor(Math.random() * (b - a + 1) + a);

  for (let i = 0; i < 30; i++) {
    const testIntegers: number[] = [];
    const len = randint(3, 50);
    const base = 100000000;
    const k = randint(0, 1);
    for (let q = 0; q < len; q++) testIntegers.push(randint(-base, +base) * 2 + k);
    const pos = randint(0, len - 1);
    const expected = ++testIntegers[pos];

    it(`Testing for ${testIntegers}`, () => {
      assert.equal(findOutlier(testIntegers), expected);
    });
  }
});
