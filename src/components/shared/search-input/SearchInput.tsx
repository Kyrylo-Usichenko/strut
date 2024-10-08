"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles.module.css";
import CircleWithCrossIcon from "~/components/icons/CircleWithCrossIcon";
import SearchIcon from "~/components/icons/SearchIcon";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

type Props = {
    onInputActiveChange?: (isActive: boolean) => void;
};

function SearchInput({ onInputActiveChange = () => {} }: Props) {
    const [isInputActive, setIsInputActive] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function toggle() {
        setIsInputActive(!isInputActive);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        onInputActiveChange(!isInputActive);
    }

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsInputActive(false);
                if (inputRef.current) {
                    inputRef.current.value = "";
                }
                inputRef.current?.blur();
                onInputActiveChange(false);
            }
        },
        [onInputActiveChange]
    );

    useEffect(() => {
        if (isInputActive) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isInputActive, handleKeyDown]);

    return (
        <Tooltip label="Search" direction="right" keys={["CTRL", "/"]} visible={!isInputActive}>
            <div className={`${isInputActive ? styles.containerActive : styles.container}`}>
                <div
                    className={styles.searchIcon}
                    onClick={() => {
                        setIsInputActive(true);
                        inputRef.current?.focus();
                        onInputActiveChange(true);
                    }}
                >
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className={`${isInputActive ? styles.searchActive : styles.search}`}
                    onClick={() => {
                        setIsInputActive(true);
                        inputRef.current?.focus();
                        onInputActiveChange(true);
                    }}
                    autoComplete="off"
                    style={{
                        cursor: isInputActive ? "text" : "pointer",
                        border: isInputActive ? "1px solid var(--input-border-color)" : " "
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

export { SearchInput };
