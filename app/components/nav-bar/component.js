import Ember from 'ember';

export default Ember.Component.extend({
  hidden: true,
  tagName: 'nav',
  classNames: ['navigation navbar'],
  
  actions: {
    toggleNav() {
      this.toggleProperty('hidden');
    }
  }
});
