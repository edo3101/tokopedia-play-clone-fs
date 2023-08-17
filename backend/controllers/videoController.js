const videoService = require('../services/videoService.js');
const mongoose = require('mongoose');

async function getAllVideo(req, res) {
  try {
    const video = await videoService.getAllVideoService()
    res.status(200).json(video);
    console.log(video)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch video.' });
  }
}

async function getVideoById(req, res) {
    try {
        const {id} = req.params
        const video = await videoService.getVideoByIdService(id)
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: `${id} is not a ObjectId format in Mongo`,
            });
        }
        res.status(200).json(video);
        console.log(video)
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch video.' });
    }
  }

module.exports = {
  getAllVideo,
  getVideoById,
};