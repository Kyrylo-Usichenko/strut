import styles from "./ChatScreen.module.css";
import { useRef, useLayoutEffect, useState, ReactNode } from "react";
import Image from "next/image";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";
import InputButton from "../../buttons/input-button/InputButton";
import ArrowIcon from "~/components/icons/ArrowIconThin";
import { ChatScreenProps } from "../../../types.module";

export default function ChatScreen({ chat, onBackHandler, onCloseHandler }: ChatScreenProps) {
    chat = chat || [];
    const textbox = useRef<any>(null);
    const [message, setMessage] = useState<string>("");
    const [hoveredMessageId, setHoveredMessageId] = useState<number | null>(1);
    const [hoveredMessageCords, setHoveredMessageCords] = useState<{ x: number; y: number } | null>(null);

    function adjustHeight() {
        if (textbox && textbox.current) {
            textbox.current.style.height = "inherit";
            textbox.current.style.height = `${textbox.current.scrollHeight}px`;
        }
    }

    useLayoutEffect(adjustHeight, []);

    function handleKeyDown() {
        adjustHeight();
        setMessage(textbox.current.value);
    }

    function onChatMessageHoverHandler(id: number, event: React.MouseEvent<HTMLDivElement>) {
        setHoveredMessageId(id);
        const rect = (event.target as any).getBoundingClientRect();
        console.log(rect);
        setHoveredMessageCords({
            x: rect.x,
            y: rect.y - 64
        });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <NavigationButton styleMode="light" icon="arrow" position="left" onClick={onBackHandler} />
                <span className={styles.headerSpan}>Strut</span>
                <NavigationButton styleMode="light" onClick={onCloseHandler} />
            </div>
            <div className={styles.content}>
                <div className={styles.upperPart}>
                    <div className={styles.image}>
                        <Image
                            src="https://static.intercomassets.com/avatars/6691399/square_128/kyle-thacker-1705882183.jpg"
                            alt="Strut"
                            className={styles.image}
                            width={64}
                            height={64}
                            unoptimized={true}
                        />
                    </div>
                    <span className={styles.textSpanMain}>We will reply as soon as we can</span>
                    <span className={styles.textSpanSub}>Ask us anything, or share your feedback.</span>
                </div>
                <div className={styles.chat}>
                    {chat.map((message) => (
                        <div
                            key={message.id}
                            className={`${styles.messageWrapper} ${message.from === "support" ? styles.supportMessage : ""}`}
                        >
                            {message.from === "support" && (
                                <Image
                                    height={32}
                                    width={32}
                                    src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                                    alt="Profile image for Fin"
                                    className={styles.avatar}
                                    unoptimized={true}
                                />
                            )}
                            {hoveredMessageId === message.id && (
                                <div
                                    className={styles.timeSentTooltip}
                                    style={
                                        hoveredMessageCords
                                            ? {
                                                  top: hoveredMessageCords.y,
                                                  left: hoveredMessageCords.x
                                              }
                                            : {}
                                    }
                                >
                                    {message.time}
                                </div>
                            )}
                            <div
                                className={message.from === "support" ? styles.supportBubble : styles.userBubble}
                                onMouseOver={(event) => onChatMessageHoverHandler(message.id, event)}
                                onMouseOut={() => {
                                    setHoveredMessageId(null);
                                    setHoveredMessageCords(null);
                                }}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.lowerPart}>
                    <textarea
                        ref={textbox}
                        onChange={handleKeyDown}
                        rows={1}
                        placeholder="Message..."
                        className={styles.input}
                    />
                    <div className={styles.buttons}>
                        <InputButton icon="emoji" onClick={() => {}} />
                        {message.length === 0 && <InputButton icon="gif" onClick={() => {}} />}
                        {message.length === 0 && <InputButton icon="attachment" onClick={() => {}} />}
                        <button className={styles.sendButton} disabled={message.length === 0}>
                            <ArrowIcon direction="up" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
