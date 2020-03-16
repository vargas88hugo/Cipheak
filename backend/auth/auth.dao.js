const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
  create: function(data, callback) {
    const user = new this(data);

    user.save(callback);
  },
  login: function(query, callback) {
    this.find(query, callback);
  }
}

const authModel = mongoose.model('Users', authSchema);

module.exports = authModel;