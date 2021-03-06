import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  body:                     attr('string'),
  createdAt:                attr('date'),
  updatedAt:                attr('date'),
  article:                  belongsTo('article')
});
