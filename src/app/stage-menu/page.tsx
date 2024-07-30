import { StageMenuWithButton } from "~/components/shared/stage-menu/StageMenuWithButton";
import styles from "~/components/shared/PopupMenu/styles.module.css";

function StageMenuPage() {
    return (
        <div className={styles.wrapper}>
            <StageMenuWithButton />
        </div>
    );
};

export default StageMenuPage;
