import { assert } from "chai";
import { sumBinary} from "./solution";

describe("Sample tests", function() {
  it("Should return \"10\" for 1 + 1", function() {
    let actual = sumBinary(1,1);
    assert.strictEqual(actual, "10");
  });
  it("Should return \"1\" for 0 + 1", function() {
    let actual = sumBinary(0,1);
    assert.strictEqual(actual, "1");
  });
  it("Should return \"11\" for 1 + 2", function() {
    let actual = sumBinary(1,2);
    assert.strictEqual(actual, "11");
  });
  it("Should return \"111111\" for 51 + 12", function() {
    let actual = sumBinary(51,12);
    assert.strictEqual(actual, "111111");
  });
  it("Should return \"1100100\"", function() {
    let actual = sumBinary(100,0);
    assert.strictEqual(actual, "1100100");
  });
});
