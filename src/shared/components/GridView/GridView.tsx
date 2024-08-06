import WorkSpaceGridVIew from "../WorkSpaceGridVIew/WorkSpaceGridVIew";
import styles from "./GridView.module.css";
import PlusIcon from "~/components/icons/PlusIcon";

export default function GridView() {
    return (
        <div className={styles.container}>
            <a className={styles.createContainer}>
                <PlusIcon width={12} height={12} />
                <p className={styles.createDivTitle}>New workspace</p>
            </a>
            <WorkSpaceGridVIew title="Worspace1" />
            <WorkSpaceGridVIew title="Worspace2" />
        </div>
    );
}
