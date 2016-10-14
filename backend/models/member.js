var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var memberSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  avatar_url: { type: String }
});

module.exports = mongoose.model('Member', memberSchema);  