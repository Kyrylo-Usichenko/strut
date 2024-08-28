import React, { useEffect, useRef, useState } from "react";
import { Message } from "../ChatContainer/ChatContainer";
import { ChatInput } from "../ChatInput/ChatInput";
import { MessageArea } from "../MessageArea/MessageArea";
import styles from "./chat.module.css";

type Props = {
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    onTaskContentChange?: (text: string) => void;
};

const Chat: React.FC<Props> = ({ messages, setMessages }) => {
    const inputRef = useRef<HTMLDivElement | null>(null);
    const handleSend = (message: string) => {
        setMessages((prevMessages) => [...prevMessages, { type: "user", text: message }]);
    };

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].type === "user") {
            const timer = setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        type: "strut",
                        text: `
                            <p>Welcome to Strut! To use chat effectively, you can follow these steps:</p>
                            <ol>
                                <li><strong>Organize Your Workspaces:</strong>
                                    <ul>
                                        <li>Customize stages, change their order, and personalize them according to your workflow.</li>
                                    </ul>
                                </li>
                                <li><strong>Collaborate with AI in the Sidebar:</strong>
                                    <ul>
                                        <li>Chat with AI alongside your documents for brainstorming, rewriting, summarizing, and gaining insights.</li>
                                    </ul>
                                </li>
                                <li><strong>Unlock AI Commands:</strong>
                                    <ul>
                                        <li>Access AI commands like Brainstorm Ideas, Generate Outline, Review, Create a Draft, and Re-purpose Content for various tasks.</li>
                                    </ul>
                                </li>
                                <li><strong>Collaborate with Your Team:</strong>
                                    <ul>
                                        <li>Share specific workspaces with teammates to collaborate in real-time, organize documents, and have full permissions.</li>
                                    </ul>
                                </li>
                            </ol>
                            <p>If you have any specific questions while using the chat feature, feel free to ask!</p>
                        `
                    }
                ]);
            }, 250);

            return () => clearTimeout(timer);
        }
    }, [messages, setMessages]);

    const handleTypingStopped = (truncatedText: string) => {
        setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            const lastIndex = updatedMessages.length - 1;

            if (updatedMessages[lastIndex].type === "strut") {
                updatedMessages[lastIndex] = {
                    ...updatedMessages[lastIndex],
                    text: truncatedText
                };
            }

            return updatedMessages;
        });
    };

    return (
        <div className={styles.chat}>
            <MessageArea messages={messages} onTypingStopped={handleTypingStopped} inputRef={inputRef} />
            <div ref={inputRef} className={styles.ref}>
                <ChatInput onSend={handleSend} />
            </div>
        </div>
    );
};

export { Chat };
