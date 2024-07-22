import styles from "./GridView.module.css";
import PlusIcon from "../../components/icons/PlusIcon"
import WorkSpaceGridVIew from "~/shared/components/WorkSpaceGridVIew/WorkSpaceGridVIew";


export default function GridView() {
  return (
    <div className={styles.div}>
      <div className={styles.createDiv}>
        <PlusIcon />
        <p className={styles.createDivTitle}>New workspace</p>
      </div>
      <WorkSpaceGridVIew title="Worspace1"/>
      <WorkSpaceGridVIew title="Worspace2"/>
    </div>
  )
}
