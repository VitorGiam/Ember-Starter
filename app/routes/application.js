import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
    {name:'Tacos', isAvaliable: true},
    {name:'Salad', isAvaliable: true},
    {name:'Vegetables', isAvaliable: false},
    {name:'Fruit', isAvaliable: true}
    ]
  }
});
