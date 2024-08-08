"use client";

import TagIcon from "~/components/icons/TagIcon";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";

export default function LabelMenu() {
    const [inputValue, setInputValue] = useState<string>("");
    const menuRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { isVisible, setIsVisible, ref } = useVisible(false);

    function handleInputEnter(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleOpenMenu() {
        setIsVisible(!isVisible);
        setInputValue("");
    }

    useEffect(() => {
        if (isVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isVisible]);

    return (
        <div className={styles.container} ref={ref}>
            <ButtonIconOnly
                onClick={handleOpenMenu}
                icon={<TagIcon />}
                tooltipLabel="Add a tag"
                tooltipVisible={!isVisible}
            />

            {isVisible && (
                <div ref={menuRef} className={styles.menu}>
                    <input
                        ref={inputRef}
                        type="text"
                        className={styles.input}
                        onChange={handleInputEnter}
                        placeholder="Add a tag..."
                        autoComplete="off"
                    />
                    {inputValue ? (
                        <button className={styles.createBtn}>
                            Create&nbsp;
                            <span>{`"${inputValue}"`}</span>
                        </button>
                    ) : (
                        <p className={styles.tagText}>No tags yet</p>
                    )}
                </div>
            )}
        </div>
    );
}
