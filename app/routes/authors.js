import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    // var newBook = this.store.createRecord('book', {
    //     title: 'the art of war'
    // }), newRecord = this.store.createRecord('author', {
    //     name: 'tommy',
    //     books: [newBook]
    // });
    //
    // newRecord.save();
    return this.store.findAll('author');
  },

  actions: {
        editAuthor(author) {
          author.set('isEditing', true);
        },

        cancelAuthorEdit(author) {
          author.set('isEditing', false);
          author.rollbackAttributes();
        },

        saveAuthor(author) {
          if (author.get('isNotValid')) {
            return;
          }

          author.set('isEditing', false);
          author.save();
      },
      addAuthor(authorName) {
        // if (author.get('isNotValid')) {
        //   return;
        // }

        console.log('authorName', authorName);
        var newAuthor = this.store.createRecord('author', {
            name: authorName
        });

        newAuthor.save();
    }
  }
});
