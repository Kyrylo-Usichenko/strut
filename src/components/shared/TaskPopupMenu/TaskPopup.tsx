"use client";
import React, { FC } from "react";
import { TaskPopupComponent } from "./TaskPopupComponent";
import ExportIcon from "~/components/icons/ExportIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import styles from "~/components/shared/PopupMenu/menu.module.css";
import s from "~/components/shared/PopupMenu/styles.module.css";

const items = [
    { icon: <TrashBinIcon />, label: "Delete Document", link: "" },
    { icon: <ExportIcon />, label: "Export Markdown", link: "" }
];

const docInfo = { words: 1, chars: 5, time: 1 };

const TaskPopup: FC = () => {
    const menu = useVisible(false);
    const handleButtonClick = () => {
        menu.setIsVisible(!menu.isVisible);
    };

    return (
        <div className={s.wrapper}>
            <div className={styles.container} ref={menu.ref}>
                <button onClick={handleButtonClick} className={s.button}>
                    <ThreeDotsIcon />
                </button>
                <TaskPopupComponent items={items} docInfo={docInfo} visible={menu.isVisible} />
            </div>
        </div>
    );
};

export { TaskPopup };
