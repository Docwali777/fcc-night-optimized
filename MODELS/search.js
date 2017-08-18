const mongoose = require('mongoose');
let { Schema } = mongoose


const searchSchema = Schema({
  id: String,
  location: String,
  searchTerm: String,
  isGoing: {
    type: Number,
    default: 0
  }
})
module.exports = mongoose.model('searchTerm', searchSchema)
