import React, { useRef, useEffect } from "react";
import { Message } from "../ChatContainer/ChatContainer";
import UserMessage from "./UserMessage";
import StrutMessage from "./StrutMessage";
import styles from "./message.module.css";

type Props = {
    messages: Message[];
    onTypingStopped?: (text: string) => void;
    inputRef?: React.RefObject<HTMLDivElement>;
};

const MessageArea: React.FC<Props> = ({ messages, onTypingStopped, inputRef }) => {
    const endRef = useRef<HTMLDivElement | null>(null);
    const messageAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages]);

    return (
        <div className={styles.messageArea} ref={messageAreaRef}>
            {messages.map((message, index) =>
                message.type === "user" ? (
                    <UserMessage key={index} text={message.text} />
                ) : (
                    <StrutMessage
                        key={index}
                        text={message.text}
                        isLast={index === messages.length - 1}
                        onTypingStopped={onTypingStopped}
                        inputRef={inputRef}
                        containerRef={messageAreaRef}
                    />
                )
            )}
            <div ref={endRef} className={styles.endRef} />
        </div>
    );
};

export { MessageArea };
