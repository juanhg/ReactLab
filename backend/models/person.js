var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var personSchema = new Schema({
  name: { type: String },
  lastname: { type: String },
  age: { type: Number },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
});

module.exports = mongoose.model('Person', personSchema);  