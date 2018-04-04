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

	displaySourcesCopy: computed('sources.[]', function() {
		var sources = this.get('sources');

		console.log('de sources@ ', sources);

		return htmlSafe(sources);
	}),


	actions: {
		addSound (vocals) {
			// this.get('sources').push(src);
			this.get('sources').push(vocals._src);
			console.log('sources:::', this.get('sources'));
		}
	}
});
