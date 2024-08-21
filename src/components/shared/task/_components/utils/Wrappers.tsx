import styles from "./styles.module.css";
import ToDoButton from "../to-do-button/ToDoButton";
import { ReactElement } from "react";

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

export { ListWrapper };
