import React from "react";
import { PopupMenuItem } from "./PopupMenuItem";
import styles from "./menu.module.css";

type Props = {
    items: { icon: JSX.Element; label: string; link: string }[];
    direction?: "top" | "bottom" | "left" | "right";
};

const PopupMenu: React.FC<Props> = ({ items, direction = "bottom" }) => {
    return (
        <div className={`${styles.menu} ${styles[direction]}`}>
            <div className={styles.items}>
                {items.map((item, index) => (
                    <PopupMenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export { PopupMenu };
