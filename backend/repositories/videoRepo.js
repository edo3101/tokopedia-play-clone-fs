const videos = require('../models/video.js');

async function getAllVideo() {
    const getallvideos = await videos.find()

    return getallvideos
}

async function getVideobyID(id) {
    const videoById = await videos.findById(id)

    return videoById
}

module.exports = {
  getAllVideo,
  getVideobyID,
};