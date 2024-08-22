"use client";

import styles from "./BoardListViewBottomItem.module.css";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";
import { ReactElement, useState } from "react";
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
};

export default function BoardListViewBottomItem({
    tags,
    text,
    icon,
    iconColor,
    index,
    setActiveCard,
    status,
    onTagChecked
}: Props) {
    const [isActive, setIsActive] = useState<boolean>(false);
    // const [tags, setTags] = useState<Tags>(initialTags);

    function selectTag(tags: Tags) {
        // setTags(data);
        onTagChecked(tags, status, index);
    }

    function handleClick() {
        setIsActive(!isActive);
    }
    return (
        <div
            className={styles.container}
            draggable
            onDragStart={() =>
                setActiveCard({
                    index,
                    status,
                    content: { text, tags }
                })
            }
            onDragEnd={() => setActiveCard(null)}
        >
            <div className={styles.leftSide}>
                <div className={styles.chekedIconWrapper}>
                    {!isActive && (
                        <button className={styles.chekedIcon}>
                            <SmallCheckIcon />
                        </button>
                    )}
                    <a className={`${isActive ? styles.focusedIconActive : styles.focusedIcon}`} onClick={handleClick}>
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
                <LabelMenu tags={tags} onTagChecked={selectTag} />
                <StatusMenuWithButton />
                <TaskPopupWithButton />
            </div>
        </div>
    );
}
