import styles from "./KanbanViewBottomItem.module.css";
import LabelMenu from "~/app/label-menu/page";
import SmallChekIcon from "~/components/icons/SmallChekIcon"

type Props = {
    icon: React.ReactElement;
    header: string;
    data: string[];
    color: string
};

export default function KanbanViewBottomItem({ icon, header, data, color }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.chekedIcon}><SmallChekIcon/></div>
            <div className={styles.tag}>
                <LabelMenu />
            </div>
            <h3 className={styles.title}>{header}</h3>
            {data.map((item, index) => (
                <p key={index} className={styles.item}>
                    {item}
                </p>
            ))}
            <div className={styles.icon} style={{color: color}}>{icon}</div>
        </div>
    );
}
