import { notEmpty } from '@ember/object/computed';
// import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  soundType: DS.attr('string'),
  audioLocation: DS.attr('string'),
  isValid: notEmpty('name')
});
