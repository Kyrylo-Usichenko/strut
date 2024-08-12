import BullHornIcon from "~/components/icons/BullHornIcon";
import styles from "./styles.module.css";

type Props = {
    title: string;
};

function BrandVoiceGridView({ title }: Props) {
    return (
        <a className={styles.container}>
            <div className={styles.title}>
                <BullHornIcon className={styles.icon} />
                <p>{title}</p>
            </div>
        </a>
    );
}
export { BrandVoiceGridView };
