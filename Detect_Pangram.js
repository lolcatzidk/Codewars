const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});

function isPangram(string){ //my input
  let str=string.split(' ').join('').replace(/[\W\d]/g,'').toLowerCase().split('')
  if ([...new Set(str)].length==26) {
    return true
  }
  else {
    return false
  }
}
