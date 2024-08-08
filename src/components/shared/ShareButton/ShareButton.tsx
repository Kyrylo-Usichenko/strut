"use client";

import ShareModal from "~/app/share-modal/page";
import Modal from "../Modal/Modal";
import styles from "./ShareButton.module.css";
import { useState } from "react";

export default function ShareButton() {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    function closeMenu() {
        setIsModalOpened(!isModalOpened);
    }
    return (
        <div>
            <button className={styles.btn} onClick={() => setIsModalOpened(true)}>
                Share
            </button>
            {isModalOpened && (
                <Modal isOpen={isModalOpened} onClose={closeMenu}>
                    <ShareModal />
                </Modal>
            )}
        </div>
    );
}
