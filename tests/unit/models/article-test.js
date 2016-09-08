import { moduleForModel, test } from 'ember-qunit';
import get from 'ember-metal/get';

moduleForModel('article', 'Unit | Model | article', {
  // Specify the other units that are required for this test.
  needs: ['model:author', 'model:comment']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should own many comments', function(assert) {
  const Article = this.store().modelFor('article');
  const relationship = get(Article, 'relationshipsByName').get('comments');

  assert.equal(relationship.key, 'comments', 'has relationship with comments');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});

test('should belong to an author', function(assert) {
  const Article = this.store().modelFor('article');
  const relationship = get(Article, 'relationshipsByName').get('author');

  assert.equal(relationship.key, 'author', 'has relationship with author');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});