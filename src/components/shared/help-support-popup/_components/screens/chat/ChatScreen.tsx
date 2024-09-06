import styles from "./ChatScreen.module.css";
import { useRef, useLayoutEffect, useState, ReactNode } from "react";
import Image from "next/image";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";
import InputButton from "../../buttons/input-button/InputButton";
import ArrowIcon from "~/components/icons/ArrowIconThin";
import { ChatScreenProps } from "../../../types.module";
import ImagePlaceholder from "../../other/image-placeholder/ImagePlaceHolder";
import { groupBySender, groupByDate, formatDate } from "./utils";

const DEFAULT_CHAT_NAME = "Strut";
const DEFAULT_MAIN_TEXT = "We will reply as soon as we can";
const DEFAULT_SUB_TEXT = "Ask us anything, or share your feedback.";

export default function ChatScreen({
    chat,
    chatName,
    chatPhoto,
    chatMainText,
    chatSubText,
    onBackHandler,
    onCloseHandler
}: ChatScreenProps) {
    chat = chat || [];
    const textbox = useRef<any>(null);
    const [message, setMessage] = useState<string>("");
    const [hoveredMessageId, setHoveredMessageId] = useState<number | null>(null);
    const groupedBySenderChat = groupBySender(chat);
    const groupedByDateChat = groupByDate(chat);

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

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <NavigationButton styleMode="light" icon="arrow" position="left" onClick={onBackHandler} />
                <span className={styles.headerSpan}>{chatName || DEFAULT_CHAT_NAME}</span>
                <NavigationButton styleMode="light" onClick={onCloseHandler} />
            </div>
            <div className={styles.content}>
                <div className={styles.upperPart}>
                    <div className={styles.image}>
                        {chatPhoto ? (
                            <Image
                                src={chatPhoto}
                                alt={chatName || DEFAULT_CHAT_NAME}
                                className={styles.image}
                                width={64}
                                height={64}
                                unoptimized={true}
                            />
                        ) : (
                            <ImagePlaceholder letter={chatName ? chatName[0] : DEFAULT_CHAT_NAME[0]} size="big" />
                        )}
                    </div>
                    <span className={styles.textSpanMain}>{chatMainText || DEFAULT_MAIN_TEXT}</span>
                    <span className={styles.textSpanSub}>{chatSubText || DEFAULT_SUB_TEXT}</span>
                </div>
                <div className={styles.chat}>
                    {chat.map((message) => (
                        <div key={message.id}>
                            {groupedByDateChat.find((group) => group.id === message.id) && (
                                <div
                                    className={`${styles.date} ${groupedByDateChat[0].id === message.id ? styles.firstDate : ""}`}
                                >
                                    {formatDate(message.date)}
                                </div>
                            )}
                            <div
                                className={`${styles.messageWrapper} ${message.from != "user" ? styles.supportMessage : ""}  ${groupedBySenderChat.all.includes(message.id) ? "" : styles.secondaryMessageInGroup} ${groupedBySenderChat.leftSided.includes(message.id) ? "" : styles.secondaryMessageInLeftSidedGroup}`}
                            >
                                {groupedBySenderChat.system.includes(message.id) && (
                                    <Image
                                        height={32}
                                        width={32}
                                        src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                                        alt="Profile image for Fin"
                                        className={styles.avatar}
                                        unoptimized={true}
                                    />
                                )}
                                {groupedBySenderChat.interlocutor.includes(message.id) &&
                                    (chatPhoto ? (
                                        <Image
                                            height={32}
                                            width={32}
                                            src={chatPhoto}
                                            alt="Profile image for your interlocutor"
                                            className={styles.avatar}
                                            unoptimized={true}
                                        />
                                    ) : (
                                        <ImagePlaceholder
                                            className={`${styles.avatar} ${styles.avatarPlaceholder}`}
                                            letter={chatName ? chatName[0] : DEFAULT_CHAT_NAME[0]}
                                        />
                                    ))}
                                <div
                                    className={`${message.from != "user" ? styles.supportBubble : styles.userBubble}`}
                                    onMouseOver={() => setHoveredMessageId(message.id)}
                                    onMouseOut={() => {
                                        setHoveredMessageId(null);
                                    }}
                                >
                                    {message.text}
                                    <div
                                        className={styles.timeSentTooltip}
                                        style={hoveredMessageId === message.id ? undefined : { display: "none" }}
                                    >
                                        {message.time}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.lowerPart}>
                    <div className={styles.lowerPartContent}>
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
                    <div className={styles.footer} />
                </div>
            </div>
        </div>
    );
}
