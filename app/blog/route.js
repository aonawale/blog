import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    navigateToResource: function(resource) {
      this.transitionTo('article', resource);
    }
  }
});
