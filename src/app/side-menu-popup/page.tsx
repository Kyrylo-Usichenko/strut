import { PopupMenuWithButton } from "~/components/shared/PopupMenu/PopupMenuWithButton";
import styles from "~/components/shared/PopupMenu/styles.module.css";

function PopupMenuPage() {
    return (
        <div className={styles.wrapper}>
            <PopupMenuWithButton />
        </div>
    );
}

export default PopupMenuPage;
