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
    const [currentNotificationsCount, setNotificationsCount] = useState(notificationsCount || 0);

    function clickHandler() {
        onClick();
        setNotificationsCount(0);
    }

    return (
        <button className={active ? styles.activeMenuButton : styles.menuButton} onClick={clickHandler}>
            <div className={styles.iconWrapper}>
                {active ? activeIcon : icon}
                {currentNotificationsCount > 0 && (
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
