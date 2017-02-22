import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: attr('string'),
  isAvaliable: attr('boolean')
});
