"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
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
import { Tags } from "../label-menu/LabelMenu";
import { ActiveCard } from "../board-list-view/page";
import DropAreaForListView from "../DropAreaForListView/DropAreaForListView";

type Props = {
    status: string;
    icon: ReactElement;
    iconColor: string;
    number: number;
    textData: { text: string; tags: Tags }[];
    position: "bottom" | "center" | "top" | string;
    setActiveCard: (card: ActiveCard) => void;
    onDrop: (status: string, position: number) => void;
    activeCard: ActiveCard;
    onTagChecked: (tags: Tags, status: string, index: number) => void;
};

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

export default function BoardListViewItem({
    status,
    icon,
    iconColor,
    number,
    textData,
    position,
    setActiveCard,
    onDrop,
    activeCard,
    onTagChecked
}: Props) {
    const [isBottomMenuOpenes, setIsBottomMenuOpenes] = useState<boolean>(false);
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

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
        <div
            ref={containerRef}
            className={isHovered && activeCard !== null ? styles.containerHovered : styles.container}
            style={{ position: "relative", width: "100%" }}
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
                    <StageInput viewMode="list" color={iconColor} icon={icon} amount={number} value={status} />
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
                <>
                    <DropAreaForListView onDrop={() => onDrop(status, 0)} activeCard={activeCard} position="top" />
                    <ul className={styles.list}>
                        {textData.map((text, index) => (
                            <div key={index} style={{ position: "relative", width: "100%" }}>
                                <li>
                                    <BoardListViewBottomItem
                                        tags={text.tags}
                                        text={text.text}
                                        icon={icon}
                                        iconColor={iconColor}
                                        index={index}
                                        status={status}
                                        setActiveCard={setActiveCard}
                                        onTagChecked={onTagChecked}
                                        activeCard={activeCard}
                                    />
                                </li>
                                <DropAreaForListView
                                    onDrop={() => onDrop(status, index + 1)}
                                    activeCard={activeCard}
                                    position="bottom"
                                />
                            </div>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
