"use client";
import BullHornIcon from "~/components/icons/BullHornIcon";
import styles from "./styles.module.css";

type Props = {
    title: string;
    onClick?: () => void;
};

function BrandVoiceGridView({ title, onClick = () => {} }: Props) {
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.title}>
                <BullHornIcon className={styles.icon} />
                <p>{title}</p>
            </div>
        </div>
    );
}

export { BrandVoiceGridView };
