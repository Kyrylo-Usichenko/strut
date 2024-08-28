"use client";
import { useState } from "react";
import Button from "~/components/shared/button/Button";
import styles from "./styles.module.css";

function ChatSettingsModal() {
    const [buttonText, setButtonText] = useState<string>("Edit");
    const handleChange = () => {
        setButtonText("Save");
    };

    const handleButtonClick = () => {
        if (buttonText === "Save") {
            setButtonText("Edit");
        }
    };

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <p className={styles.title}>Settings</p>
                <Button text={buttonText} onClick={handleButtonClick} />
            </div>
            <textarea
                placeholder="Add instruction in here to give the AI extra content on what you would like to do..."
                onChange={handleChange}
                onFocus={handleChange}
                className={styles.textarea}
            />
        </div>
    );
}

export { ChatSettingsModal };
