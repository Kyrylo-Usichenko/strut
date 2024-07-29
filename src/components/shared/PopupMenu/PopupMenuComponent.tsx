import React from "react";
import { PopupMenuItem } from "./PopupMenuItem";
import styles from "./menu.module.css";

type Props = {
    items: { icon: JSX.Element; label: string; link: string }[];
    direction?: "top" | "bottom" | "left" | "right";
    visible: boolean;
};
function PopupMenuComponent({ items, direction = "bottom", visible = false }: Props) {
    if (!visible) return null;
    return (
        <div className={`${styles.menu} ${styles[direction]}`}>
            <div className={styles.items}>
                {items.map((item, index) => (
                    <PopupMenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export { PopupMenuComponent };
