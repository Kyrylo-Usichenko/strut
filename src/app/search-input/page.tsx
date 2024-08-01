"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import CircleWithCrossIcon from "~/components/icons/CircleWithCrossIcon";
import SearchIcon from "~/components/icons/SearchIcon";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

// type Props = {
//     onInputActiveChange?: (isActive: boolean) => void;
// };

export default function SearchInput({ onInputActiveChange }: any) {
    const [isInputActive, setIsInputActive] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function toggle() {
        setIsInputActive(!isInputActive);
        onInputActiveChange(!isInputActive); // Оновлюємо зовнішній стан
    }

    useEffect(() => {
        if (isInputActive) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isInputActive]);

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            setIsInputActive(false);
            inputRef.current?.blur();
            onInputActiveChange(false); // Оновлюємо зовнішній стан
        }
    }

    return (
        <Tooltip label="Search" direction="right" keys={["CTRL", "/"]} visible={!isInputActive}>
            <div className={`${isInputActive ? styles.containerActive : styles.container}`}>
                <div
                    className={styles.searchIcon}
                    style={{
                        color: isInputActive ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)"
                    }}
                    onClick={() => {
                        setIsInputActive(true);
                        inputRef.current?.focus();
                        onInputActiveChange(true); // Оновлюємо зовнішній стан
                    }}
                >
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className={`${isInputActive ? styles.searchActive : styles.search}`}
                    onClick={() => {
                        setIsInputActive(true);
                        inputRef.current?.focus();
                        onInputActiveChange(true); // Оновлюємо зовнішній стан
                    }}
                    autoComplete="off"
                    style={{
                        cursor: isInputActive ? "text" : "pointer",
                        border: isInputActive ? "1px solid rgba(255, 255, 255, 0.1)" : " ",
                        boxShadow: isInputActive ? "rgba(255, 255, 255, 0.1) 0px 0px 0px 0.1px inset" : " "
                    }}
                    ref={inputRef}
                />
                {isInputActive && (
                    <div className={styles.crossIcon} onClick={toggle}>
                        <CircleWithCrossIcon />
                    </div>
                )}
            </div>
        </Tooltip>
    );
}
