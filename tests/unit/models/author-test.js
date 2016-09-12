import { moduleForModel, test } from 'ember-qunit';
import get from 'ember-metal/get';

moduleForModel('author', 'Unit | Model | author', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own many aticles', function(assert) {
  const Author = this.store().modelFor('author');
  const relationship = get(Author, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles', 'has relationship with articles');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});