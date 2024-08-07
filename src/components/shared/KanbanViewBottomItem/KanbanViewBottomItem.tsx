"use client";
import { useState } from "react";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import SmallChekIcon from "~/components/icons/SmallChekIcon";
import { StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import TagIcon from "~/components/icons/TagIcon";
import LabelMenuItem from "../LabelMenuItem/LabelMenuItem";
import styles from "./KanbanViewBottomItem.module.css";

type Props = {
    icon: React.ReactElement;
    header: string;
    data: string[];
    color: string;
};

export default function KanbanViewBottomItem({ icon, header, data, color }: Props) {
    const [isChekIconActive, setIsChekIconActive] = useState<boolean>(false);
    const { isVisible, setIsVisible, ref } = useVisible(false);

    function hahdleCheckIcon() {
        setIsChekIconActive(!isChekIconActive);
    }

    return (
        <div className={`${isChekIconActive ? styles.containerActive : styles.container}`}>
            <a
                className={`${isChekIconActive ? styles.chekedIconActive : styles.chekedIcon}`}
                onClick={hahdleCheckIcon}
            >
                <SmallChekIcon />
            </a>
            <div className={`${isVisible ? styles.tagActive : styles.tag}`} ref={ref}>
                <ButtonIconOnly
                    icon={<TagIcon />}
                    tooltipLabel="Add a tag"
                    tooltipVisible={!isVisible}
                    onClick={() => setIsVisible(!isVisible)}
                />

                {isVisible && (
                    <div className={styles.labelMenu}>
                        <LabelMenuItem isVisible={isVisible} />
                    </div>
                )}
            </div>
            <h3 className={styles.title}>{header}</h3>
            {data.map((item, index) => (
                <p key={index} className={styles.item}>
                    {item}
                </p>
            ))}
            <div className={styles.icon} style={{ color: color }}>
                <StatusMenuWithButton />
            </div>
        </div>
    );
}
