import Ember from 'ember';

export default Ember.Controller.extend({
  newItem: null,

  actions:{

    saveNewItem(){
      this.store.createRecord('food',{
        isAvaliable: false,
        name: this.get('newItem')
      }).save();
      this.set('newItem', '');
    }

  }
});
