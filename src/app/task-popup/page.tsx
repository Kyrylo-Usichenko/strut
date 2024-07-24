"use client";
import React, { FC, useState } from "react";
import { TaskPopupMenu } from "~/components/shared/TaskPopupMenu/TaskPopupMenu";
import ExportIcon from "~/components/icons/ExportIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import styles from "~/components/shared/PopupMenu/menu.module.css";

const items = [
    { icon: <TrashBinIcon />, label: "Delete Document", link: "" },
    { icon: <ExportIcon />, label: "Export Markdown", link: "" }
];

const docInfo = { words: 1, chars: 5, time: 1};

const TaskPopupPage:FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
                    <ThreeDotsIcon />
                </button>
                {isOpen && <TaskPopupMenu items={items} docInfo={docInfo}/>}
            </div>
        </div>
    );
};

export default TaskPopupPage;
