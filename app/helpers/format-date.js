import Ember from 'ember';

export function formatDate([date]) {
  return moment(date).format('MMMM D, YYYY');
}

export default Ember.Helper.helper(formatDate);
