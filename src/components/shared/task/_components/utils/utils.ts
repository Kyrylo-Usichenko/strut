import styles from "./styles.module.css";

function createIndexMap(str: string): Map<number, number> {
    const indexMap = new Map<number, number>();
    Array.from(str).forEach((_, index) => {
        indexMap.set(index, index);
    });
    return indexMap;
}

function applyFormatting(
    text: string,
    textIndexes: Map<number, number>,
    tag: string,
    className?: string,
    parts?: { start: number; end: number }[]
): [string, Map<number, number>] {
    if (!parts) return [text, textIndexes];
    let formattedText = "";
    let lastIndex = 0;
    let newMap = new Map<number, number>();
    let oldStartingIndex = 0;
    let isAddingLastPart = true;

    parts.forEach((part) => {
        if (textIndexes.get(0) != 0) {
            oldStartingIndex = textIndexes.get(0) || 0;
        }
        if (!part.end) {
            part.end = textIndexes.size;
        }
        if (part.end === textIndexes.size) {
            isAddingLastPart = false;
        }
        formattedText += text.slice(textIndexes.get(lastIndex), textIndexes.get(part.start));
        formattedText +=
            `<${tag}${className ? ` class="${styles[className]}"` : ""}>` +
            text.slice(textIndexes.get(part.start), textIndexes.get(part.end) || undefined) +
            `</${tag}>`;
        textIndexes.forEach((value, key) => {
            if (key < part.start) {
                newMap.set(key, newMap.get(value) || value);
            } else if (key >= part.start && key < (part.end || text.length)) {
                newMap.set(
                    key,
                    (newMap.get(value) || value) + `<${tag}${className ? ` class="${styles[className]}"` : ""}>`.length
                );
            } else {
                newMap.set(
                    key,
                    (newMap.get(value) || value) +
                        `<${tag}${className ? ` class="${styles[className]}"` : ""}>`.length +
                        `</${tag}>`.length
                );
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
    return [formattedText, newMap];
}

function applyLinks(
    text: string,
    textIndexes: Map<number, number>,
    parts?: { start: number; end: number; url: string }[]
): [string, Map<number, number>] {
    if (!parts) return [text, textIndexes];
    let linkedText = "";
    let lastIndex = 0;
    let newMap = new Map<number, number>();

    parts.forEach((part) => {
        linkedText += text.slice(textIndexes.get(lastIndex), textIndexes.get(part.start));
        linkedText +=
            `<a href="${part.url}" class="${styles.link}">` +
            text.slice(textIndexes.get(part.start), textIndexes.get(part.end) || undefined) +
            `</a>`;
        textIndexes.forEach((value, key) => {
            if (key < part.start) {
                newMap.set(key, newMap.get(value) || value);
            } else if (key >= part.start && key < (part.end || text.length)) {
                newMap.set(key, (newMap.get(value) || value) + `<a href="${part.url}" class=link>`.length);
            } else {
                newMap.set(
                    key,
                    (newMap.get(value) || value) + `<a href="${part.url}" class=link>`.length + `</a>`.length
                );
            }
        });
        lastIndex = textIndexes.get(part.end) || 0;
    });

    linkedText += text.slice(lastIndex);
    return [linkedText, newMap];
}

function applyAllFormattings(
    text: string,
    boldParts?: { start: number; end: number }[],
    italicParts?: { start: number; end: number }[],
    strikethroughParts?: { start: number; end: number }[],
    highlightedParts?: { start: number; end: number }[],
    linkParts?: { start: number; end: number; url: string }[]
) {
    let formattedText = text;
    let textIndexes = createIndexMap(text);
    [formattedText, textIndexes] = applyFormatting(formattedText, textIndexes, "strong", undefined, boldParts);
    [formattedText, textIndexes] = applyFormatting(formattedText, textIndexes, "em", undefined, italicParts);
    [formattedText, textIndexes] = applyFormatting(formattedText, textIndexes, "s", undefined, strikethroughParts);
    [formattedText, textIndexes] = applyFormatting(formattedText, textIndexes, "mark", "mark", highlightedParts);
    [formattedText, textIndexes] = applyLinks(formattedText, textIndexes, linkParts);
    return formattedText;
}

function mergeOverlappingIntervals(intervals: { start: number; end: number }[]) {
    const sortedIntervals = intervals.sort((a, b) => a.start - b.start);
    const mergedIntervals = [sortedIntervals[0]];
    for (let i = 1; i < sortedIntervals.length; i++) {
        const currentInterval = sortedIntervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
        if (currentInterval.start <= lastMergedInterval.end) {
            lastMergedInterval.end = Math.max(currentInterval.end, lastMergedInterval.end);
        } else {
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}

export { applyAllFormattings, mergeOverlappingIntervals };
