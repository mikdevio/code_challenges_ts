// 008_digital_root

import { assert } from "chai";
import { digitalRoot } from "./solution";

describe("Simple test digital root", () => {
  it("Should work for fixed test", () => {
    assert.equal(digitalRoot(16), 7);
    assert.equal(digitalRoot(456), 6);
  });
});
