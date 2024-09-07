"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import SmallChekIcon from "~/components/icons/SmallChekIcon";
import { StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";
import styles from "./KanbanViewBottomItem.module.css";
import LabelMenu, { Tags } from "../label-menu/LabelMenu";
import { ActiveCard } from "../kanban-view/page";

type Props = {
    icon: React.ReactElement;
    header: string;
    data: string[];
    color: string;
    tags: Tags;
    index: number;
    setActiveCard: (card: ActiveCard) => void;
    status: string;
    view: "kanban" | "grid";
    onTagChecked: (tags: Tags, status: string, title?: string, index?: number) => void;
    activeCard: ActiveCard;
};

export default function KanbanViewBottomItem({
    icon,
    header,
    data,
    color,
    tags,
    index,
    setActiveCard,
    status,
    onTagChecked,
    view,
    activeCard
}: Props) {
    const [isChekIconActive, setIsChekIconActive] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState(false);
    const [initialWidth, setInitialWidth] = useState<string>("");
    const ref = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLAnchorElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({ x: 0, y: 0 });

    function hahdleCheckIcon() {
        setIsChekIconActive(!isChekIconActive);
    }

    function onTagCheckedInLabelMenu(tags: Tags) {
        if (view === "kanban") {
            onTagChecked(tags, status, "", index);
        }
        onTagChecked(tags, status, header, index);
    }

    function handleCLickLabel(isVisible: boolean) {
        setIsVisible(isVisible);
    }

    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            if (
                iconRef.current?.contains(e.target as Node) ||
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
                    content: { header, data, tags }
                });
            }
        },
        [setActiveCard, index, status, header, data, tags, isVisible]
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
                    ref.current!.style.zIndex = "1000";
                    ref.current!.style.pointerEvents = "none";
                    ref.current!.style.width = initialWidth;
                    ref.current!.style.backgroundColor = "var(--item-bg-color)";
                    ref.current!.style.boxShadow =
                        "var(--box-shadow-color) 0px 8px 16px, var(--box-border-color) 0px 0px 0px 1px";
                });
            }
        },
        [isDragging, initialWidth]
    );

    const handleMouseUp = useCallback(() => {
        if (isDragging && ref.current) {
            setIsDragging(false);
            ref.current!.style.position = "";
            ref.current!.style.left = "";
            ref.current!.style.top = "";
            ref.current!.style.zIndex = "";
            ref.current!.style.pointerEvents = "";
            ref.current!.style.width = "";
            ref.current!.style.backgroundColor = "";
            ref.current!.style.boxShadow = "";
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

    function detectIsActiveCard() {
        return activeCard ? styles.containerIsActiveCard : styles.container;
    }

    return (
        <div
            ref={ref}
            className={`${isChekIconActive ? styles.containerActive : detectIsActiveCard()}`}
            onMouseDown={handleMouseDown}
        >
            <a
                ref={iconRef}
                className={`${isChekIconActive ? styles.chekedIconActive : styles.chekedIcon}`}
                onClick={hahdleCheckIcon}
            >
                <SmallChekIcon />
            </a>
            <div ref={menuRef} className={`${isVisible ? styles.tagActive : styles.tag}`}>
                <LabelMenu tags={tags} onTagChecked={onTagCheckedInLabelMenu} handleCLickLabel={handleCLickLabel} />
            </div>
            <h3 className={styles.title}>{header}</h3>
            {data.map((item, index) => (
                <p key={index} className={styles.item}>
                    {item}
                </p>
            ))}
            <div className={styles.icon}>
                <StatusMenuWithButton />
                {tags.map((item, index) =>
                    item.isChecked ? (
                        <div key={index} className={styles.tagText}>
                            {item.text}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}
