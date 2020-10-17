const mongoose = require('mongoose');

const post = new mongoose.Schema({
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