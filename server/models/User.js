const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: String,
  role: { type: String, enum: ['staff', 'manager', 'supplier'] },
  department: { type: String, default: " "},
  dateJoined: { type: String, default: Date.now},
  profileImage: { type: String, default: "/uploads/avatars/default.png"},
  bannerImage: { type: String, default: " " },
})

module.exports = mongoose.model('User', userSchema);