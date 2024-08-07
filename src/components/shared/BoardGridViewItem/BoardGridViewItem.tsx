"use client";

import { ReactElement, useState } from "react";
import styles from "./BoardGridViewItem.module.css";
import ArrowIcon from "~/components/icons/ArrowIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { MenuItem } from "~/components/shared/PopupMenu/PopupMenu";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import StageInput from "~/components/shared/stage-input/StageInput";
import menu from "~/components/shared/PopupMenu/menu.module.css";
import { StageMenu } from "~/components/shared/stage-menu/StageMenu";
import KanbanViewBottomItem from "~/components/shared/KanbanViewBottomItem/KanbanViewBottomItem";

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

type textData = {
    title: string;
    textData: string[];
};

type Props = {
    title: string;
    icon: ReactElement;
    iconColor: string;
    number: number;
    data: textData[];
    position: "bottom" | "center" | "top" | string;
};

export default function BoardGridViewItem({ title, icon, iconColor, number, data, position }: Props) {
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

    function distributeItems(data: textData[], position: string) {
        const columns: textData[][] = [[], [], [], []];
        const totalItems = data.length;
        let index = 0;

        if (position === "top") {
            const baseCount = Math.floor(totalItems / 4);
            const extraItems = totalItems % 4;

            for (let i = 1; i < columns.length && index < totalItems; i++) {
                columns[i].push(...data.slice(index, index + baseCount + (i - 1 < extraItems ? 1 : 0)));
                index += baseCount + (i - 1 < extraItems ? 1 : 0);
            }
            for (let i = 0; i < 1 && index < totalItems; i++) {
                columns[i].push(...data.slice(index, index + baseCount + (i < extraItems ? 1 : 0)));
                index += baseCount + (i < extraItems ? 1 : 0);
            }
        } else {
            const baseCount = Math.floor(totalItems / 4);
            const extraItems = totalItems % 4;

            columns.forEach((column, columnIndex) => {
                const count = baseCount + (columnIndex < extraItems ? 1 : 0);
                column.push(...data.slice(index, index + count));
                index += count;
            });
        }

        return columns;
    }

    const columns = distributeItems(data, position);

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
                <div className={styles.columns}>
                    {columns.map((column, columnIndex) => (
                        <div key={columnIndex} className={styles.column}>
                            {position === "top" && columnIndex === 0 && (
                                <a className={styles.createContainer}>
                                    <PlusIcon width={12} height={12} />
                                    <p className={styles.createDivTitle}>New doc</p>
                                </a>
                            )}
                            {column.map((item: textData, index) => (
                                <div key={index} className={styles.item}>
                                    <KanbanViewBottomItem
                                        icon={icon}
                                        header={item.title}
                                        data={item.textData}
                                        color={iconColor}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
