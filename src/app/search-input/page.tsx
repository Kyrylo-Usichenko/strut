"use client";

import React, { use, useState } from "react";
import styles from "./SearchInput.module.css";
import CircleWithCrossIcon from "../../components/icons/CircleWithCrossIcon";
import SearchIcon from "../../components/icons/SearchIcon";

export default function SearchInput() {
    const [isInputActive, setIsInputActive] = useState(false);

    function toggle() {
        setIsInputActive(!isInputActive);
    }
    return (
        <div className={styles.div}>
            <div className={styles.searchIcon} style={{
                color: isInputActive ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)"
            }}>
                <SearchIcon />
            </div>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className={styles.search}
                autoComplete="off"
                onClick={toggle}
            />
            {isInputActive && (
                <div className={styles.crossIcon} onClick={toggle}>
                    <CircleWithCrossIcon />
                </div>
            )}
        </div>
    );
}
