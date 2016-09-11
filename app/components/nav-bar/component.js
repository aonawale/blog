import Ember from 'ember';

export default Ember.Component.extend({
  hidden: true,
  
  actions: {
    toggleNav() {
      this.toggleProperty('hidden');
    }
  }
});
