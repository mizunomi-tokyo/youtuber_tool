const ffmpeg = require('fluent-ffmpeg');

const outputPath = require('./fileConstants').outPutPath;
const resPath = require('./fileConstants').resPath;

export function takeScreenShot() {
    ffmpeg()
        .input(resPath + '/sample1.mp4')
        .screenshot({
            count: 1,
            folder: outputPath,
            filename: 'thumbnail.png',
        })
        .on('end', () => {
            console.log("image saved");
        })
        .on('error', (err: any) => {
            console.log(err);
        });
};