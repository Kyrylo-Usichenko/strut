function createIndexMap(str: string): Map<number, number> {
    const indexMap = new Map<number, number>();
    Array.from(str).forEach((_, index) => {
        indexMap.set(index, index);
    });
    return indexMap;
}

let textIndexes = createIndexMap("0123456789");
function applyFormatting(text: string, tag: string, parts?: { start: number; end: number }[]) {
    if (!parts) return text;
    let formattedText = "";
    let lastIndex = 0;
    let newMap = new Map<number, number>();
    let oldStartingIndex = 0;
    let isAddingLastPart = true;

    parts.forEach((part) => {
        if (textIndexes.get(0) != 0) {
            oldStartingIndex = textIndexes.get(0) || 0;
        }
        if (part.end === textIndexes.size) {
            isAddingLastPart = false;
        }
        formattedText += text.slice(textIndexes.get(lastIndex), textIndexes.get(part.start));
        formattedText +=
            `<${tag} class=${tag}>` +
            text.slice(textIndexes.get(part.start), textIndexes.get(part.end) || undefined) +
            `</${tag}>`;
        textIndexes.forEach((value, key) => {
            if (key < part.start) {
                newMap.set(key, newMap.get(value) || value);
            } else if (key >= part.start && key < (part.end || text.length)) {
                newMap.set(key, (newMap.get(value) || value) + `<${tag} class=${tag}>`.length);
            } else {
                newMap.set(key, (newMap.get(value) || value) + `<${tag} class=${tag}>`.length + `</${tag}>`.length);
            }
        });
        lastIndex = textIndexes.get(part.end) || 0;
    });

    if (oldStartingIndex) {
        formattedText = text.slice(0, textIndexes.get(0)) + formattedText;
    }
    if (isAddingLastPart) {
        formattedText += text.slice(lastIndex);
    }
    textIndexes = newMap;
    return formattedText;
}

const formatted = applyFormatting("0123456789", "strong", [{ start: 3, end: 7 }]);
console.log(formatted, textIndexes);
const formatted2 = applyFormatting(formatted, "em", [{ start: 0, end: 9 }]);
console.log(formatted2, textIndexes);
const formatted3 = applyFormatting(formatted2, "s", [{ start: 2, end: 8 }]);
console.log(formatted3, textIndexes);
