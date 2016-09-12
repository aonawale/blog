import Ember from 'ember';

export function initialize() {
  Ember.Router.reopen({
    setBodyClass: function() {
      var routes = this.router.currentHandlerInfos,
          currentRoute = routes[routes.length - 1].name;

      Ember.$('body').removeClass(this.currentBodyClass);
      this.currentBodyClass = this.toCssClass(currentRoute);
      Ember.$('body').addClass(this.currentBodyClass);
    }.on('didTransition'),

    toCssClass: function(routeName) {
      return routeName.replace(/\./g, ' ');
    }
  });
}

export default {
  name: 'body-class',
  initialize: initialize
};
