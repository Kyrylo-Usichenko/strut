"use client";

import { useEffect, useRef, useState } from "react";
import { ActiveCard } from "../kanban-view/page";
import KanbanItemHeader from "../KanbanItemHeader/KanbanItemHeader";
import KanbanViewBottom from "../KanbanViewBottom/KanbanViewBottom";
import { Tags } from "../label-menu/LabelMenu";
import styles from "./KanbanItem.module.css";

type HeaderProps = {
    header: string;
    data: string[];
    tags: Tags;
};

type Props = {
    icon: React.ReactElement;
    title: string;
    number: number;
    dataHeader: HeaderProps[];
    color: string;
    position?: "left" | "right" | "center";
    setActiveCard: (card: ActiveCard) => void;
    onDrop: (status: string, position: number) => void;
    activeCard: ActiveCard;
    onTagChecked: (tags: Tags, status: string, title?: string, index?: number) => void;
    onDragEnterColumn: string | null;
    setOnDragEnterColumn: (status: string) => void;
};

export default function KanbanItem({
    icon,
    title,
    number,
    dataHeader,
    color,
    position,
    setActiveCard,
    onDrop,
    activeCard,
    onTagChecked
}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current && activeCard !== null) {
                const rect = containerRef.current.getBoundingClientRect();
                const isInside =
                    event.clientX >= rect.left &&
                    event.clientX <= rect.right &&
                    event.clientY >= rect.top &&
                    event.clientY <= rect.bottom;
                setIsHovered(isInside);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [activeCard]);

    return (
        <div
            ref={containerRef}
            className={isHovered && activeCard !== null ? styles.containerHovered : styles.container}
        >
            <KanbanItemHeader icon={icon} number={number} title={title} color={color} position={position} />
            <KanbanViewBottom
                icon={icon}
                dataHeader={dataHeader}
                color={color}
                setActiveCard={setActiveCard}
                onDrop={onDrop}
                status={title}
                activeCard={activeCard}
                onTagChecked={onTagChecked}
            />
        </div>
    );
}
