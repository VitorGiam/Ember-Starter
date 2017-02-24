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

  this.route('foods', function() {});
  this.route('food', {path: '/food/:name'});
  this.route('chefs');
  this.route('chef', {path: '/chef/:name'});
  this.route('page-not-found', { path: '/*wildcard'});
  this.route('libraries', function() {
    this.route('new');
  });

  this.route('training', function() {
    this.route('trainer', {path: '/trainer/:name'} );
    this.route('new');
    this.route('edit');
  });
});

export default Router;
