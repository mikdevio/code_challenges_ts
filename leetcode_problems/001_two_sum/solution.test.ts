// 001_two_sum

import { assert } from "chai";
import { twoSum } from "./solution";

describe("Simple test", () => {
  it("Should be equal to", () => {
    assert.deepEqual(twoSum([2,7,11,15], 9), [0,1]);
    assert.deepEqual(twoSum([3,2,4], 6), [1,2]);
    assert.deepEqual(twoSum([3,3], 6), [0,1]);
    assert.deepEqual(twoSum([0,1,2,3,4,5,6], 7), [1,6]);
  });
});
