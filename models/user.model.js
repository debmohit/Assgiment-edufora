const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userid: {type: String, required: true}, // twitte id of user
  name:  {type: String},
  screen_name: {type:String},
  type : { type: String, enum: ['FOLLOWER', 'FOLLOWING', 'SELF'], default: 'SELF' },
  location: {type:String},
  ctrd: { type: Date, default: Date.now}, // time when record was inserted
})

module.exports = mongoose.model('users', userSchema)
