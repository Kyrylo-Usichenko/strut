"use client";

import TagIcon from "~/components/icons/TagIcon";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

export default function Page() {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const menuRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    function handleInputEnter(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleMenuOpen() {
        setIsMenuOpened((prev) => !prev);
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            setIsMenuOpened(false);
        }
    }

    function handleClickOutside(event: MouseEvent) {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setTimeout(() => {
                setIsMenuOpened(false);
            }, 100); // Затримка в 100 мілісекунд
        }
    }

    useEffect(() => {
        if (isMenuOpened && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isMenuOpened]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            {isMenuOpened ? (
                <button ref={buttonRef} className={styles.labelDivPressed} onClick={handleMenuOpen}>
                    <TagIcon />
                    {/* <p className={styles.title}>Add a tag</p> */}
                </button>
            ) : (
                <Tooltip label="Add a tag">
                    <button ref={buttonRef} className={styles.labelDiv} onClick={handleMenuOpen}>
                        <TagIcon />
                        {/* <p className={styles.title}>Add a tag</p> */}
                    </button>
                </Tooltip>
            )}

            {isMenuOpened && (
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
                        <button className={styles.createBtn}>{`Create "${inputValue}"`}</button>
                    ) : (
                        <p className={styles.tagText}>No tags yet</p>
                    )}
                </div>
            )}
        </div>
    );
}
