"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import styles from "./tooltip.module.css";

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

        // if out of left screen
        if (rect.x < 0) {
            tooltipRef.style.transform = "translateX(0)";
            tooltipRef.style.left = `0px`;
            tooltipRef.style.right = "auto";
            console.log("out of left screen");
        }
        // if out of right screen
        if (rect.right > window.innerWidth) {
            tooltipRef.style.transform = "translateX(0)";
            tooltipRef.style.right = `0px`;
            tooltipRef.style.left = "auto";
        }
        // if out of top screen
        if (rect.y < 0) {
            tooltipRef.style.transform = "translateY(0)";
            tooltipRef.style.top = `0px`;
            tooltipRef.style.bottom = "auto";
        }
        // if out of bottom screen
        if (rect.bottom > window.innerHeight) {
            tooltipRef.style.transform = "translateY(0)";
            tooltipRef.style.bottom = `0px`;
            tooltipRef.style.top = "auto";
        }
    }
}

function Tooltip({ label, keys, direction = "bottom", children, display = "inline-block", visible = true }: Props) {
    const [isHovered, setHovered] = useState<boolean>(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    //for childfree tooltips
    useLayoutEffect(() => {
        if (tooltipRef.current) {
            outOfScreenHandler(tooltipRef.current);
        }
    }, []);

    //for wrapping tooltips
    useEffect(() => {
        if (isHovered && tooltipRef.current) {
            outOfScreenHandler(tooltipRef.current);
        }
    }, [isHovered]);

    if (children) {
        return (
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={styles.wrapper}
            >
                {children}
                {isHovered && visible && (
                    <div
                        className={`${styles.tooltip} ${styles[direction]}`}
                        style={{ padding: keys ? "4px 4px 4px 8px" : undefined }}
                        ref={tooltipRef}
                    >
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
                )}
            </div>
        );
    }

    return (
        <div
            className={`${styles.tooltip} ${styles[direction]}`}
            style={{ padding: keys ? "4px 4px 4px 8px" : undefined }}
            ref={tooltipRef}
        >
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
