const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
  });

var postModel = mongoose.model('Post', postSchema);
module.exports = postModel;