"use client";
import { useState } from "react";
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
    view
}: Props) {
    const [isChekIconActive, setIsChekIconActive] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    // const [tags, setTags] = useState<Tags>(initialTags);

    function hahdleCheckIcon() {
        setIsChekIconActive(!isChekIconActive);
    }

    function onTagCheckedInLabelMenu(tags: Tags) {
        // setTags(tags);
        if (view === "kanban") {
            onTagChecked(tags, status, "", index);
        }
        onTagChecked(tags, status, header, index);
    }

    function handleCLickLabel(isVisible: boolean) {
        setIsVisible(isVisible);
    }

    return (
        <div
            className={`${isChekIconActive ? styles.containerActive : styles.container}`}
            draggable
            onDragStart={() => {
                setActiveCard({
                    index,
                    status,
                    content: { header, data, tags }
                });
            }}
            onDragEnd={() => setActiveCard(null)}
        >
            <a
                className={`${isChekIconActive ? styles.chekedIconActive : styles.chekedIcon}`}
                onClick={hahdleCheckIcon}
            >
                <SmallChekIcon />
            </a>
            <div className={`${isVisible ? styles.tagActive : styles.tag}`}>
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
