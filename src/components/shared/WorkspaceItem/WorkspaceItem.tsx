import { ReactNode } from "react";
import styles from "./WorkspaceItem.module.css";

type Props = {
    icon: ReactNode;
    title: string;
    number: number;
    color: string;
};

export default function WorkspaceItem({ icon, title, number, color }: Props) {
    return (
        <div className={styles.item}>
            <div style={{color: `${color}`}} className={styles.icon}>{icon}</div>
            <p className={styles.title}>{title}</p>
            <p className={styles.number}>{number}</p>
        </div>
    );
}
