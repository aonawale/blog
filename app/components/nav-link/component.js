import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['page-scroll'],
  classNameBindings: ['active'],
  active: false,

  click: function(e) {
    $('.active').removeClass('active');
    $(e.target.parentElement).addClass('active');
  }
});
