import { ReactNode } from "react";
import styles from "./MenuButton.module.css";

type MenuButtonProps = {
    icon: ReactNode;
    activeIcon: ReactNode;
    text: string;
    onClick: () => void;
    active: boolean;
};

export default function MenuButton({ icon, activeIcon, text, active, onClick }: MenuButtonProps) {
    return (
        <button className={active ? styles.activeMenuButton : styles.menuButton} onClick={onClick}>
            <div className={styles.iconWrapper}>{active ? activeIcon : icon}</div>
            <span>{text}</span>
        </button>
    );
}
