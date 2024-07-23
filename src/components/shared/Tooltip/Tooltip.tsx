"use client";
import React, { useState } from "react";
import styles from "./tooltip.module.css";

interface Props {
    label: string;
    keys?: string[];
    direction?: "top" | "bottom" | "left" | "right";
    children?: React.ReactNode;
}

function Tooltip({ label, keys, direction = "bottom", children }: Props) {
    const [show, setShow] = useState<boolean>(false);

    if (children) {
        return (
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className={styles.wrapper}>
                {children}
                {show && (
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
    );
}

export { Tooltip };
