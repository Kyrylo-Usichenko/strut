"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./tooltip.module.css";

const MIN_MARGIN = 4;

type Props = {
    label: string;
    keys?: string[];
    direction?: "top" | "bottom" | "left" | "right";
    children?: React.ReactNode;
    visible?: boolean;
};

function getTooltipPosition(tooltipRef: HTMLDivElement | null) {
    if (tooltipRef) {
        const rect = tooltipRef.getBoundingClientRect();
        const scrollX = document.documentElement.scrollLeft;
        const scrollY = document.documentElement.scrollTop;
        return {
            x: Math.max(MIN_MARGIN, Math.min(rect.x + scrollX, window.innerWidth + scrollX - rect.width - MIN_MARGIN)),
            y: Math.max(MIN_MARGIN, Math.min(rect.y + scrollY, window.innerHeight + scrollY - rect.height - MIN_MARGIN))
        };
    }
    return { x: MIN_MARGIN, y: MIN_MARGIN };
}

function Tooltip({ label, keys, direction = "bottom", children, visible = true }: Props) {
    const [isHovered, setHovered] = useState<boolean>(false);
    const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    //for childfree tooltips
    useLayoutEffect(() => {
        if (tooltipRef.current) {
            setTooltipPosition(getTooltipPosition(tooltipRef.current));
        }
    }, []);

    //for wrapping tooltips
    useEffect(() => {
        if (isHovered && tooltipRef.current) {
            setTooltipPosition(getTooltipPosition(tooltipRef.current));
        }
    }, [isHovered]);

    const tooltipContent = (
        <>
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
        </>
    );

    if (children) {
        return (
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={styles.wrapper}
            >
                {children}
                {isHovered && visible && (
                    <>
                        <div
                            className={`${styles.tooltip} ${styles[direction]}`}
                            style={{ opacity: 0, padding: keys ? "4px 4px 4px 8px" : undefined }}
                            ref={tooltipRef}
                        >
                            {tooltipContent}
                        </div>
                        {createPortal(
                            visible && (
                                <div
                                    className={`${styles.tooltip}`}
                                    style={{
                                        top: tooltipPosition.y,
                                        left: tooltipPosition.x,
                                        padding: keys ? "4px 4px 4px 8px" : undefined
                                    }}
                                >
                                    {tooltipContent}
                                </div>
                            ),
                            document.body
                        )}
                    </>
                )}
            </div>
        );
    }

    return (
        <>
            <div
                className={`${styles.tooltip} ${styles[direction]}`}
                style={{ opacity: 0, padding: keys ? "4px 4px 4px 8px" : undefined }}
                ref={tooltipRef}
            >
                {tooltipContent}
            </div>
            {createPortal(
                visible && (
                    <div
                        className={`${styles.tooltip}`}
                        style={{
                            top: tooltipPosition.y,
                            left: tooltipPosition.x,
                            padding: keys ? "4px 4px 4px 8px" : undefined
                        }}
                    >
                        {tooltipContent}
                    </div>
                ),
                document.body
            )}
        </>
    );
}

export { Tooltip };
