"use client";
import React from "react";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import ArrowIcon from "~/components/icons/ArrowIcon";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import { PopupMenuComponent } from "./PopupMenuComponent";
import styles from "~/components/shared/PopupMenu/menu.module.css";
import s from "~/components/shared/PopupMenu/styles.module.css";

interface MenuItem {
    icon: JSX.Element;
    label: string;
    link: string;
}

const items: MenuItem[] = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up", link: "" },
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];
function StageMenu() {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.container} ref={ref}>
            <button onClick={handleButtonClick} className={s.button}>
                <ThreeDotsIcon />
            </button>
            <PopupMenuComponent items={items} direction="bottom" visible={isVisible} />
        </div>
    );
}

export { StageMenu };
