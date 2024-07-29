import { StageMenu } from "~/components/shared/PopupMenu/StageMenu";
import styles from "~/components/shared/PopupMenu/styles.module.css";

function StageMenuPage() {
    return (
        <div className={styles.wrapper}>
            <StageMenu />
        </div>
    );
};

export default StageMenuPage;
