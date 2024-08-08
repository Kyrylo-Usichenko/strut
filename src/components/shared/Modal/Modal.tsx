import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    const handleClickOutside = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div className={styles.modal} onClick={handleClickOutside}>
            {children}
        </div>,
        document.body
    );
};

export default Modal;
