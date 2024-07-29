"use client";

import TagIcon from "~/components/icons/TagIcon";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function Page() {
    const [isMenuOpened, setISMenuOpened] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    function handleMenuOpen() {
        setISMenuOpened((prev) => !prev);
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            setISMenuOpened(false);
        }
    }

    function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setISMenuOpened(false);
        }
    }

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
            <button className={styles.labelDiv} onClick={handleMenuOpen}>
                <TagIcon />
                <p className={styles.title}>Add a tag</p>
            </button>

            {isMenuOpened && (
                <div ref={menuRef} className={styles.menu}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Add a tag..."
                        autoComplete="off"
                    />
                    <p className={styles.tagText}>No tags yet</p>
                </div>
            )}
        </div>
    );
}
