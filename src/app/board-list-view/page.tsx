import ShopBagIcon from "~/components/icons/ShopBagIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import BoardListViewItem from "~/components/shared/BoardListViewItem/BoardListViewItem";
import styles from "./styles.module.css";
const data1 = {
    title: "Some text",
    icon: <ShopBagIcon />,
    iconColor: "rgb(255, 181, 70)",
    number: 3,
    textData: ["Task1", "Task2", "Task3"],
    position: "top"
};

const data2 = {
    title: "Hello world",
    icon: <LaptopIcon />,
    iconColor: "rgb(1, 114, 100)",
    number: 2,
    textData: ["BlaBlaBla", "Hahahaha"],
    position: "center"
};

const data3 = {
    title: "Fly me to the Moon",
    icon: <TrashBinIcon />,
    iconColor: "rgb(188, 87, 73)",
    number: 3,
    textData: ["Rocet", "USA", "Moon"],
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
