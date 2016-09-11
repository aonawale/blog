import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title:                    attr('string'),
  body:                     attr('string'),
  createdAt:                attr('date'),
  updatedAt:                attr('date'),
  excerpt:                  attr('string'),
  author:                   belongsTo('author'),
  comments:                 hasMany('comment')
});
