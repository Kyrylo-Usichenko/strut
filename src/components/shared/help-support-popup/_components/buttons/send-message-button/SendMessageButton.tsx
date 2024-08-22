import styles from "./SendMessageButton.module.css";
import SendMessageIcon from "~/components/icons/HelpSupportSendMessageIcon";

type SendMessageButtonProps = {
    onClick?: () => void;
    colorMode?: "light" | "dark";
};

export default function SendMessageButton({ onClick, colorMode }: SendMessageButtonProps) {
    return (
        <button className={colorMode === "light" ? styles.buttonLight : styles.buttonDark} onClick={onClick}>
            <span>Send us a message</span>
            <SendMessageIcon />
        </button>
    );
}
