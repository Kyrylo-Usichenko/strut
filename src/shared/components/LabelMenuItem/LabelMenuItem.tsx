"use client";

import { useRef, useState } from "react";
import styles from "./LabelMenuItem.module.css";

export default function LabelMenuItem() {
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    function handleInputEnter(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }
    return (
        <div>
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
        </div>
    );
}
