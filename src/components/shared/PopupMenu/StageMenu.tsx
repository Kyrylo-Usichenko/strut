"use client";
import React, { FC } from "react";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import ArrowIcon from "~/components/icons/ArrowIcon";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import { PopupMenuComponent } from "./PopupMenuComponent";
import styles from "~/components/shared/PopupMenu/menu.module.css";
import s from "~/components/shared/PopupMenu/styles.module.css";

const items = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up", link: "" },
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];

const StageMenu: FC = () => {
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
                <PopupMenuComponent items={items} direction="bottom" visible={menu.isVisible} />
            </div>
        </div>
    );
};

export { StageMenu };
