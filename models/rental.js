const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  rentalDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnDate: Date,
  status: { 
    type: String, 
    enum: ['rented', 'returned', 'overdue'], 
    default: 'rented' 
  },
  lateFee: { type: Number, default: 0 }
});

module.exports = mongoose.model('Rental', rentalSchema);
