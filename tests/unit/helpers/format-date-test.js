import { formatDate } from 'blog/helpers/format-date';
import { module, test } from 'qunit';

module('Unit | Helper | format date');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = formatDate(['2016-09-13T13:31:55+01:00']);
  assert.ok(result);
  assert.equal(result, 'September 13, 2016');
});
