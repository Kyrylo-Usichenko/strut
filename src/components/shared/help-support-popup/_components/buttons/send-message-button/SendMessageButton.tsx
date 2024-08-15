import styles from "./SendMessageButton.module.css";
import SendMessageIcon from "~/components/icons/HelpSupportSendMessageIcon";

type SendMessageButtonProps = {
    onClick?: () => void;
};

export default function SendMessageButton({ onClick }: SendMessageButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            <span>Send us a message</span>
            <SendMessageIcon />
        </button>
    );
}
