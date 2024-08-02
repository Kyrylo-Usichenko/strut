import { useState, createElement, ReactElement } from "react";
import styles from "./styles.module.css";
import { ItemType } from "../../Task.types";
import ToDoButton from "../to-do-button/ToDoButton";

export default function TaskItem({
    text,
    textType,
    bold,
    italic,
    strikethrough,
    link,
    listType,
    highlighted,
    onChange
}: ItemType) {
    const [currentText, setCurrentText] = useState<string>(text || "");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentText(e.target.value || "");
        if (onChange) {
            onChange({
                text: e.target.value || "",
                textType,
                bold,
                italic,
                strikethrough,
                link,
                listType,
                highlighted
            });
        }
    }

    const textElement = createElement(
        textType || "p",
        {
            contentEditable: true,
            suppressContentEditableWarning: true,
            className: `${styles[textType || "p"]} ${currentText === "" ? styles.isEmpty : ""}`,
            value: currentText,
            dataPlaceholder: textType === "documentTitle" ? "Untitled" : "Type something...",
            onChange: handleChange,
            style: { outline: "none", border: "none", boxShadow: "none", WebkitBoxShadow: "none" }
        },
        currentText
    );

    return (
        <BoldWrapper condition={bold}>
            <ItalicWrapper condition={italic}>
                <StrikethroughWrapper condition={strikethrough}>
                    <LinkWrapper link={link}>
                        <MarkWrapper condition={highlighted}>
                            <ListWrapper listType={listType}>{textElement}</ListWrapper>
                        </MarkWrapper>
                    </LinkWrapper>
                </StrikethroughWrapper>
            </ItalicWrapper>
        </BoldWrapper>
    );
}

function BoldWrapper({ condition, children }: { condition: boolean | undefined; children: ReactElement }) {
    if (!condition) {
        return children;
    }
    return <strong>{children}</strong>;
}

function ItalicWrapper({ condition, children }: { condition: boolean | undefined; children: ReactElement }) {
    if (!condition) {
        return children;
    }
    return <em>{children}</em>;
}

function StrikethroughWrapper({ condition, children }: { condition: boolean | undefined; children: ReactElement }) {
    if (!condition) {
        return children;
    }
    return <s>{children}</s>;
}

function LinkWrapper({ link, children }: { link: string | undefined; children: ReactElement }) {
    if (!link) {
        return children;
    }
    return <a href="${link}">{children}</a>;
}

function BulletedListItemWrapper({ condition, children }: { condition: boolean | undefined; children: ReactElement }) {
    if (!condition) {
        return children;
    }
    return <li>{children}</li>;
}

function NumberedListItemWrapper({ condition, children }: { condition: boolean | undefined; children: ReactElement }) {
    if (!condition) {
        return children;
    }
    return <li>{children}</li>;
}

function ToDoListItemWrapper({
    condition,
    isChecked,
    children
}: {
    condition: boolean | undefined;
    isChecked: boolean | undefined;
    children: ReactElement;
}) {
    if (!condition) {
        return children;
    }
    return (
        <div className={styles.toDoDiv}>
            <ToDoButton state={isChecked} />
            {children}
        </div>
    );
}

function ListWrapper({ listType, children }: { listType: string | undefined; children: ReactElement }) {
    switch (listType) {
        case "bulleted":
            return <BulletedListItemWrapper condition={listType === "bulleted"}>{children}</BulletedListItemWrapper>;
        case "numbered":
            return <NumberedListItemWrapper condition={listType === "numbered"}>{children}</NumberedListItemWrapper>;
        case "toDoChecked":
            return (
                <ToDoListItemWrapper condition={listType === "toDoChecked"} isChecked={true}>
                    {children}
                </ToDoListItemWrapper>
            );
        case "toDoUnchecked":
            return (
                <ToDoListItemWrapper condition={listType === "toDoUnchecked"} isChecked={false}>
                    {children}
                </ToDoListItemWrapper>
            );
        default:
            return children;
    }
}

function MarkWrapper({ condition, children }: { condition: boolean | undefined; children: ReactElement }) {
    if (!condition) {
        return children;
    }
    return <mark>{children}</mark>;
}
