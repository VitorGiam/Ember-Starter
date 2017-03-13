import Ember from 'ember';

export default Ember.Route.extend({
   model(params) {
     return this.store.findRecord('food', params.food_id);
  //   this.get('store').query('food', {
  //   filter: {
  //     name: 'cscsc'
  //   }
  // }).then(function(peters) {
  //   hue: kmdkmdmkcc
  // });
  }
});
