import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import styles from "~/components/shared/PopupMenu/styles.module.css";

function PopupMenuPage() {
    return (
        <div className={styles.wrapper}>
            <PopupMenu />
        </div>
    );
};

export default PopupMenuPage;
