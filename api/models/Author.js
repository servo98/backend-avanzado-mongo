import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  birthday: Date,
  lastName: String,
});

const AuthorModel = mongoose.model('Author', authorSchema);

export default AuthorModel;
