"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useBrandVoices } from "~/context/brandVoiceContext";
import { BrandVoiceGridView } from "~/components/shared/BrandVoiceGridView/BrandVoiceGridView";
import { CreateVoiceModal } from "~/components/shared/CreateVoiceModal/CreateVoiceModal";
import PlusIcon from "~/components/icons/PlusIcon";
import Modal from "~/components/shared/Modal/Modal";
import styles from "./styles.module.css";

export default function BrandVoices() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const { brandVoices, addBrandVoice, setSelectedTitle } = useBrandVoices();
    const router = useRouter();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleAddBrandVoice = (newTitle: string) => {
        addBrandVoice(newTitle);
        closeModal();
    };

    const handleOpenBrandVoice = (title: string) => {
        setSelectedTitle(title);
        router.push("/brand-voice");
    };

    return (
        <div className={styles.container}>
            <div className={styles.createContainer} onClick={openModal}>
                <PlusIcon width={12} height={12} />
                <p className={styles.createDivTitle}>New Brand Voice</p>
            </div>
            {brandVoices.map((item, index) => (
                <BrandVoiceGridView key={index} title={item} onClick={() => handleOpenBrandVoice(item)} />
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <CreateVoiceModal onClose={closeModal} onCreate={handleAddBrandVoice} />
            </Modal>
        </div>
    );
}
