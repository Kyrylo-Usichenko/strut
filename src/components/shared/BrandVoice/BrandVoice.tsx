"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useBrandVoices } from "~/context/brandVoiceContext";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import { MenuItem, PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";
import TextInput from "~/components/shared/stage-input/_components/text-input/TextInput";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import Modal from "../Modal/Modal";
import Button from "../button/Button";
import LinkIcon from "~/components/icons/LinkIcon";
import styles from "./styles.module.css";
import { GenerateBrandVoiceModal } from "../GenerateBrandVoiceModal/GenerateBrandVoiceModal";
import StopIcon from "~/components/icons/StopIcon";

interface Props {
    title: string;
}

function BrandVoice({ title }: Props) {
    const router = useRouter();
    const [titleValue, setTitleValue] = useState<string>(title);
    const [inputValue, setInputValue] = useState<string>("");
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isGenerateModalOpen, setGenerateModalOpen] = useState<boolean>(false);
    const [charCount, setCharCount] = useState<number>(0);
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const { updateBrandVoice, deleteBrandVoice } = useBrandVoices();
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const animationFrameRef = useRef<number>(0);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const openGenerateModal = () => setGenerateModalOpen(true);
    const closeGenerateModal = () => setGenerateModalOpen(false);

    const items: MenuItem[] = [
        {
            icon: <TrashBinIcon />,
            label: "Delete Brand Voice",
            onClick: openModal
        }
    ];

    const handleBackClick = () => {
        router.back();
    };

    const handleMenuOpen = () => {
        setIsVisible(!isVisible);
    };

    const handleBlur = () => {
        const newTitle = titleValue.trim() === "" ? "Untitled" : titleValue;
        updateBrandVoice(title, newTitle);
        setTitleValue(newTitle);
        router.replace(`/brand-voice`);
    };

    const handleTitleChange = (newTitle: string) => {
        setTitleValue(newTitle);
    };
    const adjustTextAreaHeight = (textarea: HTMLTextAreaElement | null) => {
        if (textarea) {
            textarea.style.height = "auto";
            const bottomPadding = 24;
            const topOffset = textarea.getBoundingClientRect().top;
            const maxHeight = window.innerHeight - topOffset - bottomPadding;
            textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;

        if (newValue.replace(/\n/g, "").length <= 800) {
            setInputValue(newValue);
            setCharCount(newValue.replace(/\n/g, "").length);
            adjustTextAreaHeight(event.target);
        }
    };

    const typingEffect = (text: string) => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            let index = -1;
            setInputValue("");
            setIsTyping(true);

            const typeNextCharacter = () => {
                if (index < text.length - 1) {
                    setInputValue((prev) => prev + text[index]);
                    index++;

                    adjustTextAreaHeight(textarea);
                    animationFrameRef.current = requestAnimationFrame(() => typeNextCharacter());
                } else {
                    setIsTyping(false);
                }
            };

            typeNextCharacter();
        }
    };

    const stopTyping = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            setIsTyping(false);
        }
    };

    const handleGenerateClick = (text: string) => {
        closeGenerateModal();
        typingEffect(text);
    };

    function SmallArrow() {
        return (
            <div className={styles.backIcon}>
                <SmallArrowIcon width={12} height={12} />
            </div>
        );
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.left}>
                    <ButtonIconOnly icon={<SmallArrow />} tooltipLabel="Back" onClick={handleBackClick} />
                    <TextInput
                        value={titleValue}
                        width={199}
                        styleMode="list"
                        onChange={handleTitleChange}
                        onBlur={handleBlur}
                        setWidth={() => {}}
                    />
                </div>
                <div className={styles.right} ref={ref}>
                    <ButtonIconOnly
                        onClick={handleMenuOpen}
                        icon={<ThreeDotsIcon />}
                        tooltipLabel="More Options"
                        tooltipVisible={!isVisible}
                        className={isVisible ? styles.button : ""}
                    />
                    <PopupMenu items={items} direction="bottom" visible={isVisible} />
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.contentTitle}>
                        <p className={styles.title}>Brand Voice</p>
                        <p>Use your brand voice to create on-brand content.</p>
                    </div>
                    <Button text="Generate from Website" icon={<LinkIcon />} onClick={openGenerateModal} />
                    <div className={styles.inputContainer}>
                        <textarea
                            ref={textareaRef}
                            rows={1}
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Create your own Brand Voice..."
                            className={styles.textarea}
                            autoFocus
                        />
                        <div className={styles.charCount}>{charCount}/800 Characters</div>
                        {isTyping && (
                            <div className={styles.typing}>
                                <p>Strut is typing...</p>
                                <button className={styles.stopButton} onClick={stopTyping}>
                                    <span className={styles.icon}>
                                        <StopIcon />
                                    </span>
                                    Stop Writing
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <DeleteConfirmationModal
                    title={`Are you sure you want to delete the "${titleValue}" brand voice?`}
                    info="All content inside the brand voice will be deleted."
                    onClose={closeModal}
                    onDelete={() => {
                        deleteBrandVoice(titleValue);
                        closeModal();
                        handleBackClick();
                    }}
                />
            </Modal>
            <Modal isOpen={isGenerateModalOpen} onClose={closeGenerateModal}>
                <GenerateBrandVoiceModal onClose={closeGenerateModal} onCreate={handleGenerateClick} />
            </Modal>
        </div>
    );
}

export { BrandVoice };
