import Ember from 'ember';

export default Ember.Controller.extend({
  saveNewItem(){
    // console.log(Ember) //baby
    this.store.createRecord('chefs', {
      name: { teste: this.get('newName') },
      description: this.get('newDescription'),
      numberStudents: this.get('newNumberStudents'),
      fame: this.get('newFame'),
      health: this.get('newHealth'),
      restaurant: this.get('newRestaurant'),
      imageUrl: this.get('newImageUrl'),
      isHere: this.get('newIsHere'),
    }).save();
  }
});
