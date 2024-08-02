import { useState, ReactElement } from "react";
import styles from "./styles.module.css";
import { ContentType, TaskContentProps, ItemType } from "../../Task.types";
import TaskItem from "../task-item/TaskItem";

function mapContent(
    content: ContentType,
    handleChange: (index: number, updatedItem: ItemType) => void
): ReactElement[] {
    const elements: ReactElement[] = [];
    let currentListType: string | null = null;
    let listItems: ReactElement[] = [];

    content.forEach((contentItem, index) => {
        const taskItem = (
            <TaskItem
                key={index}
                {...contentItem}
                onChange={(updatedItem: ItemType) => handleChange(index, updatedItem)}
            />
        );

        if (contentItem.listType === "bulleted" || contentItem.listType === "numbered") {
            if (contentItem.listType !== currentListType) {
                if (listItems.length > 0) {
                    elements.push(
                        currentListType === "bulleted" ? (
                            <ul key={`ul-${index}`}>{listItems}</ul>
                        ) : (
                            <ol key={`ol-${index}`}>{listItems}</ol>
                        )
                    );
                    listItems = [];
                }
                currentListType = contentItem.listType;
            }
            listItems.push(taskItem);
        } else {
            if (listItems.length > 0) {
                elements.push(
                    currentListType === "bulleted" ? (
                        <ul key={`ul-${index}`}>{listItems}</ul>
                    ) : (
                        <ol key={`ol-${index}`}>{listItems}</ol>
                    )
                );
                listItems = [];
                currentListType = null;
            }
            elements.push(taskItem);
        }
    });

    if (listItems.length > 0) {
        elements.push(currentListType === "bulleted" ? <ul>{listItems}</ul> : <ol>{listItems}</ol>);
    }

    return elements;
}

export default function TaskContent({ content, setContent }: TaskContentProps) {
    const [currentContent, setCurrentContent] = useState<ContentType>(
        content.length > 0 ? content : [{ text: "", textType: "documentTitle" }]
    );

    function handleChange(index: number, updatedItem: ItemType) {
        const newContent = [...currentContent];
        newContent[index] = updatedItem;
        setCurrentContent(newContent);
        setContent(newContent);
    }

    return <div className={styles.taskContent}>{mapContent(currentContent, handleChange)}</div>;
}
