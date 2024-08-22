"use client";
import { useEffect, useState } from "react";
import Button from "~/components/shared/button/Button";
import styles from "./styles.module.css";

type Props = {
    title: string;
    info: string;
    onClose?: () => void;
    onDelete?: () => void;
};

function DeleteConfirmationModal({ title, info, onClose = () => {}, onDelete = () => {} }: Props) {
    function handleDeleteClick() {
        onDelete();
    }
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <p>{info}</p>
            </div>
            <div className={styles.buttons}>
                <Button text="Cancel" onClick={onClose} />
                <Button text="Delete" onClick={handleDeleteClick} />
            </div>
        </div>
    );
}
export { DeleteConfirmationModal };
