"use client";
import React from "react";
import { TaskPopup } from "./TaskPopup";
import ExportIcon from "~/components/icons/ExportIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import { MenuItem } from "../PopupMenu/PopupMenu";
import menu from "~/components/shared/PopupMenu/menu.module.css";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";

export const taskItems: MenuItem[] = [
    { icon: <TrashBinIcon />, label: "Delete Document", link: "" },
    { icon: <ExportIcon />, label: "Export Markdown", link: "" }
];

export const docInfo = { words: 1, chars: 5, time: 1 };
function TaskPopupWithButton() {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
            <div className={menu.container} ref={ref}>
            <ButtonIconOnly
                onClick={handleButtonClick}
                icon={<ThreeDotsIcon/>}
                tooltipLabel="More Options"
                tooltipVisible={!isVisible}
            />
                <TaskPopup items={taskItems} docInfo={docInfo} direction="bottom" visible={isVisible} />
            </div>
    );
};

export { TaskPopupWithButton };
