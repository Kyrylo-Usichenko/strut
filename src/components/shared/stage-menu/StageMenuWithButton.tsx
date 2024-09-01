"use client";
import React from "react";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import { StageMenu } from "./StageMenu";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import ArrowIcon from "~/components/icons/ArrowIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import menu from "~/components/shared/PopupMenu/menu.module.css";
import { MenuItem } from "../PopupMenu/PopupMenu";

export const stageItems: MenuItem[] = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up" },
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down" },
    { icon: <TrashBinIcon />, label: "Delete Workspace" }
];

function StageMenuWithButton() {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={menu.container} ref={ref}>
            <ButtonIconOnly
                onClick={handleButtonClick}
                icon={<ThreeDotsIcon />}
                tooltipLabel="More Options"
                tooltipVisible={!isVisible}
            />
            <StageMenu items={stageItems} visible={isVisible} direction="bottom" />
        </div>
    );
}

export { StageMenuWithButton };
