const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: { type: String, required: true, maxLength: 100 },
    comment: { type: String, required: true, maxLength: 100 },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "videos",
        required: true
    },
});

module.exports = mongoose.model('comments', commentSchema);