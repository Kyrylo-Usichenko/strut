import { ReactNode } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
    icon: ReactNode;
    onClick: () => void;
};

export default function MenuButton({ icon, onClick }: ButtonProps) {

    return (
        <button className={styles.button} style={{ color: "inherit" }} onClick={onClick}>
            {icon}
        </button>
    );
}
