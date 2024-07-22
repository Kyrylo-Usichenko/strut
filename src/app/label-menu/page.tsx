"use client";

import styles from "./LabelMenu.module.css";
import TagIcon from "../../components/icons/TagIcon";
import { useState } from "react";

export default function LabelMenu() {
    const [isMenuOpened, setISMenuOpened] = useState<boolean>(false);

    function handleMenu() {
        setISMenuOpened(!isMenuOpened);
    }

    return (
        <div className={styles.div}>
            <div className={styles.labelDiv} onClick={handleMenu}>
                <TagIcon />
                <p className={styles.title}>Add a tag</p>
            </div>

            {isMenuOpened && <div className={styles.menu}>
                <input type="text" className={styles.input} placeholder="Add a tag..." autoComplete="off"/>  
                <p className={styles.tagText}>No tags yet</p>  
            </div>}
        </div>
    );
}
