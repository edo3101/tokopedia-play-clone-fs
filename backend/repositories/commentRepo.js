const comments = require('../models/comment.js');

async function getAllComment() {
    const getAllComment = await comments.find()

    return getAllComment
}

async function getCommentById(id) {
    const getcommentbyid = await comments.findById(id).exec()

    return getcommentbyid
}

async function getCommentByVideoId(video_id) {
    const getcommentbyvideoid = await comments.find({video_id: video_id}).exec()

    if (getcommentbyvideoid === null) {
        throw new Error(`comment with id : ${video_id} not found`);
    }

    return getcommentbyvideoid
}

async function create(comment) {
    const commentCreate = await comments.create(comment);

    return commentCreate
}


module.exports = { 
    getAllComment,
    getCommentById,
    getCommentByVideoId, 
    create 
};