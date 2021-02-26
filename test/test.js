var assert = require('assert');
var add = require('../index.js');
describe('Add', function() {
  describe('add()', function() {
    it('should be ok', function() {
      assert.strictEqual(add(0,0), 0);
      assert.strictEqual(add(-1,1), 0);
      assert.strictEqual(add(-3.14,3.14), 0);
      assert.strictEqual(add(Math.sqrt(2),-Math.sqrt(2)), 0);
    });
  });
});
