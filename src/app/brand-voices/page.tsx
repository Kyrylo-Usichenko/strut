"use client";
import { BrandVoiceGridView } from "~/components/shared/BrandVoiceGridView/BrandVoiceGridView";
import styles from "./styles.module.css";
import PlusIcon from "~/components/icons/PlusIcon";
import { CreateVoiceModal } from "~/components/shared/CreateVoiceModal/CreateVoiceModal";
import Modal from "~/components/shared/Modal/Modal";
import { useState } from "react";

export type BrandVoiceType = string;

export default function BrandVoices() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [brandVoiceItems, setBrandVoiceItems] = useState<BrandVoiceType[]>([]);

    const handleButtonClick = () => {
        setModalOpen(!isModalOpen);
    };

    const handleAddBrandVoice = (newTitle: BrandVoiceType) => {
        setBrandVoiceItems([...brandVoiceItems, newTitle]);
        handleButtonClick();
    };

    return (
        <div className={styles.container}>
            <div className={styles.createContainer} onClick={handleButtonClick}>
                <PlusIcon width={12} height={12} />
                <p className={styles.createDivTitle}>New Brand Voice</p>
            </div>
            {brandVoiceItems.map((item, index) => (
                <BrandVoiceGridView key={index} title={item} />
            ))}
            <Modal isOpen={isModalOpen} onClose={handleButtonClick}>
                <CreateVoiceModal onClose={handleButtonClick} onCreate={handleAddBrandVoice} />
            </Modal>
        </div>
    );
}
