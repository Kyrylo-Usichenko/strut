import React from "react";
import Link from "next/link";
import styles from "../sidebar.module.css";

interface Props {
    icon: JSX.Element;
    label: string;
    link: string;
}

function SidebarItem({ icon, label, link }: Props) {
    return (
        <Link href={link}>
            <div className={styles.item}>
                {icon}
                <span>{label}</span>
            </div>
        </Link>
    );
}

export { SidebarItem };
