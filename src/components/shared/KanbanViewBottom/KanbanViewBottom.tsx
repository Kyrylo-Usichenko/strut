import KanbanViewBottomItem from "../KanbanViewBottomItem/KanbanViewBottomItem";
import { Tags } from "../label-menu/LabelMenu";
import styles from "./KanbanViewBottom.module.css";

type HeaderProps = {
    header: string;
    data: string[];
    tags: Tags;
};

type Props = {
    icon: React.ReactElement;
    dataHeader: HeaderProps[];
    color: string;
};

export default function KanbanViewBottom({ icon, dataHeader, color }: Props) {
    return (
        <div className={styles.container}>
            {dataHeader.map((item, index) => (
                <KanbanViewBottomItem
                    key={index}
                    icon={icon}
                    header={item.header}
                    data={item.data}
                    color={color}
                    tags={item.tags}
                />
            ))}
        </div>
    );
}
