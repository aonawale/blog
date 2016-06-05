import DS from 'ember-data';

export default DS.Model.extend({
  fullName:                   DS.attr('string'),
  firstName:                  DS.attr('string'),
  lastName:                   DS.attr('string'),
  createdAt:                  DS.attr('date'),
  updatedAt:                  DS.attr('date')
});
