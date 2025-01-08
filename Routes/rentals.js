const express = require('express');
const Rental = require('../models/rental');
const router = express.Router();

// Create Rental
router.post('/', async (req, res) => {
  try {
    const rental = new Rental(req.body);
    const savedRental = await rental.save();
    res.status(201).json(savedRental);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Rentals
router.get('/', async (req, res) => {
  try {
    const rentals = await Rental.find().populate('userId bookId');
    res.status(200).json(rentals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;