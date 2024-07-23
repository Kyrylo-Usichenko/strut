"use client";
import React, { FC } from "react";
import { PopupMenuComponent } from "./PopupMenuComponent";
import ExportIcon from "~/components/icons/ExportIcon";
import EyeIcon from "~/components/icons/EyeIcon";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { useVisible } from "./utils/useVisible";
import styles from "~/components/shared/PopupMenu/menu.module.css";
import s from "~/components/shared/PopupMenu/styles.module.css";

const items = [
    { icon: <ExportIcon />, label: "Export to Markdown", link: "" },
    { icon: <EyeIcon />, label: "Hide from Sidebar", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" },
    { icon: <DuplicateIcon />, label: "Duplicate Workspace", link: "" }
];

const PopupMenu: FC = () => {
    const menu = useVisible(false);
    const menu2 = useVisible(false);

    const handleButtonClick = () => {
        menu.setIsVisible(!menu.isVisible);
    };
    const handleButton2Click = () => {
        menu2.setIsVisible(!menu2.isVisible);
    };

    return (
        <div className={s.wrapper}>
            <div className={styles.container} ref={menu.ref}>
                <button onClick={handleButtonClick} className={s.button}>
                    <ThreeDotsIcon />
                </button>
                <div>
                    <PopupMenuComponent items={items} direction="bottom" visible={menu.isVisible} />
                </div>
            </div>
            <div className={styles.container} ref={menu2.ref}>
                <button onClick={handleButton2Click} className={s.button}>
                    <ThreeDotsIcon />
                </button>
                <div>
                    <PopupMenuComponent items={items} direction="right" visible={menu2.isVisible} />
                </div>
            </div>
        </div>
    );
};
export { PopupMenu };
