import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('date'),
  isFeatured: DS.attr(),
  isClip: DS.attr(),
  image: DS.attr('string')
});
