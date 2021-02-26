var assert = require('assert');
var add = require('../index.js');
describe('Add', function() {
  describe('add()', function() {
    it('should be ok', function() {
      assert.equal(add(0,0), 0);
    });
  });
});
