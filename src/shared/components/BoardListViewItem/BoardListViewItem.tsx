"use client";

import { ReactElement, useState } from "react";
import styles from "./BoardListViewItem.module.css";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";
import StageInput from "~/app/stage-input/page";
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
    position?: string;
};

const stageItems: MenuItem[] = [
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];

export default function BoardListViewItem({ title, icon, iconColor, number, textData, position = "bottom" }: Props) {
    const [isBottomMenuOpenes, setIsBottomMenuOpenes] = useState<boolean>(false);
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

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
                    <ButtonIconOnly
                        onClick={doingNothing}
                        icon={<PlusIcon width={12} height={12} />}
                        tooltipLabel="New Doc"
                    />
                    {position === "top" ? (
                        <div className={menu.container} ref={ref}>
                            <ButtonIconOnly
                                onClick={handleButtonClick}
                                icon={<ThreeDotsIcon />}
                                tooltipLabel="More Options"
                                tooltipVisible={!isVisible}
                            />
                            <StageMenu items={stageItems} visible={isVisible} direction="bottom" />
                        </div>
                    ) : (
                        <StageMenuWithButton />
                    )}
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
