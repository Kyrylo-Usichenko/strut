import React from "react";
import { PopupMenuItem } from "./PopupMenuItem";
import styles from "./menu.module.css";

export interface MenuItem {
    icon: JSX.Element;
    label: string;
    link: string;
}

type Props = {
    items: MenuItem[];
    direction?: "top" | "bottom" | "left" | "right";
    visible: boolean;
};
function PopupMenu({ items, direction, visible = false }: Props) {
    if (!visible) return null;
    return (
        <div className={`${styles.menu} ${direction ? styles[direction] : ""}`}>
            <div className={styles.items}>
                {items.map((item, index) => (
                    <PopupMenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export { PopupMenu };
