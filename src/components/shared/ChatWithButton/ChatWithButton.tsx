"use client";
import { useEffect, useState } from "react";
import { ChatContainer } from "./ChatContainer/ChatContainer";
import SidebarIcon from "~/components/icons/SidebarIcon";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import Task from "../task/Task";
import LocalStorage from "~/storage/LocalStorage";
import styles from "./styles.module.css";

function ChatWithButton() {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [taskContent, setTaskContent] = useState<string | null>(null);

    useEffect(() => {
        const clearTaskContent = () => {
            LocalStorage.removeTaskContent();
        };

        clearTaskContent();

        const handleTaskContentChange = () => {
            const content = LocalStorage.getTaskContent();
            if (content) {
                setTaskContent(content);
            }
        };

        window.addEventListener("taskContentChanged", handleTaskContentChange);

        return () => {
            window.removeEventListener("taskContentChanged", handleTaskContentChange);
        };
    }, []);

    function toggleChat() {
        setIsOpen(!isOpen);
    }

    function ChatIcon() {
        return (
            <div className={styles.icon}>
                <SidebarIcon />
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <ButtonIconOnly
                // tooltipLabel="Close Sidebar"
                // tooltipKeys={["CTRL", "/"]}
                icon={<ChatIcon />}
                onClick={toggleChat}
                className={styles.button}
            />
            {taskContent && (
                <Task
                    content={[
                        { text: "Untitled", textType: "documentTitle" },
                        {
                            text: taskContent,
                            textType: "p"
                        }
                    ]}
                />
            )}
            <ChatContainer isOpen={isOpen} />
        </div>
    );
}

export default ChatWithButton;
