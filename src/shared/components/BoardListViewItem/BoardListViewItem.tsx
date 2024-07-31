"use client";

import { ReactElement, useState } from "react";
import styles from "./BoardListViewItem.module.css";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";
import StageInput from "~/components/shared/stage-input/StageInput";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import BoardListViewBottomItem from "../BoardListViewBottomItem/BoardListViewBottomItem";

type Props = {
    title: string;
    icon: ReactElement;
    iconColor: string;
    number: number;
    textData: string[];
};

export default function BoardListViewItem({ title, icon, iconColor, number, textData }: Props) {
    const [isBottomMenuOpenes, setIsBottomMenuOpenes] = useState<boolean>(false);

    function handleOpenBottomMenu() {
        setIsBottomMenuOpenes(!isBottomMenuOpenes);
    }

    function SmallArrow() {
        return (
            <div className={`${isBottomMenuOpenes ? styles.smallArrowClicked : styles.smallArrow}`}>
                <SmallArrowIcon />
            </div>
        );
    }

    function doingNothing() {
        return;
    }

    return (
        <div className={styles.container}>
            <div className={styles.topPart}>
                <div className={styles.leftPart}>
                    <div className={styles.ButtonIconOnly}>
                        <ButtonIconOnly
                            onClick={handleOpenBottomMenu}
                            icon={<SmallArrow />}
                            tooltipLabel={isBottomMenuOpenes ? "Collapse stage" : "Expand Stage"}
                        />
                    </div>
                    <StageInput viewMode="list" color={iconColor} icon={icon} amount={number} value={title} />
                </div>
                <div className={styles.rightPart}>
                    <ButtonIconOnly onClick={doingNothing} icon={<PlusIcon />} tooltipLabel="New Doc" />
                    <ButtonIconOnly onClick={doingNothing} icon={<ThreeDotsIcon />} tooltipLabel="More Options" />
                </div>
            </div>

            {isBottomMenuOpenes && (
                <ul className={styles.list}>
                    {textData.map((text, index) => (
                        <li key={index}>
                            <BoardListViewBottomItem text={text} icon={icon} iconColor={iconColor} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
