import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  classNameBindings: ['active'],
  attributeBindings: ['viewBox'],
  viewBox: '0 0 600 600',
  layoutName: function() {
    return 'components/icons/' + this.get('type');
  }.property('type')
});
