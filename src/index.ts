import { TextFilterService, TextFilterOperationData, AlignmentX, AlignmentY } from './service/textFilterService'

const textFilterService = new TextFilterService()
const operations = [] as TextFilterOperationData[];

operations.push({
    text: 'This is text2',
    from: 3,
    to: 5,
    positionFromAlignment: [0, 50],
    alignmentX: AlignmentX.CENTER,
    alignmentY: AlignmentY.BOTTOM,
}, {
    text: 'This is text1',
    from: 1,
    to: 2,
    positionFromAlignment: [0, 50],
    alignmentX: AlignmentX.CENTER,
    alignmentY: AlignmentY.BOTTOM,
});

textFilterService.addTextToVideo(operations)
