import styles from "./MessagesScreen.module.css";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";
import SendMessageButton from "../../buttons/send-message-button/SendMessageButton";
import { MessagesScreenProps } from "../../../types.module";
import MessagePreview from "../../other/message-preview/MessagePreview";

export default function MessagesScreen({ messages, onSendMessageClick, onChatClick }: MessagesScreenProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.headerSpan}>Messages</span>
                <NavigationButton styleMode="light" />
            </div>
            <div className={styles.content}>
                {messages ? (
                    messages.map((message, index) => (
                        <MessagePreview
                            key={index}
                            message={message}
                            separator={true}
                            clickHandler={() => (onChatClick ? onChatClick(message) : undefined)}
                        />
                    ))
                ) : (
                    <></>
                )}
            </div>
            <div className={styles.buttonDiv}>
                <SendMessageButton onClick={onSendMessageClick} />
            </div>
        </div>
    );
}
