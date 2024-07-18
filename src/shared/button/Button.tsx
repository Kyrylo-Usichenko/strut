import { ReactNode } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
    icon?: ReactNode;
    text: string;
    onClick: () => void;
};

export default function Button({ icon, text, onClick }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {icon && <div className={styles.icon}>{icon}</div>}
            {<p className={styles.text}>{text}</p>}
        </button>
    );
}
