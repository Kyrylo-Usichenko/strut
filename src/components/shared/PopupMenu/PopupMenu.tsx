"use client";
import React, { FC } from "react";
import ExportIcon from "~/components/icons/ExportIcon";
import EyeIcon from "~/components/icons/EyeIcon";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { PopupMenuComponent } from "./PopupMenuComponent";
import { useVisible } from "./utils/useVisible";
import styles from "~/components/shared/PopupMenu/menu.module.css";
import s from "~/components/shared/PopupMenu/styles.module.css";

const items = [
    { icon: <ExportIcon />, label: "Export to Markdown", link: "" },
    { icon: <EyeIcon />, label: "Hide from Sidebar", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" },
    { icon: <DuplicateIcon />, label: "Duplicate Workspace", link: "" }
];

function PopupMenu() {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.container} ref={ref}>
            <button onClick={handleButtonClick} className={s.button}>
                <ThreeDotsIcon />
            </button>
            <PopupMenuComponent items={items} direction="right" visible={isVisible} />
        </div>
    );
};
export { PopupMenu };
