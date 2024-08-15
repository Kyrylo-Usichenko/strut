import styles from "./MessagesScreen.module.css";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";
import SendMessageButton from "../../buttons/send-message-button/SendMessageButton";
import { Message } from "../../../types.module";
import MessagePreview from "../../other/message-preview/MessagePreview";

type MessagesScreenProps = {
    messages?: Message[];
    onSendMessageClick?: () => void;
};

export default function MessagesScreen({ messages, onSendMessageClick }: MessagesScreenProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.headerSpan}>Messages</span>
                <NavigationButton styleMode="light" />
            </div>
            <div className={styles.content}>
                {messages ? (
                    messages.map((message, index) => <MessagePreview key={index} message={message} separator={true} />)
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
