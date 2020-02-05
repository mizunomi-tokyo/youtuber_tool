import { TextFilterOperationData, AlignmentX, AlignmentY } from './textFilterOperationData'

const ffmpeg = require('fluent-ffmpeg');
const appRoot = require('app-root-path');

const outputPath = appRoot + '/output';
const resPath = appRoot + '/res';

export class TextFilterService {
    addTextToVideo(operations:TextFilterOperationData[], onProgressChanged: (progress: any) => void, onEnd: () => void, onError: (err: any) => void) {
        const options: VideoFilterOptions[] = this.convertToFilterOptions(operations);

        ffmpeg()
            .input(resPath + '/sample1.mp4')
            .videoFilters(options)
            .on('progress', (progress:any) => {
                onProgressChanged(progress.percent)
            })
            .on('end', () => {
                onEnd()
            })
            .on('error', (err: any) => {
                onError(err)
            })
            .save(outputPath + '/output1.mp4');
    }

    private convertToFilterOptions(operations:TextFilterOperationData[]): VideoFilterOptions[] {
        return operations.map(operation => {
            return {
                filter: 'drawtext',
                options: {
                    text: operation.text,
                    fontsize: operation.fontSize,
                    fontcolor: 'white',
                    x: this.calculateX(operation.alignmentX, operation.marginFromX),
                    y: this.calculateY(operation.alignmentY, operation.marginFromY),
                    enable: `between(t,${operation.from},${operation.to})`,
                }
            }
        });
    }

    private calculateX(alignmentX: AlignmentX, marginFromX: number): string {
        switch (alignmentX) {
            case AlignmentX.LEFT:
                return `(0 + ${marginFromX})`
            case AlignmentX.RIGHT:
                return `(main_w - text_w - ${marginFromX})`
            case AlignmentX.CENTER:
                return `(main_w/2 - text_w/2)`
        }
    }

    private calculateY(alignmentY: AlignmentY, marginFromY: number): string {
        switch (alignmentY) {
            case AlignmentY.TOP:
                return `(0 + ${marginFromY})`
            case AlignmentY.BOTTOM:
                return `(main_h - text_h - ${marginFromY})`
            case AlignmentY.CENTER:
                return `(main_h/2 - text_h/2)`
        }
    }
};

export type VideoFilterOptions = {
    filter: 'drawtext'
    options: {
        text: string
        fontsize: number,
        fontcolor: string,
        x: string,
        y: string,
        enable: string,
    }
}
