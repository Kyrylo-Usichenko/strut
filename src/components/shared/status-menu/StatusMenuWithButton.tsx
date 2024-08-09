import React, { useState } from "react";
import DashedIcon from "~/components/icons/DashedIcon";
import { StatusMenu } from "./StatusMenu";
import { MenuItem } from "../PopupMenu/PopupMenu";
import menu from "../PopupMenu/menu.module.css";
import StarIcon from "~/components/icons/StarIcon";
import { useVisible } from "../PopupMenu/utils/useVisible";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";

export const statusItems: MenuItem[] = [
    { icon: <DashedIcon fill="rgb(1, 114, 100)" />, label: "Start here", link: "" },
    { icon: <DashedIcon fill="rgb(92, 106, 228)" />, label: "What you need to know", link: "" },
    { icon: <StarIcon fill="rgb(255, 181, 70)" />, label: "Pro tips", link: "" }
];

function StatusMenuWithButton() {
    const [selectedIcon, setSelectedIcon] = useState(statusItems[0].icon);
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };
    const handleItemClick = (item: MenuItem) => {
        setSelectedIcon(item.icon);
        setIsVisible(false);
    };
    return (
        <div className={menu.container} ref={ref}>
            <ButtonIconOnly
                onClick={handleButtonClick}
                icon={selectedIcon}
                tooltipLabel="Change Stage"
                tooltipVisible={!isVisible}
            />
            <StatusMenu items={statusItems} visible={isVisible} direction="bottom" onItemClick={handleItemClick} />
        </div>
    );
}

export { StatusMenuWithButton };
