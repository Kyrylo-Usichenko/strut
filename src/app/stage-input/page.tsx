"use client";

import { useState } from "react";
import IconButton from "./_components/icon-button/IconButton";
import TextInput from "./_components/text-input/TextInput";
import DocsAmount from "./_components/docs-amount/DocsAmount";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";
import styles from "./styles.module.css";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";

type viewModeProps = {
    viewMode: "list" | "grid" | "kanban";
};

export default function StageInput({ viewMode }: viewModeProps) {
// function StageInput({ viewMode }: viewModeProps) {
    const [currentIcon, setCurrentIcon] = useState(DashedCircleIcon as unknown as JSX.Element);
    const [currentColor, setCurrentColor] = useState("rgba(255, 255, 255, 0.5)");
    const {ref: menuRef, isVisible: showMenu, setIsVisible: setShowMenu} = useVisible(false);
    const [value, setValue] = useState("Untitled");
    const [width, setWidth] = useState(67);

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
            <TextInput value={value} width={width} styleMode={viewMode} onChange={setValue} setWidth={setWidth} />
            <DocsAmount amount={0} />
        </div>
    );
}

// export default function Page() {
//     return (
//         <>
//             <StageInput viewMode="kanban" />
//             <StageInput viewMode="list" />
//         </>
//     );
// }
