"use client";
import { useState } from "react";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import SmallChekIcon from "~/components/icons/SmallChekIcon";
import { StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import TagIcon from "~/components/icons/TagIcon";
import LabelMenuItem from "../LabelMenuItem/LabelMenuItem";
import styles from "./KanbanViewBottomItem.module.css";
import LabelMenu, { Tags } from "../label-menu/LabelMenu";

type Props = {
    icon: React.ReactElement;
    header: string;
    data: string[];
    color: string;
    tags: Tags;
};

export default function KanbanViewBottomItem({ icon, header, data, color, tags }: Props) {
    const [isChekIconActive, setIsChekIconActive] = useState<boolean>(false);
    // const { isVisible, setIsVisible, ref } = useVisible(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [initialTags, setInitialTags] = useState<Tags>(tags);

    function hahdleCheckIcon() {
        setIsChekIconActive(!isChekIconActive);
    }

    function onTagChecked(data: Tags) {
        setInitialTags(data);
    }

    function handleCLickLabel(isVisible: boolean) {
        setIsVisible(isVisible);
    }

    return (
        <div className={`${isChekIconActive ? styles.containerActive : styles.container}`}>
            <a
                className={`${isChekIconActive ? styles.chekedIconActive : styles.chekedIcon}`}
                onClick={hahdleCheckIcon}
            >
                <SmallChekIcon />
            </a>
            <div className={`${isVisible ? styles.tagActive : styles.tag}`}>
                <LabelMenu tags={initialTags} onTagChecked={onTagChecked} handleCLickLabel={handleCLickLabel} />
            </div>
            <h3 className={styles.title}>{header}</h3>
            {data.map((item, index) => (
                <p key={index} className={styles.item}>
                    {item}
                </p>
            ))}
            <div className={styles.icon}>
                <StatusMenuWithButton />
                {initialTags.map((item, index) =>
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
