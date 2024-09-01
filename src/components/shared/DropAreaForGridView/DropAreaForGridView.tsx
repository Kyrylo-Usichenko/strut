"use client";
import { ActiveCard } from "../kanban-view/page";
import { StatusMenuWithButton } from "../status-menu/StatusMenuWithButton";
import styles from "./DropAreaForGridView.module.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
    onDrop: () => void;
    activeCard: ActiveCard;
    position: string;
};

export default function DropAreaForGridView({ onDrop, activeCard, position }: Props) {
    const [showDrop, setShowDrop] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const checkOverlap = useCallback(
        (e: MouseEvent) => {
            if (ref.current && activeCard) {
                const rect = ref.current.getBoundingClientRect();
                if (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                ) {
                    setShowDrop(true);
                } else {
                    setShowDrop(false);
                }
            }
        },
        [activeCard]
    );

    const handleMouseUp = useCallback(
        (e: MouseEvent) => {
            if (showDrop) {
                console.log("From drop Area");
                onDrop();
                setShowDrop(false);
            }
        },
        [showDrop, onDrop]
    );

    useEffect(() => {
        document.addEventListener("mousemove", checkOverlap);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", checkOverlap);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [checkOverlap, handleMouseUp]);

    const dropAreaClass = useMemo(() => {
        if (showDrop) {
            return position === "top" ? styles.dropArea : styles.dropAreaBottom;
        }
        return position === "top" ? styles.hideDropTop : styles.hideDropBottom;
    }, [showDrop, position]);

    return (
        <div
            ref={ref}
            className={dropAreaClass}
            style={activeCard !== null ? { display: "block" } : { display: "none" }}
        >
            {showDrop && (
                <>
                    <div className={styles.title}>{activeCard?.content.header}</div>
                    {activeCard?.content.data.map((item, index) => (
                        <div key={index} className={styles.item}>
                            {item}
                        </div>
                    ))}
                    <div className={styles.icon}>
                        <StatusMenuWithButton />
                        {activeCard?.content.tags.map((item, index) =>
                            item.isChecked ? (
                                <div key={index} className={styles.tagText}>
                                    {item.text}
                                </div>
                            ) : null
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
