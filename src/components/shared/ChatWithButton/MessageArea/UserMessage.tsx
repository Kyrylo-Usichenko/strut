import React from "react";
import styles from "./message.module.css";
import ButtonIconOnly from "../../buttonIconOnly/ButtonIconOnly";
import AvatarIcon from "~/components/icons/AvatarIcon";

type Props = {
    text: string;
};

const UserMessage: React.FC<Props> = ({ text }) => {
    return (
        <div className={styles.message}>
            <div className={styles.header}>
                <AvatarIcon />
                <span>You</span>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default UserMessage;
