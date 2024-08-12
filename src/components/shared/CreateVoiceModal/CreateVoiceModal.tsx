"use client";
import { useEffect, useState } from "react";
import Button from "~/components/shared/button/Button";
import styles from "./styles.module.css";

type Props = {
    onClose?: () => void;
    onCreate?: (newTitle: string) => void;
};

function CreateVoiceModal({ onClose = () => {}, onCreate = () => {} }: Props) {
    const [inputValue, setInputValue] = useState<string>("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputValue(e.target.value);
    }

    function handleCreateClick() {
        if (inputValue.trim()) {
            onCreate(inputValue);
        }
    }

    function handleEnterKey(event: KeyboardEvent) {
        if (event.key === "Enter") {
            handleCreateClick();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEnterKey);
        return () => {
            document.removeEventListener("keydown", handleEnterKey);
        };
    }, [inputValue]);

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <p className={styles.title}>New Brand Voice</p>
                <p>Train the AI on your unique brand voice</p>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="name" className={styles.label}>
                    Name
                </label>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles.input}
                    type="text"
                    id="name"
                    placeholder="Brand Voice name..."
                    autoComplete="off"
                    autoFocus
                />
            </div>
            <div className={styles.buttons}>
                <Button text="Cancel" onClick={onClose} />
                <Button text="Create" state={!inputValue ? "disabled" : undefined} onClick={handleCreateClick} />
            </div>
        </div>
    );
}
export { CreateVoiceModal };
