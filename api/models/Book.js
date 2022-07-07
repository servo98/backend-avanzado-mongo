import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  author: [String],
  title: String,
  category: String,
  editorial: String,
  printingDate: Date,
  pageNumber: Number,
  isbn: String,
  languaje: String,
  cover: String,
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;
