import Ember from 'ember';

export default Ember.Controller.extend({

  restaurant:{nome: 'Jurassik', hoursOpen: '24'},

  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isHere', true),
  availableItemsTotal: Ember.computed('availableItems', function(){
    return this.get('availableItems.length');
  }),

  actions:{
    makeUnavaliable(chef){
      Ember.set(chef, 'isHere', false);
      chef.save();
    },
    makeAvaliable(chef){
      Ember.set(chef, 'isHere', true);
      chef.save();
    },
    // saveNewItem(){
    //   this.store.createRecord('chef',{
    //     isHere: true,
    //     name: this.get('newItem')
    //   }).save();
    //   this.set('newItem', '');
    // },
    destroyItem(chef){
      chef.destroyRecord();
    }
  }
});
