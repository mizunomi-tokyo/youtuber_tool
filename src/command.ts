import { TextFilterService } from './service/textFilterService'
import { TextFilterOperationData, AlignmentX, AlignmentY } from './service/textFilterOperationData'

const cliProgress = require('cli-progress');

const textFilterService = new TextFilterService()
const operations = [] as TextFilterOperationData[];

operations.push({
    text: 'This is text1',
    from: 1,
    to: 2,
    alignmentX: AlignmentX.LEFT,
    marginFromX: 32,
    alignmentY: AlignmentY.TOP,
    marginFromY: 32,
    fontSize: 120,
}, {
    text: 'This is text2',
    from: 4,
    to: 6,
    alignmentX: AlignmentX.RIGHT,
    marginFromX: 32,
    alignmentY: AlignmentY.BOTTOM,
    marginFromY: 32,
    fontSize: 150,
}, {
    text: 'This is text3',
    from: 5,
    to: 7,
    alignmentX: AlignmentX.CENTER,
    marginFromX: 0,
    alignmentY: AlignmentY.BOTTOM,
    marginFromY: 50,
    fontSize: 80,
}, {
    text: 'This is text4',
    from: 9,
    to: 11,
    alignmentX: AlignmentX.CENTER,
    marginFromX: 0,
    alignmentY: AlignmentY.CENTER,
    marginFromY: 0,
    fontSize: 200,
});

const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
progressBar.start(100, 0);

textFilterService.addTextToVideo(operations, progress => {
    progressBar.update(Math.round(progress));
}, () => {
    progressBar.stop()
}, (err) => {
    console.log(err)
});
