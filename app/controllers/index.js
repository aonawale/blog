import Ember from 'ember';

export default Ember.Controller.extend({
  cursorChar: '|',
  contentType: 'html',
  loop: true,
  loopCount: 0,
  typeSpeed: 100,
  backSpeed: 50,
  startDelay: 300,
  backDelay: 500,
  showCursor: true,
  strings: ['iOS', 'Javascript']
});
