var expect = require('power-assert'),
    foo = require('../src/js/entry');

describe('foo module', function(){
  it ('should get right value', function() {
    assert(foo.hello() === 'Hello!');
  });
});
