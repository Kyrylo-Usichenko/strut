"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import CircleWithCrossIcon from "~/components/icons/CircleWithCrossIcon";
import SearchIcon from "~/components/icons/SearchIcon";

export default function SearchInput() {
    const [isInputActive, setIsInputActive] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function toggle() {
        setIsInputActive(!isInputActive);
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            setIsInputActive(false);
            inputRef.current?.blur();
        }
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

    return (
        <div className={styles.container}>
            <div
                className={styles.searchIcon}
                style={{
                    color: isInputActive ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)"
                }}
            >
                <SearchIcon />
            </div>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className={styles.search}
                autoComplete="off"
                onClick={() => setIsInputActive(true)}
                style={{
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
    );
}
