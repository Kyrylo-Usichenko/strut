import { useState } from "react";
import styles from "./styles.module.css";

type PopupButtonLongProps = {
    onClick: () => void;
    icon: React.ReactNode;
    isClicked?: boolean;
};

export default function PopupButtonSmall({ onClick, icon, isClicked }: PopupButtonLongProps) {
    const [isCurrentlyClicked, setIsCurrentlyClicked] = useState<boolean>(isClicked || false);

    return (
        <button
            className={styles.button}
            onClick={() => {
                onClick();
                setIsCurrentlyClicked(!isCurrentlyClicked);
            }}
            style={
                isCurrentlyClicked
                    ? { backgroundColor: "rgb(255, 181, 70)", color: "rgba(0, 0, 0, 0.8)", borderRadius: "8px" }
                    : {}
            }
        >
            {icon}
        </button>
    );
}
