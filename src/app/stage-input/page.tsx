"use client";

import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import StageIconMenu from "~/components/shared/stage-icon-menu/StageIconMenu";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";
import styles from "./styles.module.css";
import { useState, useEffect, useRef } from "react";

function IconButton() {
    const [currentIcon, setCurrentIcon] = useState(DashedCircleIcon as unknown as JSX.Element);
    const [currentColor, setCurrentColor] = useState("rgba(255, 255, 255, 0.5)");
    const [showMenu, setShowMenu] = useState(false);

    function handleIconChange(icon: JSX.Element, color: string) {
        setCurrentIcon(icon);
        setCurrentColor(color);
        setShowMenu(false);
    }

    return (
        <div style={{position: "relative"}}>
            <ButtonIconOnly
                icon={currentIcon}
                tooltipLabel={!showMenu ? "Change Icon" : undefined}
                onClick={() => setShowMenu(!showMenu)}
                disabled={showMenu}
                color={currentColor}
            />
            {showMenu && (
                <>
                    <div className={styles.overlay} onClick={() => setShowMenu(!showMenu)}></div>
                    <StageIconMenu activeColor={currentColor} onIconSelect={handleIconChange} />
                </>
            )}
        </div>
    );
}

type HiddenSpanProps = {
    text: string;
    setWidth: (width: number) => void;
};

function HiddenSpan({ text, setWidth }: HiddenSpanProps) {
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.textContent = text;
            const textWidth = Math.ceil(spanRef.current.getBoundingClientRect().width);
            setWidth(textWidth + 12);
        }
    }, [text, setWidth]);

    return <span ref={spanRef} className={styles.hiddenSpan}></span>;
}

function TextInput() {
    const [value, setValue] = useState("Untitled");
    const [width, setWidth] = useState(67);

    return (
        <>
            <HiddenSpan text={value || "Untitled"} setWidth={setWidth} />
            <input
                className={styles.input}
                type="text"
                placeholder="Untitled"
                value={value}
                onChange={(el) => setValue(el.target.value)}
                style={{ width: `${width}px` }}
            />
        </>
    );
}

function DocsAmount({ amount }: { amount: number }) {
    return <p className={styles.pAmount}>{amount}</p>;
}

export default function StageInput() {
    return (
        <div className={styles.inputDiv}>
            <IconButton />
            <TextInput />
            <DocsAmount amount={1} />
        </div>
    );
}
