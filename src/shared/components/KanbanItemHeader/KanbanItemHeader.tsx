"use client";
import styles from "./KanbanItemHeader.module.css";
import PlusIcon from "~/components/icons/PlusIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import StageInput from "~/components/shared/stage-input/StageInput";

type Props = {
    icon: React.ReactElement;
    title?: string;
    number: number;
    color: string;
};

export default function KanbanItemHeader({ icon, title = "Untilted", number, color }: Props) {
    return (
        <div className={styles.container}>
            <StageInput viewMode="kanban" icon={icon} width={200} value={title} amount={number} color={color} />
            <div className={styles.hidden}>
                <div className={styles.plusIcon}>
                    <PlusIcon />
                </div>
                <div className={styles.treeDotsIcon}>
                    <ThreeDotsIcon />
                </div>
            </div>
        </div>
    );
}
