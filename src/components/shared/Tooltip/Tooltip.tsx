"use client";
import React, { useState } from "react";
import styles from "./tooltip.module.css";

type Props = {
    label: string;
    keys?: string[];
    direction?: "top" | "bottom" | "left" | "right";
    display?: "inline-block" | "flex";
    children?: React.ReactNode;
    visible?: boolean;
};

function Tooltip({ label, keys, direction = "bottom", children, display = "inline-block", visible = true }: Props) {
    const [isHovered, setHovered] = useState<boolean>(false);
    if (children) {
        return (
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={styles.wrapper}
            >
                {children}
                {isHovered && visible && (
                    <div className={`${styles.tooltip} ${styles[direction]}`}>
                        <span>{label}</span>
                        {keys && (
                            <div className={styles.keys}>
                                {keys.map((key, index) => (
                                    <kbd key={index} className={styles.key}>
                                        {key}
                                    </kbd>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
    return (
        visible && (
            <div className={`${styles.tooltip2} ${styles[direction]}`}>
                <span>{label}</span>
                {keys && (
                    <div className={styles.keys}>
                        {keys.map((key, index) => (
                            <kbd key={index} className={styles.key}>
                                {key}
                            </kbd>
                        ))}
                    </div>
                )}
            </div>
        )
    );
}

export { Tooltip };
