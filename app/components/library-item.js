import Component from '@ember/component';

export default Component.extend({
	playing: false,

	init () {
		this._super(...arguments);

		var vocals = new Howl({
			src: ['/audio/example-beat.mp3'],
			onend: function() {
				console.log('hello>>');
			}
		});

		this.set('vocals', vocals);
	},

	actions: {
		clickSound () {
			var vocals = this.get('vocals');

			// If it's playing, turn it off
			// If it's off, turn it on
			if (!this.get('playing')) {
				console.log('playing1!', this.get('playing'));

				this.set('playing', true);

				console.log('playing2!', this.get('playing'));

				vocals.play();
			} else {
				console.log('playing3!', this.get('playing'));

				vocals.stop();

				this.set('playing', false);
				console.log('playing4!', this.get('playing'));
			}
		}
	}
});
