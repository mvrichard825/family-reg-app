const mongoose = require('mongoose');

const familyMemberSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  relationship: String,
  contact: String,
  address: String
});

module.exports = mongoose.model('FamilyMember', familyMemberSchema);
