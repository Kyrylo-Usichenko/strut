import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";

type Props = {
    icon: JSX.Element;
    label: string;
    onClick?: () => void;
    isActive?: boolean;
};

function PopupMenuItem({ icon, label, isActive = false, onClick = () => {} }: Props) {
    return (
        <div>
            <div className={`${styles.item} ${isActive ? styles.isActive : ""}`} onClick={onClick}>
                {icon}
                <span>{label}</span>
            </div>
        </div>
    );
}

export { PopupMenuItem };
