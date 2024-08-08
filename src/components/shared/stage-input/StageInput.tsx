"use client";

import { useState } from "react";
import IconButton from "./_components/icon-button/IconButton";
import TextInput from "./_components/text-input/TextInput";
import DocsAmount from "./_components/docs-amount/DocsAmount";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";
import styles from "./styles.module.css";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";

type StageInputProps = {
    viewMode: "list" | "grid" | "kanban";
    icon?: JSX.Element;
    color?: string;
    value?: string;
    width?: number;
    amount?: number;
};

export default function StageInput({ viewMode, icon, color, value, width, amount }: StageInputProps) {
    const [currentIcon, setCurrentIcon] = useState(icon || (DashedCircleIcon as unknown as JSX.Element));
    const [currentColor, setCurrentColor] = useState(color || "var(--text-color)");
    const { ref: menuRef, isVisible: showMenu, setIsVisible: setShowMenu } = useVisible(false);
    const [currentValue, setValue] = useState(value || "Untitled");
    const [currentWidth, setWidth] = useState(width || 67);

    function handleIconChange(icon: JSX.Element, color: string) {
        setCurrentIcon(icon);
        setCurrentColor(color);
        setShowMenu(false);
    }

    return (
        <div className={styles.inputDiv}>
            <IconButton
                currentIcon={currentIcon}
                currentColor={currentColor}
                showMenu={showMenu}
                onIconChange={handleIconChange}
                toggleMenu={() => setShowMenu(!showMenu)}
                menuRef={menuRef}
            />
            <TextInput
                value={currentValue}
                width={currentWidth}
                styleMode={viewMode}
                onChange={setValue}
                setWidth={setWidth}
            />
            <DocsAmount amount={amount || 0} styleMode={viewMode} />
        </div>
    );
}
