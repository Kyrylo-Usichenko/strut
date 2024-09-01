"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "../../button/Button";
import ButtonIconOnly from "../../buttonIconOnly/ButtonIconOnly";
import AISettingsIcon from "~/components/icons/AISettingsIcon";
import { Chat } from "../Chat/Chat";
import Modal from "../../Modal/Modal";
import { ChatSettingsModal } from "../../ChatSettingsModal/ChatSettingsModal";
import styles from "./container.module.css";

type Props = {
    isOpen: boolean;
};

export type Message = {
    type: "user" | "strut";
    text: string;
};

function ChatContainer({ isOpen }: Props) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [width, setWidth] = useState<number>(0);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const chatRef = useRef<HTMLDivElement>(null);
    const isResizing = useRef<boolean>(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        const updateWidth = () => {
            if (chatRef.current) {
                const parentWidth = chatRef.current.parentElement?.clientWidth || 0;
                setWidth(parentWidth / 2);
            }
        };

        updateWidth();

        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing.current) return;

            if (chatRef.current) {
                const parentWidth = chatRef.current.parentElement?.clientWidth || 0;
                const maxWidth = parentWidth - 16;
                setWidth((prevWidth) => {
                    const newWidth = prevWidth - e.movementX;
                    return Math.min(Math.max(465, newWidth), maxWidth);
                });
            }
        };

        const handleMouseUp = () => {
            isResizing.current = false;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const startResizing = (e: React.MouseEvent) => {
        e.preventDefault();
        isResizing.current = true;
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div
            ref={chatRef}
            className={`${styles.container} ${isOpen ? styles.open : styles.closed}`}
            style={{ width: `${width}px` }}
        >
            <div className={styles.header}>
                {messages.length > 0 && <Button text="Clear Chat" onClick={handleClearChat} />}
                <ButtonIconOnly icon={<AISettingsIcon />} tooltipLabel="AI Settings" onClick={openModal} />
            </div>
            <Chat messages={messages} setMessages={setMessages} />
            <div className={styles.resizer} onMouseDown={startResizing} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ChatSettingsModal />
            </Modal>
        </div>
    );
}

export { ChatContainer };
