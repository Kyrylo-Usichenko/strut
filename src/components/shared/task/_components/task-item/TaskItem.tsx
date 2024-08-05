import { useState, createElement, ReactElement } from "react";
import styles from "./styles.module.css";
import { ItemType } from "../../Task.types";
import {
    BoldWrapper,
    ItalicWrapper,
    StrikethroughWrapper,
    LinkWrapper,
    MarkWrapper,
    ListWrapper
} from "../util-wrappers/Wrappers";

export default function TaskItem({ text, textType, link, listType, onChange }: ItemType) {
    const [currentText, setCurrentText] = useState<string>(text || "");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentText(e.target.value || "");
        if (onChange) {
            onChange({
                text: e.target.value || "",
                textType,
                link,
                listType
            });
        }
    }

    const textElement = createElement(
        textType || "p",
        {
            className: `${listType ? styles[listType] : ""} ${styles[textType || "p"]} ${currentText === "" ? styles.isEmpty : ""}`,
            value: currentText,
            dataPlaceholder: textType === "documentTitle" ? "Untitled" : "Type something...",
            onChange: handleChange
        },
        currentText
    );

    return (
        <LinkWrapper link={link}>
            <ListWrapper listType={listType}>{textElement}</ListWrapper>
        </LinkWrapper>
    );
}
