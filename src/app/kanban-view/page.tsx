import KanbanItem from "~/components/shared/KanbanItem/KanbanItem";
import styles from "./KanbanView.module.css";
import PersonIcon from "~/components/icons/AvatarIcon";
import CalendarIcon from "~/components/icons/CalendarIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import { Tags } from "~/components/shared/label-menu/LabelMenu";
import { tags } from "~/components/shared/board-list-view/page";

const cloneTags = (tags: Tags) => tags.map((tag) => ({ ...tag }));

const dataHeader1 = [
    { header: "Task1", data: ["Prepare for exams", "Read book", "Make tea"], tags: cloneTags(tags) },
    {
        header: "Task2",
        data: ["Wake up"],
        tags: cloneTags(tags)
    }
];

const dataHeader2 = [
    {
        header: "To do",
        data: ["Programming", "sleep"],
        tags: cloneTags(tags)
    }
];

const dataHeader3 = [
    {
        header: "Big booom",
        data: ["bla bla bla"],
        tags: cloneTags(tags)
    },
    {
        header: "Small boom",
        data: ["wooo", "foo", "booo"],
        tags: cloneTags(tags)
    }
];

export default function KanbanView() {
    return (
        <div className={styles.wrapper}>
            <KanbanItem
                icon={<PersonIcon />}
                number={0}
                title="In process"
                position="left"
                dataHeader={dataHeader1}
                color="rgb(1, 114, 100)"
            />
            <KanbanItem
                icon={<CalendarIcon />}
                number={5}
                title="TO DO"
                position="center"
                dataHeader={dataHeader2}
                color="rgb(255, 181, 70)"
            />
            <KanbanItem
                icon={<LaptopIcon />}
                number={7}
                title="Something"
                position="right"
                dataHeader={dataHeader3}
                color="rgb(188, 87, 73)"
            />
        </div>
    );
}
