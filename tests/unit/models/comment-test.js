import { moduleForModel, test } from 'ember-qunit';
import get from 'ember-metal/get';

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should belong to an article', function(assert) {
  const Comment = this.store().modelFor('comment');
  const relationship = get(Comment, 'relationshipsByName').get('article');

  assert.equal(relationship.key, 'article', 'has relationship with article');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});