import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
import Controller from '@ember/controller';

export default Controller.extend({

	queryParams: ['filter', 'limit', 'letter'],
	filter: '',
	letter: '',
	limit: 'all',
	sources: [],
	ts:[],
 	sts:'',
	limitAll: equal('limit', 'all'),

	filteredList: computed('model.@each.name', 'filter', function() {

		let results = this.get('model');
		const query = this.get('filter');

		if (query) {
			// One of the best regular expression website: http://www.regexr.com/
			// Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
			const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
			// i: case insensitive, g: global
			const regex = new RegExp(regexString, 'ig');

			results = results.filter((item) => item.get('name').match(regex));
		}

		return results.sortBy('name');
	}),

	displaySourcesCopy: computed('sts', function() {
		var sources =[];
			sources = this.get('sources');
		console.log('de sources@ ', sources);
		return Ember.String.loc(sources); //htmlSafec //loc
	}),

	showPlayButton: computed('sts', function() {
		var sources =[];
			sources = this.get('sources');
		console.log('de sources@.lenth', sources.length);
		return sources.length > 0; //htmlSafec //loc
	}),

	actions: {
		addSound (vocals) {
			this.get('ts').push(vocals._src);
			this.set('sources',this.get('ts'));
			this.set('sts',vocals._src);
			console.log('sources:::', this.get('sources'));
		},

		removeSound (vocals) {
			var index = this.get('ts').indexOf(vocals._src);
			console.log('ts1:::', this.get('sources'));

			if (this.get('ts').length > 1) {
				this.get('ts').splice(index, 1);
			} else {
				this.set('ts', []);
			}
			console.log('ts2:::', this.get('sources'));
			this.set('sources',this.get('ts'));
			this.set('sts',vocals._src);
			console.log('sources:::', this.get('sources'));
		}
	}
});
