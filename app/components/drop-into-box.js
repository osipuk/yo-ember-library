import Component from '@ember/component';

export default Component.extend({
	vocalsWithHowl: [],

	didReceiveAttrs () {
		this._super(...arguments);

		var sources = this.get('sources'),
				vocals = [];

		_.forEach(sources, function(source, i) {
				vocals[i] = new Howl({
					src: [source]
				});
		});

		this.set('vocalsWithHowl', vocals);
	},

	actions: {
		clickNewMix () {
			var vocalsWithHowl = this.get('vocalsWithHowl');

			_.forEach(vocalsWithHowl, function(sound) {
				sound.play();
			});
		}
	}
});
