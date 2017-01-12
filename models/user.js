var mongoose = require('mongoose');

var schema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
mongoose.model('User', schema);