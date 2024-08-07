import { useState, createElement } from "react";
import styles from "./styles.module.css";
import { ItemType } from "../../Task.types";
import { ListWrapper } from "../util-wrappers/Wrappers";

type TaskItemProps = {
    text: string;
    textType: "documentTitle" | "h1" | "h2" | "h3" | "h4" | "p";
    listType?: "bulleted" | "numbered" | "toDoChecked" | "toDoUnchecked";
    boldParts?: { start: number; end: number }[];
    italicParts?: { start: number; end: number }[];
    strikethroughParts?: { start: number; end: number }[];
    highlightedParts?: { start: number; end: number }[];
    linkParts?: { start: number; end: number; url: string }[];
    id: string;
    onChange?: (updatedItem: ItemType) => void;
};

export default function TaskItem({
    text,
    textType,
    listType,
    boldParts,
    italicParts,
    strikethroughParts,
    highlightedParts,
    linkParts,
    id,
    onChange
}: TaskItemProps) {
    const [currentText, setCurrentText] = useState<string>(text || "");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentText(e.target.value || "");
        if (onChange) {
            onChange({
                text: e.target.value || "",
                textType,
                listType
            });
        }
    }

    function applyFormatting(text: string, tag: string, parts?: { start: number; end: number }[]) {
        if (!parts) return text;
        let formattedText = "";
        let lastIndex = 0;

        parts.forEach((part) => {
            formattedText += text.slice(lastIndex, part.start);
            formattedText += `<${tag} class=${tag}>` + text.slice(part.start, part.end || undefined) + `</${tag}>`;
            lastIndex = part.end;
        });

        formattedText += text.slice(lastIndex);
        return formattedText;
    }

    function applyLinks(text: string, parts?: { start: number; end: number; url: string }[]) {
        if (!parts) return text;
        let linkedText = "";
        let lastIndex = 0;

        parts.forEach((part) => {
            linkedText += text.slice(lastIndex, part.start);
            linkedText +=
                `<a href="${part.url}" class=${styles.link}>` + text.slice(part.start, part.end || undefined) + `</a>`;
            lastIndex = part.end;
        });

        linkedText += text.slice(lastIndex);
        return linkedText;
    }

    let formattedText = applyFormatting(currentText, "strong", boldParts);
    formattedText = applyFormatting(formattedText, "em", italicParts);
    formattedText = applyFormatting(formattedText, "s", strikethroughParts);
    formattedText = applyFormatting(formattedText, "mark", highlightedParts);
    formattedText = applyLinks(formattedText, linkParts);

    const textElement = createElement(textType === "documentTitle" ? "h1" : textType || "p", {
        className: `${listType ? styles[listType] : ""} ${styles[textType || "p"]} ${currentText === "" ? styles.isEmpty : ""}`,
        value: currentText,
        dataplaceholder: textType === "documentTitle" ? "Untitled" : "Type something...",
        id: id,
        istaskitem: "true",
        onChange: handleChange,
        dangerouslySetInnerHTML: { __html: formattedText }
    });

    return <ListWrapper listType={listType}>{textElement}</ListWrapper>;
}
