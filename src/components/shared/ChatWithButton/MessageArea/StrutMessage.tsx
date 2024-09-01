import React, { useEffect, useState, useRef, useCallback } from "react";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import SmallBlankIcon from "~/components/icons/SmallBlankIcon";
import LocalStorage from "~/storage/LocalStorage";
import styles from "./message.module.css";
import Modal from "../../Modal/Modal";
import { ChatSettingsModal } from "../../ChatSettingsModal/ChatSettingsModal";

type Props = {
    text: string;
    isLast: boolean;
    onTypingStopped?: (text: string) => void;
    inputRef?: React.RefObject<HTMLDivElement>;
    containerRef: React.RefObject<HTMLDivElement>;
};

const StrutMessage: React.FC<Props> = ({ text, isLast, onTypingStopped, inputRef, containerRef }) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [isStopped, setStopped] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const lastMessageRef = useRef<HTMLDivElement | null>(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        if (isLast && lastMessageRef.current && containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                {
                    root: containerRef.current,
                    rootMargin: "0px",
                    threshold: 0.1
                }
            );

            const currentMessageRef = lastMessageRef.current;
            observer.observe(currentMessageRef);

            return () => {
                if (currentMessageRef) {
                    observer.unobserve(currentMessageRef);
                }
            };
        }
    }, [isLast, containerRef]);

    const typingEffect = useCallback(() => {
        let index = 0;
        const speed = 1;
        let insideTag = false;

        const typeNextCharacter = () => {
            if (index < text.length && !isStopped) {
                const currentChar = text[index];

                if (currentChar === "<") {
                    insideTag = true;
                } else if (currentChar === ">") {
                    insideTag = false;
                    setDisplayedText(text.substring(0, index + 1));
                }

                if (!insideTag) {
                    setDisplayedText(text.substring(0, index + 1));
                }

                index++;
                timeoutRef.current = setTimeout(typeNextCharacter, speed);
            } else {
                setIsTyping(false);
            }
        };

        typeNextCharacter();
    }, [text, isStopped]);

    useEffect(() => {
        if (!isLast) {
            setDisplayedText(text);
            setIsTyping(false);
            return;
        }

        setIsTyping(true);
        typingEffect();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [text, isLast, typingEffect]);

    const stopTyping = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            setStopped(true);
            setIsTyping(false);
            if (onTypingStopped) {
                onTypingStopped(displayedText);
            }
        }
    };

    const stripHtmlTags = (html: string) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        let text = div.textContent || div.innerText || "";
        return text.replace(/\s+/g, " ").trim();
    };

    const handleCopyToClipboard = () => {
        const plainText = stripHtmlTags(displayedText);
        navigator.clipboard.writeText(plainText);
    };

    const handleCreateDoc = () => {
        LocalStorage.setTaskContent(stripHtmlTags(displayedText));
    };

    const inputPosition = inputRef?.current?.getBoundingClientRect();

    return (
        <div
            ref={lastMessageRef}
            className={`${styles.message} ${isLast ? styles.last : styles.prev} ${isVisible ? styles.inView : ""}`}
        >
            <div className={styles.header}>
                <div className={styles.icon}></div>
                <span className={styles.title} onClick={openModal}>
                    Strut
                </span>
            </div>
            <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                    __html: displayedText
                }}
            />
            <div className={`${styles.buttons} ${isTyping ? styles.above : ""}`}>
                <button className={styles.button} onClick={handleCreateDoc}>
                    <span>
                        <SmallBlankIcon />
                    </span>
                    <p>Create a doc</p>
                </button>
                <button className={styles.button} onClick={handleCopyToClipboard}>
                    <span>
                        <DuplicateIcon />
                    </span>
                    <p>Copy to clipboard</p>
                </button>
            </div>
            {isTyping && inputPosition && (
                <div
                    className={styles.typing}
                    style={{
                        top: inputPosition.top - 40,
                        width: inputPosition.width
                    }}
                >
                    <div className={styles.typingText}>
                        Strut is typing
                        <div className={styles.typingDots}>
                            <span className={styles.dot}>.</span>
                            <span className={styles.dot}>.</span>
                            <span className={styles.dot}>.</span>
                        </div>
                    </div>
                    <button onClick={stopTyping}>Stop Writing</button>
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ChatSettingsModal />
            </Modal>
        </div>
    );
};

export default StrutMessage;
