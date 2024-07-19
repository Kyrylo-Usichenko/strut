import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";

type Props = {
    icon: JSX.Element;
    label: string;
    link: string;
};

function PopupMenuItem({ icon, label, link }: Props) {
    return (
        <Link href={link}>
            <div className={styles.item}>
                {icon}
                <span>{label}</span>
            </div>
        </Link>
    );
}

export { PopupMenuItem };
