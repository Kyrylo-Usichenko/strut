import KanbanItemHeader from "../KanbanItemHeader/KanbanItemHeader";
import KanbanViewBottom from "../KanbanViewBottom/KanbanViewBottom";
import { Tags } from "../label-menu/LabelMenu";
import styles from "./KanbanItem.module.css";

type HeaderProps = {
    header: string;
    data: string[];
    tags: Tags;
};

type Props = {
    icon: React.ReactElement;
    title?: string;
    number: number;
    dataHeader: HeaderProps[];
    color: string;
    position?: "left" | "right" | "center";
};

export default function KanbanItem({ icon, title, number, dataHeader, color, position }: Props) {
    return (
        <div className={styles.container}>
            <KanbanItemHeader icon={icon} number={number} title={title} color={color} position={position} />
            <KanbanViewBottom icon={icon} dataHeader={dataHeader} color={color} />
        </div>
    );
}
