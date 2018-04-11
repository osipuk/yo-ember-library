import Component from '@ember/component';

export default Component.extend({
	playing: false,
	isDisabled: false,

	didReceiveAttrs () {
		this._super(...arguments);

		var locationString = this.get('item.audioLocation'),
			vocals = new Howl({
				src: ['/' + locationString]
			});

		this.set('vocals', vocals);
	},

	actions: {
		clickSound () {
			var vocals = this.get('vocals');

			// If it's playing, turn it off
			// If it's off, turn it on
			if (!this.get('playing')) {
				this.set('playing', true);

				vocals.play();
			} else {
				vocals.stop();

				this.set('playing', false);
			}
		},

		toggleDisable () {
			this.set('isDisabled', true);
		}
	}
});
