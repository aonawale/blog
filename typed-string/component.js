import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$("#typedElement")
    .typed({"cursorChar":"|","contentType":"html","loop":true,"loopCount":0,"typeSpeed":100,"backSpeed":50,"startDelay":300,"backDelay":500,"showCursor":true,"strings":["iOS Developer","Javascript Developer"]});
  }
});
