import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({

  description: attr(),
  fame: attr(),
  health: attr(),
  imageURL: attr(),
  isHere: attr(),
  name: attr(),
  numberStudents: attr(),
  restaurant: attr()
  
});
