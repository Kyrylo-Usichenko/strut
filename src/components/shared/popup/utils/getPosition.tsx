export interface Position {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}


export function getPosition(position: Position) {
    const finalPosition: Partial<Position> = {};
    if (position) {
        if (position.top) {
            finalPosition["top"] = position.top;
        }
        if (position.right) {
            finalPosition["right"] = position.right;
        }
        if (position.bottom) {
            finalPosition["bottom"] = position.bottom;
        }
        if (position.left) {
            finalPosition["left"] = position.left;
        }
    }
    return finalPosition;
}