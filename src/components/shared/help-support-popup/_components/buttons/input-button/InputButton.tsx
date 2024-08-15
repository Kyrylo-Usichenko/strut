import styles from "./InputButton.module.css";
import EmojiIcon from "../../../../../icons/EmojiIcon";
import GifIcon from "../../../../../icons/GifIcon";
import AttachmentIcon from "../../../../../icons/AttachmentIcon";

type InputButtonProps = {
    icon: "emoji" | "gif" | "attachment";
    onClick: () => void;
};

export default function InputButton({ icon, onClick }: InputButtonProps) {
    return (
        <button className={styles.wrapper} onClick={onClick}>
            {icon === "emoji" && <EmojiIcon />}
            {icon === "gif" && <GifIcon />}
            {icon === "attachment" && <AttachmentIcon />}
        </button>
    );
}
