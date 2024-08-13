"use client";

import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import styles from "./BoardListViewBottomItem.module.css";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import TagIcon from "~/components/icons/TagIcon";
import { ReactElement, useState } from "react";
import { TaskPopupWithButton } from "~/components/shared/TaskPopupMenu/TaskPopupWithButton";
import LabelMenu, { Tags } from "~/components/shared/label-menu/LabelMenu";
import { StatusMenu } from "~/components/shared/status-menu/StatusMenu";
import { StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";

type Props = {
    icon: ReactElement;
    text: string;
    iconColor: string;
    tags: Tags;
};

export default function BoardListViewBottomItem({ tags, text, icon, iconColor }: Props) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [initialTags, setInitialTags] = useState<Tags>(tags);

    function selectTag(data: Tags) {
        setInitialTags(data);
    }

    function handleClick() {
        setIsActive(!isActive);
    }
    return (
        <div className={styles.container}>
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
                    {initialTags.map((item, index) =>
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
