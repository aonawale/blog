
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('portfolio');
  this.route('blog');
  this.route('article', {path: 'blog/articles/:article_id'});
  this.route('404', {path: '/*wildcard'});
});

export default Router;
