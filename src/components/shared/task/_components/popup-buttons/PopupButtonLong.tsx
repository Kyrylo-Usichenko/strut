import { useState } from "react";
import styles from "./styles.module.css";
import SmallArrowIcon from "../formatting-popup-menu/icons/SmallArrow";

type PopupButtonLongProps = {
    onClick: () => void;
    text: string;
    icon?: React.ReactNode;
};

export default function PopupButtonLong({ onClick, text, icon }: PopupButtonLongProps) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <button
            className={styles.button}
            onClick={() => {
                onClick();
                setExpanded(!expanded);
            }}
        >
            {icon && <>{icon}</>}
            <span>{text}</span>
            <SmallArrowIcon />
        </button>
    );
}
