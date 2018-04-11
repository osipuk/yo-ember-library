import Component from '@ember/component';

export default Component.extend({
	classNames: ['drop-into-box__wrapper'],

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

			if (!this.get('playing')) {
				this.set('playing', true);

				_.forEach(vocalsWithHowl, function(sound) {
					sound.play();
				});
			} else {
				_.forEach(vocalsWithHowl, function(sound) {
					sound.stop();
				});

				this.set('playing', false);
			}

		}
	}
});
