import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  birthday: Date,
  lastName: String,
});

export default mongoose.model('Author', authorSchema);
