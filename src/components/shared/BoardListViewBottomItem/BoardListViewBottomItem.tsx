"use client";

import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import styles from "./BoardListViewBottomItem.module.css";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import TagIcon from "~/components/icons/TagIcon";
import { ReactElement, useState } from "react";
import { TaskPopupWithButton } from "~/components/shared/TaskPopupMenu/TaskPopupWithButton";
import LabelMenu from "~/app/label-menu/page";
import { StatusMenu } from "~/components/shared/status-menu/StatusMenu";
import { StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";

type Props = {
    icon: ReactElement;
    text: string;
    iconColor: string;
};

export default function BoardListViewBottomItem({ text, icon, iconColor }: Props) {
    const [isActive, setIsActive] = useState<boolean>(false);

    function doNothing() {
        return;
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
                <p className={styles.text}>{text}</p>
            </div>

            <div className={styles.rightSide}>
                <LabelMenu />
                <StatusMenuWithButton />
                <TaskPopupWithButton />
            </div>
        </div>
    );
}
