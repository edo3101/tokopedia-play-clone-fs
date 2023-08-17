const videoRepo = require('../repositories/videoRepo.js');

async function getAllVideoService() {
  return videoRepo.getAllVideo()
}

async function getVideoByIdService(id) {
    return videoRepo.getVideobyID(id)
  }  

module.exports = {
  getAllVideoService,
  getVideoByIdService
};