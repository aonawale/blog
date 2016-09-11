import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  fullName:                 attr('string'),
  firstName:                attr('string'),
  lastName:                 attr('string'),
  createdAt:                attr('date'),
  updatedAt:                attr('date'),
  articles:                 hasMany('article')
});
