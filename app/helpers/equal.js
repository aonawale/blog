import Ember from 'ember';

const { isEqual } = Ember;

export function equal([leftSide, rightSide, rightMost]) {
  return isEqual(leftSide, rightSide) || isEqual(leftSide, rightMost);
}

export default Ember.Helper.helper(equal);
