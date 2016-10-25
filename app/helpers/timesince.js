import Ember from 'ember';

export function timesince(params) {
  var currentTime = moment();
  var articleTime = new Date(params[0]);
  console.log("currentTime " + currentTime);
  console.log("articleTime " + articleTime);
  var difference = currentTime.getMinutes() - articleTime.getMinutes();
  return difference;
}

export default Ember.Helper.helper(timesince);
