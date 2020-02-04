const ffmpeg = require('fluent-ffmpeg');
const appRoot = require('app-root-path');

const outputPath = appRoot + '/output';
const resPath = appRoot + '/res';

export class TextFilterService {
    addTextToVideo(operations:TextFilterOperationData[]) {
        const options = operations.map(function(operation) {
            const x = `(main_w/2 - text_w/2)`
            const y = `(main_h - text_h - 50)`
            const enable = `between(t,${operation.from},${operation.to})`

            return {
                filter: 'drawtext',
                options: {
                    text: operation.text,
                    fontsize: 120,
                    fontcolor: 'white',
                    x: x,
                    y: y,
                    enable: enable,
                }
            }
        });

        ffmpeg()
            .input(resPath + '/sample1.mp4')
            .videoFilters(options)
            .on('progress', (progress:any) => {
                console.log('progress... ' + Math.round(progress.percent) + '%');
            })
            .on('end', () => {
                console.log("video saved");
            })
            .on('error', (err: any) => {
                console.log(err);
            })
            .save(outputPath + '/output1.mp4');
    }
}

export type TextFilterOperationData = {
    text: string,
    from: number,
    to: number,
    positionFromAlignment: [number, number],
    alignmentX: AlignmentX,
    alignmentY: AlignmentY,
}

export enum AlignmentX {
    LEFT,
    CENTER,
    RIGHT,
}

export enum AlignmentY {
    TOP,
    CENTER,
    BOTTOM,
}