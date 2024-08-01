import React from "react";
import { PopupMenuItem } from "../PopupMenu/PopupMenuItem";
import styles from "../PopupMenu/menu.module.css";
import task from "./task.module.css";

type Props = {
    items: { icon: JSX.Element; label: string; link: string }[];
    direction?: "top" | "bottom" | "left" | "right";
    docInfo: { words: number; chars: number; time: number };
    visible: boolean;
};

function TaskPopup({ items, docInfo, direction, visible = false }: Props) {
    if (!visible) return null;
    return (
        <div className={`${styles.menu} ${direction ? styles[direction] : ""}`}>
            <div className={styles.items}>
                {items.map((item, index) => (
                    <PopupMenuItem key={index} {...item} />
                ))}
            </div>
            <div className={task.info}>
                <p>
                    <span>Word count:</span>
                    <span>{docInfo.words}</span>
                </p>
                <p>
                    <span>Characters count:</span>
                    <span>{docInfo.chars}</span>
                </p>
                <p>
                    <span>Reading time:</span>
                    <span>{docInfo.time}s</span>
                </p>
            </div>
        </div>
    );
}

export { TaskPopup };
