"use client";
import React, { useState } from "react";
import styles from "./tooltip.module.css";
import w from "./wrappers.module.css";

type Props = {
    label: string;
    keys?: string[];
    direction?: "top" | "bottom" | "left" | "right";
    display?: "inline-block" | "flex";
    children?: React.ReactNode;
    visible?: boolean;
};

function outOfScreenHandler(tooltipRef: HTMLDivElement | null) {
    if (tooltipRef) {
        const rect = tooltipRef.getBoundingClientRect();
        console.log(rect);
        //if out of left screen
        if (rect.x < 0) {
            tooltipRef.style.left = "100%";
        }
    }
}

function Tooltip({ label, keys, direction = "bottom", children, display = "inline-block", visible = true }: Props) {
    const [isHovered, setHovered] = useState<boolean>(false);
    const wrapper = display === "flex" ? w.wrapperFlex : w.wrapperInlineBlock;

    if (children) {
        return (
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={wrapper}>
                {children}
                {isHovered && visible && (
                    <div className={`${styles.wrappingTooltip} ${styles[direction]}`}>
                        <span>{label}</span>
                        {keys && (
                            <div className={styles.wrappingKeys}>
                                {keys.map((key, index) => (
                                    <kbd key={index} className={styles.wrappingKey}>
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
        <div className={`${styles.tooltip} ${styles[direction]}`} ref={(node) => outOfScreenHandler(node)}>
            <span>{label}</span>
            {keys && (
                <div className={styles.keys}>
                    {keys.map((key, index) => (
                        <span key={index} className={styles.key}>
                            {key}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export { Tooltip };
