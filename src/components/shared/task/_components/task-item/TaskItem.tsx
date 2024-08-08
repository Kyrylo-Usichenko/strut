import { useState, createElement } from "react";
import styles from "./styles.module.css";
import { ItemType } from "../../Task.types";
import { ListWrapper } from "../utils/Wrappers";
import { applyAllFormattings } from "../utils/utils";

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

    const formattedText = applyAllFormattings(
        currentText,
        boldParts,
        italicParts,
        strikethroughParts,
        highlightedParts,
        linkParts
    );

    const textElement = createElement(textType === "documentTitle" ? "h1" : textType || "p", {
        className: `${listType ? styles[listType] : ""} ${styles[textType || "p"]} ${currentText === "" ? styles.isEmpty : ""}`,
        value: currentText,
        dataplaceholder: textType === "documentTitle" ? "Untitled" : "Type something...",
        id: id,
        istaskitem: "true",
        onBlur: handleChange,
        dangerouslySetInnerHTML: { __html: formattedText }
    });

    return <ListWrapper listType={listType}>{textElement}</ListWrapper>;
}
