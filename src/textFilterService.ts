const ffmpeg = require('fluent-ffmpeg');

function addTextToVideo() {
    ffmpeg()
        .input('../res/sample1.mp4')
        .output('../res/output1.mp4')
}

exports.addTextToVideo = addTextToVideo;