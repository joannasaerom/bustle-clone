import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr(),
  isFeatured: DS.attr(),
  isClip: DS.attr(),
  image: DS.attr()
});
