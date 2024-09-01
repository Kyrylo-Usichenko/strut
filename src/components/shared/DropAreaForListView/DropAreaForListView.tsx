"use client";
import { ActiveCard } from "../board-list-view/page";
import LabelMenu from "../label-menu/LabelMenu";
import { StatusMenuWithButton } from "../status-menu/StatusMenuWithButton";
import styles from "./DropAreaForListView.module.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";
import { TaskPopupWithButton } from "../TaskPopupMenu/TaskPopupWithButton";

type Props = {
    onDrop: () => void;
    activeCard: ActiveCard;
    position: string;
};

export default function DropAreaForListView({ onDrop, activeCard, position }: Props) {
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
            return styles.dropArea;
        }
        return position === "top" ? styles.hideDropTop : styles.hideDropBottom;
    }, [showDrop, position]);
    return (
        <div ref={ref} className={dropAreaClass}>
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
