"use cient";

import styles from "./styles.module.css";
import PlusIcon from "~/components/icons/PlusIcon";
import WorkSpaceGridVIew from "~/shared/components/WorkSpaceGridVIew/WorkSpaceGridVIew";

export default function GridView() {
    return (
        <div className={styles.container}>
            <a className={styles.createContainer}>
                <PlusIcon />
                <p className={styles.createDivTitle}>New workspace</p>
            </a>
            <WorkSpaceGridVIew title="Worspace1" />
            <WorkSpaceGridVIew title="Worspace2" />
        </div>
    );
}
