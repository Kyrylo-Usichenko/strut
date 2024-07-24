import styles from "./WorkSpaceGridVIew.module.css";
import WorkSpaceGridViewIcon from "~/components/icons/WorkSpaceGridViewIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";

type Props = {
    title: string;
};
export default function WorkSpaceGridVIew({ title }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.start}>
                <WorkSpaceGridViewIcon />
                <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.dots}>
                <ThreeDotsIcon />
                <p className={styles.tooltip}>More Options</p>
            </div>
        </div>
    );
}
