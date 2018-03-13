import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveLibrary(newLibrary) {
          newLibrary.save().then(() => this.transitionToRoute('libraries'));
        }
    }
});
