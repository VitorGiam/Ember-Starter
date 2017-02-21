import Ember from 'ember';

export default Ember.Controller.extend({

  restaurant:{nome: 'Jurassik', hoursOpen: '24'},
  newItem: null,
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isAvaliable', true),
  availableItemsTotal: Ember.computed('availableItems', function(){
    return this.get('availableItems.length');
  }),
  //https://www.emberschool.com/course/1/73
  //Creating and Destroying Records :: Computing your Properties

  actions:{
    makeUnavaliable(food){
      Ember.set(food, 'isAvaliable', false);
      food.save();
    },
    makeAvaliable(food){
      Ember.set(food, 'isAvaliable', true);
      food.save();
    },
    saveNewItem(){
      this.store.createRecord('food',{
        isAvaliable: false,
        name: this.get('newItem')
      }).save();
      this.set('newItem', '')
    },
    destroyItem(food){
      food.destroyRecord();
    }
  }
});
/*
Example:

function tacoAlert(adjective, tooping){
  alert('Tacos are' + adjective + '!');
  alert('Melhor ainda com' + tooping);
}

function tacoString(adjective, tooping){
  return 'Tacos are' + adjective + '. Melhor ainda com' + tooping;
}

tacoAlert('bons','leite')
OU
tacoAlert(tacoString('bons','leite'))
*/
