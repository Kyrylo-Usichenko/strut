import ShopBagIcon from "~/components/icons/ShopBagIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import BoardListViewItem from "~/components/shared/BoardListViewItem/BoardListViewItem";
import styles from "./styles.module.css";
import { Tags } from "../label-menu/LabelMenu";

export const tags = [
    { text: "done", isChecked: false },
    { text: "in proggress", isChecked: true },
    { text: "to do", isChecked: false },
    { text: "review", isChecked: true },
    { text: "today", isChecked: false },
    { text: "someday", isChecked: false }
];

const cloneTags = (tags: Tags) => tags.map((tag) => ({ ...tag }));

const data1 = {
    title: "Some text",
    icon: <ShopBagIcon />,
    iconColor: "rgb(255, 181, 70)",
    number: 3,
    textData: [
        {
            text: "Task1",
            tags: cloneTags(tags)
        },
        {
            text: "Task2",
            tags: cloneTags(tags)
        },
        {
            text: "Task3",
            tags: cloneTags(tags)
        }
    ],
    position: "bottom"
};

const data2 = {
    title: "Hello world",
    icon: <LaptopIcon />,
    iconColor: "rgb(1, 114, 100)",
    number: 2,
    textData: [
        {
            text: "BlaBlaBla",
            tags: cloneTags(tags)
        },
        {
            text: "Hahahaha",
            tags: cloneTags(tags)
        }
    ],
    position: "center"
};

const data3 = {
    title: "Fly me to the Moon",
    icon: <TrashBinIcon />,
    iconColor: "rgb(188, 87, 73)",
    number: 3,
    textData: [
        {
            text: "Rocet",
            tags: cloneTags(tags)
        },
        {
            text: "USA",
            tags: cloneTags(tags)
        },
        {
            text: "Moon",
            tags: cloneTags(tags)
        }
    ],
    position: "bottom"
};

export default function BoardListView() {
    return (
        <div className={styles.wrapper}>
            <BoardListViewItem {...data1} />
            <BoardListViewItem {...data2} />
            <BoardListViewItem {...data3} />
        </div>
    );
}
