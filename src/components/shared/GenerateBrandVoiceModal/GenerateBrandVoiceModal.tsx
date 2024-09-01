"use client";
import { useEffect, useState, useCallback } from "react";
import Button from "~/components/shared/button/Button";
import styles from "./styles.module.css";

type Props = {
    onClose?: () => void;
    onCreate?: (text: string) => void;
};

function GenerateBrandVoiceModal({ onClose = () => {}, onCreate = (text: string) => {} }: Props) {
    const [inputValue, setInputValue] = useState<string>("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputValue(e.target.value);
    }

    const handleCreateClick = useCallback(() => {
        if (inputValue.trim() !== "") {
            const generatedText = `This is an example of Brand Voice generated based on your website link:
Tone: Be informative, encouraging, and forward-thinking to engage and inspire developers.

Structure: Use clear headings to organize content and concise sentences to convey information efficiently.

Do this: Provide valuable insights and updates on Chrome and web technologies.
Dont do this: do this: Use jargon or complex language that may confuse readers.`;
            onCreate(generatedText);
        }
    }, [inputValue, onCreate]);

    const handleEnterKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Enter") {
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
    }, [inputValue, handleEnterKey]);

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <p className={styles.title}>Generate from Website</p>
                <p>We&apos;ll automatically scan and generate a Brand Voice based on your website link.</p>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="name" className={styles.label}>
                    Link
                </label>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles.input}
                    type="text"
                    id="name"
                    placeholder="https://www.example.com"
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

export { GenerateBrandVoiceModal };
