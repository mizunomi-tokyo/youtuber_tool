const ffmpeg = require('fluent-ffmpeg');
const appRoot = require('app-root-path');

const outputPath = appRoot + '/output';
const resPath = appRoot + '/res';

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