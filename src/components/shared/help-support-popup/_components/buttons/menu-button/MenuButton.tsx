import { ReactNode, useState } from "react";
import styles from "./MenuButton.module.css";

type MenuButtonProps = {
    icon: ReactNode;
    activeIcon: ReactNode;
    text: string;
    onClick: () => void;
    active: boolean;
    notificationsCount?: number;
};

export default function MenuButton({ icon, activeIcon, text, active, onClick, notificationsCount }: MenuButtonProps) {
    function clickHandler() {
        onClick();
    }

    return (
        <button className={active ? styles.activeMenuButton : styles.menuButton} onClick={clickHandler}>
            <div className={styles.iconWrapper}>
                {active ? activeIcon : icon}
                {notificationsCount && notificationsCount > 0 && (
                    <div className={styles.outerNotificationCircle}>
                        <div className={styles.innerNotificationCircle}>
                            <span>{notificationsCount}</span>
                        </div>
                    </div>
                )}
            </div>
            <span>{text}</span>
        </button>
    );
}
