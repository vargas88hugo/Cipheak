const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Class definition of the user model
 */
const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema)