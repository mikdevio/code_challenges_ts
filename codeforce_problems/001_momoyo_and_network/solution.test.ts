// 001_momoyo_and_network

import { assert } from "chai";
import { optimizeMinimumChunk } from "./solution";

describe("Simple test", () => {
  it("Should be equal to", () => {
    assert.equal(optimizeMinimumChunk(
      [1,2,3,4],
      [
        [1,2],
        [2,3],
        [3,4]
      ]), 4);
  });

});
