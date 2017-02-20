import Ember from 'ember';

export default Ember.Controller.extend({
  name :'',
  favoriteFood: '',

  estaurant:{nome: 'Jurassik', yearOpen: 1},

  actions:{
    makeUnavaliable(food){
      Ember.set(food, 'isAvaliable', false);
      food.save();
    },
    makeAvaliable(food){
      Ember.set(food, 'isAvaliable', true);
      food.save();
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
