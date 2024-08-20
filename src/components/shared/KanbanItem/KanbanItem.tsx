import { ActiveCard } from "../kanban-view/page";
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
    title: string;
    number: number;
    dataHeader: HeaderProps[];
    color: string;
    position?: "left" | "right" | "center";
    setActiveCard: (card: ActiveCard) => void;
    onDrop: (status: string, position: number) => void;
    activeCard: ActiveCard;
};

export default function KanbanItem({
    icon,
    title,
    number,
    dataHeader,
    color,
    position,
    setActiveCard,
    onDrop,
    activeCard
}: Props) {
    return (
        <div className={styles.container}>
            <KanbanItemHeader icon={icon} number={number} title={title} color={color} position={position} />
            <KanbanViewBottom
                icon={icon}
                dataHeader={dataHeader}
                color={color}
                setActiveCard={setActiveCard}
                onDrop={onDrop}
                status={title}
                activeCard={activeCard}
            />
        </div>
    );
}
