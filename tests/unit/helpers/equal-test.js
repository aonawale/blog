import { equal } from 'blog/helpers/equal';
import { module, test } from 'qunit';

module('Unit | Helper | equal');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.ok(equal([42, 42]));
  assert.ok(equal([42, 42, 42]));
  assert.notOk(equal([42, 41]));
});
