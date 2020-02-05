export type TextFilterOperationData = {
    text: string,
    from: number,
    to: number,
    alignmentX: AlignmentX,
    marginFromX: number,
    alignmentY: AlignmentY,
    marginFromY: number,
    fontSize: number,
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