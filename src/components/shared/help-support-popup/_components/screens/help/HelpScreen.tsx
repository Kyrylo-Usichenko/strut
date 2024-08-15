import styles from "./HelpScreen.module.css";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";

export default function HelpScreen() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWithInput}>
                <div className={styles.header}>
                    <span className={styles.headerSpan}>Help</span>
                    <NavigationButton styleMode="light" />
                </div>
                <div className={styles.inputWrapper}>
                    <textarea rows={1} placeholder="Search for help" className={styles.input} />
                </div>
            </div>
            <div className={styles.content}></div>
        </div>
    );
}
