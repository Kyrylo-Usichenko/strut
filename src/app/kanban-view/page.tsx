import KanbanItem from "~/shared/components/KanbanItem/KanbanItem";
import styles from "./KanbanView.module.css";
import PersonIcon from "~/components/icons/AvatarIcon";
import CalendarIcon from "~/components/icons/CalendarIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";

const dataHeader1 = [
    { header: "Task1", data: ["Prepare for exams", "Read book", "Make tea"] },
    {
        header: "Task2",
        data: ["Wake up"]
    }
];

const dataHeader2 = [
    {
        header: "To do",
        data: ["Programming", "sleep"]
    }
];

const dataHeader3 = [
    {
        header: "Big booom",
        data: ["bla bla bla"]
    },
    {
        header: "Small boom",
        data: ["wooo", "foo", "booo"]
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
