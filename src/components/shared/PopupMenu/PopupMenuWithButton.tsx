"use client";
import React, { FC } from "react";
import ExportIcon from "~/components/icons/ExportIcon";
import EyeIcon from "~/components/icons/EyeIcon";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { MenuItem, PopupMenu } from "./PopupMenu";
import { useVisible } from "./utils/useVisible";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import menu from "~/components/shared/PopupMenu/menu.module.css";

export const items: MenuItem[] = [
    { icon: <ExportIcon />, label: "Export to Markdown" },
    { icon: <EyeIcon />, label: "Hide from Sidebar" },
    { icon: <TrashBinIcon />, label: "Delete Workspace" },
    { icon: <DuplicateIcon />, label: "Duplicate Workspace" }
];

function PopupMenuWithButton() {
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
            <PopupMenu items={items} direction="right" visible={isVisible} />
        </div>
    );
}
export { PopupMenuWithButton };
