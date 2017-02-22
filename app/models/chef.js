import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

  description: attr('stirng'),
  fame: attr('number'),
  health: attr('number'),
  imageURL: attr('string'),
  isHere: attr('boolean'),
  name: attr('string'),
  numberStudents: attr('number'),
  restaurant: attr('string')
});
