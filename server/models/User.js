const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: String,
  role: { type: String, enum: ['staff', 'manager', 'supplier'] }
})

module.exports = mongoose.model('User', userSchema);