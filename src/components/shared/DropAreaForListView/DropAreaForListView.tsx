"use client";
import { ActiveCard } from "../board-list-view/page";
import LabelMenu from "../label-menu/LabelMenu";
import { StatusMenuWithButton } from "../status-menu/StatusMenuWithButton";
import styles from "./DropAreaForListView.module.css";
import { useCallback, useMemo, useState } from "react";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";
import { TaskPopupWithButton } from "../TaskPopupMenu/TaskPopupWithButton";

type Props = {
    onDrop: () => void;
    activeCard: ActiveCard;
    position: string;
};

export default function DropAreaForListView({ onDrop, activeCard, position }: Props) {
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
                    <div className={styles.leftSide}>
                        <button className={styles.chekedIcon}>
                            <SmallCheckIcon />
                        </button>

                        <div className={styles.textWithTags}>
                            <p className={styles.text}>{activeCard?.content.text}</p>
                            {activeCard?.content.tags.map((item, index) =>
                                item.isChecked ? (
                                    <div key={index} className={styles.tag}>
                                        {item.text}
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>

                    <div className={styles.rightSide}>
                        <LabelMenu tags={activeCard?.content.tags ?? []} onTagChecked={() => {}} />
                        <StatusMenuWithButton />
                        <TaskPopupWithButton />
                    </div>
                </>
            )}
        </div>
    );
}
