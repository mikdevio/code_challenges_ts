import {assert} from "chai";

import {stringEndsWith} from "./solution";

describe("Sample Test Cases", function(){
  it("Should return true or false", function() {
    assert.equal(stringEndsWith('abcde', 'cde'), true);
    assert.equal(stringEndsWith('abcde', 'abc'), false);
    assert.equal(stringEndsWith('abc', ''), true);
  });
});