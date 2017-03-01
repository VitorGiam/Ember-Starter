import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('navbar');
  this.route('about');
  this.route('page-not-found', { path: '/*wildcard'});

  this.route('foods');
  this.route('food', {path: 'foods/food/:name'});

  this.route('chefs');
  this.route('chef', {path: 'chefs/chefs/chef/:name'});
});

export default Router;
