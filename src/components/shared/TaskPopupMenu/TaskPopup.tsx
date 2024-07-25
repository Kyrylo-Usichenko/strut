"use client";
import React from "react";
import { TaskPopupComponent } from "./TaskPopupComponent";
import ExportIcon from "~/components/icons/ExportIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import styles from "~/components/shared/PopupMenu/menu.module.css";
import s from "~/components/shared/PopupMenu/styles.module.css";

interface MenuItem {
    icon: JSX.Element;
    label: string;
    link: string;
}

const items: MenuItem[] = [
    { icon: <TrashBinIcon />, label: "Delete Document", link: "" },
    { icon: <ExportIcon />, label: "Export Markdown", link: "" }
];

const docInfo = { words: 1, chars: 5, time: 1 };
function TaskPopup() {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={s.wrapper}>
            <div className={styles.container} ref={ref}>
                <button onClick={handleButtonClick} className={s.button}>
                    <ThreeDotsIcon />
                </button>
                <TaskPopupComponent items={items} docInfo={docInfo} visible={isVisible} />
            </div>
        </div>
    );
};

export { TaskPopup };
