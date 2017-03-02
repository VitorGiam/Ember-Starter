import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{

    saveNewItem(){
      this.store.createRecord('minion',{
        isAvaliable: false,
        nome: this.get('newItem')
      }).save();
      this.set('newItem', '');
    },
    destroyItem(minion){
      minion.destroyRecord();
    }
  }
});
