import Component from '@ember/component';

export default Component.extend({
	playing: false,

	actions: {
		// The reason this is broken right now is that it is creating a new instance of 'vocals' each time the div is pressed, so it's not stopping when you press it a second time.
		playSound () {
			var vocals = new Howl({
				src: ['/audio/example-beat.mp3'],
				onend: function() {
					console.log('hello>>');
				}
			}),
				playing = this.get('playing');


			// If it's playing, turn it off
			// If it's off, turn it on
			if (!playing) {
				console.log('playing!');

				this.set('playing', true);


				vocals.play();
			} else {
				vocals.stop();

				this.set('playing', false);
				vocals.stop();

				console.log('stopping!');
			}
			//
			//
			// // Switch 'playing' property
			// this.set('playing', !this.get('playing'));
			// console.log('playing2?', this.get('playing'));
		}
	}
});
