import Ember from 'ember';

export function preview(params) {
  return params[0].split(" ").slice(0,25).join(" ") + "...";
}

export default Ember.Helper.helper(preview);
