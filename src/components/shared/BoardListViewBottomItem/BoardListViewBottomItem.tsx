"use client";

import styles from "./BoardListViewBottomItem.module.css";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { TaskPopupWithButton } from "~/components/shared/TaskPopupMenu/TaskPopupWithButton";
import LabelMenu, { Tags } from "~/components/shared/label-menu/LabelMenu";
import { StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";
import { ActiveCard } from "../board-list-view/page";

type Props = {
    icon: ReactElement;
    text: string;
    iconColor: string;
    tags: Tags;
    index: number;
    setActiveCard: (card: ActiveCard) => void;
    status: string;
    onTagChecked: (tags: Tags, status: string, index: number) => void;
    activeCard: ActiveCard;
};

export default function BoardListViewBottomItem({
    tags,
    text,
    icon,
    iconColor,
    index,
    setActiveCard,
    status,
    onTagChecked,
    activeCard
}: Props) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState(false);
    const [initialWidth, setInitialWidth] = useState<string>("");
    const ref = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({ x: 0, y: 0 });
    const checkIconRef = useRef<HTMLAnchorElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    function handleCLickLabel(isVisible: boolean) {
        setIsVisible(isVisible);
    }

    function selectTag(tags: Tags) {
        onTagChecked(tags, status, index);
    }

    function handleClick() {
        setIsActive(!isActive);
    }

    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (
                checkIconRef.current?.contains(e.target as Node) ||
                menuRef.current?.contains(e.target as Node) ||
                isVisible
            ) {
                return;
            }

            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                offsetRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
                setInitialWidth(`${rect.width}px`);
                setIsDragging(true);
                setActiveCard({
                    index,
                    status,
                    content: { text, tags }
                });
            }
        },
        [setActiveCard, index, status, tags, text, isVisible]
    );

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (isDragging && ref.current) {
                requestAnimationFrame(() => {
                    const left = e.clientX - offsetRef.current.x;
                    const top = e.clientY - offsetRef.current.y;
                    ref.current!.style.position = "fixed";
                    ref.current!.style.left = `${left}px`;
                    ref.current!.style.top = `${top}px`;
                    ref.current!.style.zIndex = "10000";
                    ref.current!.style.pointerEvents = "none";
                    ref.current!.style.width = initialWidth;
                    ref.current!.style.borderRadius = "12px";
                    ref.current!.style.backgroundColor = "var(--item-bg-color)";
                    ref.current!.style.boxShadow = "var(--box-shadow-color) 0px 4px 8px";
                });
            }
        },
        [isDragging, initialWidth]
    );

    const handleMouseUp = useCallback(() => {
        if (isDragging && ref.current) {
            setIsDragging(false);
            ref.current.style.position = "";
            ref.current.style.left = "";
            ref.current.style.top = "";
            ref.current.style.zIndex = "";
            ref.current.style.pointerEvents = "";
            ref.current!.style.width = "";
            ref.current!.style.backgroundColor = "";
            ref.current!.style.boxShadow = "";
            ref.current!.style.borderRadius = "";
            setTimeout(() => {
                setActiveCard(null);
            }, 50);
        }
    }, [isDragging, setActiveCard]);

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);
    return (
        <div
            ref={ref}
            className={activeCard ? styles.containerIsActiveCard : styles.container}
            onMouseDown={handleMouseDown}
        >
            <div className={styles.leftSide}>
                <div className={styles.chekedIconWrapper}>
                    {!isActive && (
                        <button className={styles.chekedIcon}>
                            <SmallCheckIcon />
                        </button>
                    )}
                    <a
                        ref={checkIconRef}
                        className={`${isActive ? styles.focusedIconActive : styles.focusedIcon}`}
                        onClick={handleClick}
                    >
                        <SmallCheckIcon />
                    </a>
                </div>
                <div className={styles.textWithTags}>
                    <p className={styles.text}>{text}</p>
                    {tags.map((item, index) =>
                        item.isChecked ? (
                            <div key={index} className={styles.tag}>
                                {item.text}
                            </div>
                        ) : null
                    )}
                </div>
            </div>

            <div className={styles.rightSide}>
                <div ref={menuRef} style={{ width: "fit-content" }}>
                    <LabelMenu tags={tags} onTagChecked={selectTag} handleCLickLabel={handleCLickLabel} />
                </div>

                <StatusMenuWithButton />
                <TaskPopupWithButton />
            </div>
        </div>
    );
}
