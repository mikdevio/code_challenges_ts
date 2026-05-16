// 002_add_two_numbers

import { assert } from "chai";
import { addTwoNumbers, LinkedList } from "./solution";

describe("Simple test", () => {
  it("Should be equal to", () =>{
    const l1 = new LinkedList().fromArray([2,4,3]);
    const l2 = new LinkedList().fromArray([5,6,4]);
    const res = addTwoNumbers(l1, l2);

    assert.deepEqual([...res], [7, 0, 8]);
  });

  it("Should be equal to", () => {
    const l1 = new LinkedList().fromArray([0]);
    const l2 = new LinkedList().fromArray([0]);

    const res = addTwoNumbers(l1, l2);

    assert.deepEqual([...res], [0]);
  });

  it("Should be equal to", () => {
    const l1 = new LinkedList().fromArray([9,9,9,9,9,9,9]);
    const l2 = new LinkedList().fromArray([9,9,9,9]);

    const res = addTwoNumbers(l1, l2);

    assert.deepEqual([...res], [8,9,9,9,0,0,0,1]);
  });

});
