import styles from "./HomeButton.module.css";
import { ReactNode } from "react";
import { Message } from "../../../types.module";
import MessagePreview from "../../other/message-preview/MessagePreview";

type HomeButtonProps = {
    mainText: string;
    subText?: string;
    icon?: ReactNode;
    message?: Message;
    onClick?: () => void;
};

export default function HomeButton({ mainText, subText, icon, message, onClick }: HomeButtonProps) {
    return (
        <button className={styles.homeButton} onClick={onClick}>
            <div className={styles.textWrapper}>
                <span className={styles.mainText}>{mainText}</span>
                {subText && <span className={styles.subText}>{subText}</span>}
                {message && <MessagePreview message={message} />}
            </div>
            <div className={styles.iconWrapper}>{icon}</div>
        </button>
    );
}

function ImagePlaceholder({ letter }: { letter: string }) {
    return <div className={styles.imagePlaceholder}>{letter}</div>;
}
