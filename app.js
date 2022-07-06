const { mongoose } = require('./database');

const Book = mongoose.model('Book', {
  author: String,
  title: String,
});

// const newBook = new Book({
//   title: 'El mejor libro del mundo',
//   author: 'El mejor autor del libro',
// });

// newBook.save().then(console.log).catch(console.error);
