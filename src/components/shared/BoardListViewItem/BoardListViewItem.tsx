"use client";

import { ReactElement, useState } from "react";
import styles from "./BoardListViewItem.module.css";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";
import StageInput from "~/components/shared/stage-input/StageInput";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import BoardListViewBottomItem from "../BoardListViewBottomItem/BoardListViewBottomItem";
import menu from "~/components/shared/PopupMenu/menu.module.css";
import { StageMenu } from "~/components/shared/stage-menu/StageMenu";
import { MenuItem } from "~/components/shared/PopupMenu/PopupMenu";
import ArrowIcon from "~/components/icons/ArrowIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import { StageMenuWithButton } from "~/components/shared/stage-menu/StageMenuWithButton";

type Props = {
    title: string;
    icon: ReactElement;
    iconColor: string;
    number: number;
    textData: string[];
    position: "bottom" | "center" | "top" | string;
};

const stageItemsTop: MenuItem[] = [
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];
const stageItemsCenter: MenuItem[] = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up", link: "" },
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];
const stageItemsBottom: MenuItem[] = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];

export default function BoardListViewItem({ title, icon, iconColor, number, textData, position }: Props) {
    const [isBottomMenuOpenes, setIsBottomMenuOpenes] = useState<boolean>(false);
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    function handleOpenBottomMenu() {
        setIsBottomMenuOpenes(!isBottomMenuOpenes);
    }

    function determinePosition(position: string) {
        if (position === "top") {
            return stageItemsTop;
        } else if (position === "bottom") {
            return stageItemsBottom;
        }
        return stageItemsCenter;
    }

    function SmallArrow() {
        return (
            <div className={`${isBottomMenuOpenes ? styles.smallArrowClicked : styles.smallArrow}`}>
                <SmallArrowIcon />
            </div>
        );
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
                    <ButtonIconOnly icon={<PlusIcon width={12} height={12} />} tooltipLabel="New Doc" />
                    <div className={menu.container} ref={ref}>
                        <ButtonIconOnly
                            onClick={handleButtonClick}
                            icon={<ThreeDotsIcon />}
                            tooltipLabel="More Options"
                            tooltipVisible={!isVisible}
                        />
                        <StageMenu items={determinePosition(position)} visible={isVisible} direction="bottom" />
                    </div>
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
