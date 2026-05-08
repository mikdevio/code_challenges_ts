import { describe, it } from 'vitest';
import { assert } from "chai";
import { duplicateCount } from "./solution";

describe("Sample Test Cases", () => {
  it("Should return the correct duplicate count", () => {
    assert.equal(duplicateCount("Indivisibility"), 1);
    assert.equal(duplicateCount("Indivisibilities"), 2);
    assert.equal(duplicateCount(''), 0);
  });
});