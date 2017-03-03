import Ember from 'ember';

// const { get } = Ember; //baby

export default Ember.Controller.extend({
  actions:{

    saveNewItem(){
      // console.log(Ember) //baby
      this.store.createRecord('food', {
        name: { teste: this.get('newName') },
        description: this.get('newDescription'),
        seasoning: this.get('newSeasoning'),
        ingerdient: this.get('newIngerdient')
      }).save();
    }
  }
});
