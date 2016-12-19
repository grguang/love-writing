const mongoose = require('mongoose')

var postSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: { type: String }
  }
)
module.exports = mongoose.model('Post', postSchema);
