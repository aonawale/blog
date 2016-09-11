import DS from 'ember-data';

export default DS.Model.extend({
  title:                      DS.attr('string'),
  body:                       DS.attr('string'),
  author:                     DS.belongsTo('author'),
  createdAt:                  DS.attr('date'),
  updatedAt:                  DS.attr('date'),
  excerpt:                    DS.attr('string')
});
