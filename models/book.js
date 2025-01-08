const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: [String],
  isbn: { type: String, required: true, unique: true },
  publicationDate: Date,
  genres: [String],
  copiesAvailable: { type: Number, default: 1 },
  totalCopies: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', bookSchema);
