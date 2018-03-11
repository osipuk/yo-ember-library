import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveLibrary(newLibrary) {
        console.log('do it!', newLibrary);
          newLibrary.save().then(() => this.transitionToRoute('libraries'));
        }
    }
});
