"use client";

import ShareModal from "~/components/shared/share-modal/page";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Button from "../button/Button";

export default function ShareButton() {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    function closeMenu() {
        setIsModalOpened(!isModalOpened);
    }
    return (
        <div>
            <Button text="Share" onClick={() => setIsModalOpened(true)} withoutBackground={true} />
            {isModalOpened && (
                <Modal isOpen={isModalOpened} onClose={closeMenu}>
                    <ShareModal />
                </Modal>
            )}
        </div>
    );
}
