import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { createPortal } from "react-dom";
import { PopupMenuItem } from "./PopupMenuItem";
import styles from "./menu.module.css";

const MIN_MARGIN = 4;

export interface MenuItem {
    icon: JSX.Element;
    label: string;
    onClick?: () => void;
}

function getPopupPosition(popupRef: HTMLDivElement | null) {
    if (popupRef) {
        const rect = popupRef.getBoundingClientRect();
        const scrollX = document.documentElement.scrollLeft;
        const scrollY = document.documentElement.scrollTop;
        return {
            x: Math.max(MIN_MARGIN, Math.min(rect.x + scrollX, window.innerWidth + scrollX - rect.width - MIN_MARGIN)),
            y: Math.max(MIN_MARGIN, Math.min(rect.y + scrollY, window.innerHeight + scrollY - rect.height - MIN_MARGIN))
        };
    }
    return { x: MIN_MARGIN, y: MIN_MARGIN };
}

type Props = {
    items: MenuItem[];
    direction?: "top" | "bottom" | "left" | "right";
    visible: boolean;
};

function PopupMenu({ items, direction, visible = false }: Props) {
    const popupRef = useRef<HTMLDivElement | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    // Update the position whenever the menu becomes visible or its size changes
    useLayoutEffect(() => {
        if (visible && popupRef.current) {
            setPopupPosition(getPopupPosition(popupRef.current));
        }
    }, [visible]);

    const popupContent = (
        <div className={styles.items}>
            {items.map((item, index) => (
                <PopupMenuItem key={index} {...item} />
            ))}
        </div>
    );

    return (
        visible && (
            <>
                <div
                    className={`${styles.menu} ${direction ? styles[direction] : ""}`}
                    ref={popupRef}
                    style={{ opacity: 0 }}
                >
                    {popupContent}
                </div>
                {createPortal(
                    <div
                        className={styles.menu}
                        style={{ top: popupPosition.y, left: popupPosition.x }}
                        onClick={() => console.log("clicked")}
                    >
                        {popupContent}
                    </div>,
                    document.body
                )}
            </>
        )
    );
}

export { PopupMenu };
