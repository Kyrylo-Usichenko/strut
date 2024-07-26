"use client";

import { useEffect } from "react";
import AccountMenu from "~/app/account-menu/page";
import Popup from "../../popup/Popup";
import { useVisible } from "../../PopupMenu/utils/useVisible";
import styles from "./AccountMenu.module.css";

type Props = {
    isOpened: boolean;
    onClose: () => void;
};

export default function AccountPopup({ isOpened, onClose }: Props) {
    const { ref, isVisible, setIsVisible } = useVisible(isOpened);

    useEffect(() => {
        setIsVisible(isOpened);
    }, [isOpened, setIsVisible]);

    useEffect(() => {
        if (!isVisible) {
            onClose();
        }
    }, [isVisible, onClose]);

    return (
        <Popup
            isOpened={isVisible}
            borderRadius={12}
            position={{
                top: "36px",
                right: "0",
            }}
        >
            <div ref={ref} className={styles.inner}>
                <AccountMenu />
            </div>
        </Popup>
    );
}
