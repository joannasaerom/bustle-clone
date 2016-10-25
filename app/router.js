import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('article-detail', {path: '/article-detail/:article_id'});
});

export default Router;
