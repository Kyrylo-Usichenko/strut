"use client";
import { useEffect, useState, useCallback } from "react";
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

    const handleCreateClick = useCallback(() => {
        if (inputValue.trim()) {
            onCreate(inputValue);
        }
    }, [inputValue, onCreate]);

    const handleEnterKey = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                handleCreateClick();
            }
        },
        [handleCreateClick]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleEnterKey);
        return () => {
            document.removeEventListener("keydown", handleEnterKey);
        };
    }, [handleEnterKey]);

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
