"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
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
import { Tags } from "../label-menu/LabelMenu";
import KanbanViewBottomItem from "../KanbanViewBottomItem/KanbanViewBottomItem";
import { ActiveCard } from "../kanban-view/page";
import DropAreaForGridView from "../DropAreaForGridView/DropAreaForGridView";

const stageItemsTop: MenuItem[] = [
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down" },
    { icon: <TrashBinIcon />, label: "Delete Workspace" }
];
const stageItemsCenter: MenuItem[] = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up" },
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down" },
    { icon: <TrashBinIcon />, label: "Delete Workspace" }
];
const stageItemsBottom: MenuItem[] = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up" },
    { icon: <TrashBinIcon />, label: "Delete Workspace" }
];

type textData = {
    title: string;
    textData: string[];
    tags: Tags;
};

type Props = {
    title: string;
    icon: ReactElement;
    iconColor: string;
    number: number;
    data: textData[];
    position: "bottom" | "center" | "top" | string;
    onTagChecked: (tags: Tags, status: string, title?: string, index?: number) => void;
    setActiveCard: (card: ActiveCard) => void;
    onDrop: (postition: string, status: string, title: string) => void;
    activeCard: ActiveCard;
};

export default function BoardGridViewItem({
    title,
    icon,
    iconColor,
    number,
    data,
    position,
    onTagChecked,
    setActiveCard,
    onDrop,
    activeCard
}: Props) {
    const [isBottomMenuOpenes, setIsBottomMenuOpenes] = useState<boolean>(false);
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current && activeCard !== null) {
                const rect = containerRef.current.getBoundingClientRect();
                const isInside =
                    event.clientX >= rect.left &&
                    event.clientX <= rect.right &&
                    event.clientY >= rect.top &&
                    event.clientY <= rect.bottom;
                setIsHovered(isInside);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [activeCard]);

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

    return (
        <div
            ref={containerRef}
            className={isHovered && activeCard !== null ? styles.containerHovered : styles.container}
        >
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
                <div className={styles.columns}>
                    {columns.map((column, columnIndex) => (
                        <div key={columnIndex} className={styles.column}>
                            {position === "top" && columnIndex === 0 && (
                                <div style={{ position: "relative" }}>
                                    <a className={styles.createContainer}>
                                        <PlusIcon width={12} height={12} />
                                        <p className={styles.createDivTitle}>New doc</p>
                                    </a>
                                    <DropAreaForGridView
                                        position="bottom"
                                        activeCard={activeCard}
                                        onDrop={() => onDrop("bottom", title, "balbalbal")}
                                    />
                                </div>
                            )}
                            {column.map((item: textData, index) => (
                                <div key={index} className={styles.item} style={{ position: "relative" }}>
                                    <DropAreaForGridView
                                        onDrop={() => onDrop("top", title, item.title)}
                                        activeCard={activeCard}
                                        position="top"
                                    />
                                    <KanbanViewBottomItem
                                        icon={icon}
                                        header={item.title}
                                        data={item.textData}
                                        color={iconColor}
                                        tags={item.tags}
                                        index={index}
                                        status={title}
                                        setActiveCard={setActiveCard}
                                        onTagChecked={onTagChecked}
                                        view="grid"
                                        activeCard={activeCard}
                                    />
                                    <DropAreaForGridView
                                        onDrop={() => onDrop("bottom", title, item.title)}
                                        activeCard={activeCard}
                                        position="bottom"
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
