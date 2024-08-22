import React from "react";
import DropArea from "../DropArea/DropArea";
import KanbanViewBottomItem from "../KanbanViewBottomItem/KanbanViewBottomItem";
import { Tags } from "../label-menu/LabelMenu";
import styles from "./KanbanViewBottom.module.css";
import { ActiveCard } from "../kanban-view/page";

type HeaderProps = {
    header: string;
    data: string[];
    tags: Tags;
};

type Props = {
    icon: React.ReactElement;
    dataHeader: HeaderProps[];
    color: string;
    setActiveCard: (card: ActiveCard) => void;
    onDrop: (status: string, position: number) => void;
    status: string;
    activeCard: ActiveCard;
    onTagChecked: (tags: Tags, status: string, title?: string, index?: number) => void;
};

export default function KanbanViewBottom({
    icon,
    dataHeader,
    color,
    setActiveCard,
    status,
    onDrop,
    activeCard,
    onTagChecked
}: Props) {
    return (
        <div className={styles.container} style={{ position: "relative" }}>
            <DropArea onDrop={() => onDrop(status, 0)} activeCard={activeCard} position="top" />
            {dataHeader.map((item, index) => (
                <div key={index} style={{ position: "relative", width: "100%" }}>
                    <KanbanViewBottomItem
                        icon={icon}
                        header={item.header}
                        data={item.data}
                        color={color}
                        tags={item.tags}
                        index={index}
                        status={status}
                        setActiveCard={setActiveCard}
                        onTagChecked={onTagChecked}
                        view="kanban"
                    />
                    <DropArea onDrop={() => onDrop(status, index + 1)} activeCard={activeCard} position="bottom" />
                </div>
            ))}
        </div>
    );
}
