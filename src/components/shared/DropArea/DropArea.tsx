"use client";
import { ActiveCard } from "../kanban-view/page";
import { StatusMenuWithButton } from "../status-menu/StatusMenuWithButton";
import styles from "./DropArea.module.css";
import { useCallback, useMemo, useState } from "react";

type Props = {
    onDrop: () => void;
    activeCard: ActiveCard;
    position: string;
};

export default function DropArea({ onDrop, activeCard, position }: Props) {
    const [showDrop, setShowDrop] = useState<boolean>(false);

    const handleDragEnter = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setShowDrop(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        const relatedTarget = e.relatedTarget as Node;
        if (!e.currentTarget.contains(relatedTarget)) {
            setTimeout(() => {
                setShowDrop(false);
            }, 100);
        }
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            onDrop();
            setShowDrop(false);
        },
        [onDrop]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
    }, []);

    const dropAreaClass = useMemo(() => {
        if (showDrop) {
            return styles.dropArea;
        }
        return position === "top" ? styles.hideDropTop : styles.hideDropBottom;
    }, [showDrop, position]);
    return (
        <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={dropAreaClass}
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
