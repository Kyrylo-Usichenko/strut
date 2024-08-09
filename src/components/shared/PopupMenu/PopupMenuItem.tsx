import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";

type Props = {
    icon: JSX.Element;
    label: string;
    link: string;
    isActive?: boolean;
};

function PopupMenuItem({ icon, label, link, isActive = false }: Props) {
    return (
        <Link href={link}>
            <div className={`${styles.item} ${isActive ? styles.isActive : ""}`}>
                {icon}
                <span>{label}</span>
            </div>
        </Link>
    );
}

export { PopupMenuItem };
