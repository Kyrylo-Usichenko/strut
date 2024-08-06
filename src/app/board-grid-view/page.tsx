import styles from "./styles.module.css";
import ShopBagIcon from "~/components/icons/ShopBagIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import BoardGridViewItem from "~/shared/components/BoardGridViewItem/BoardGridViewItem";
const data1 = {
    title: "Some text",
    icon: <ShopBagIcon />,
    iconColor: "rgb(255, 181, 70)",
    number: 3,
    // textData: ["Task1", "TAsk2", "Task3", "Task4", "Task5", "Task5", "Task5"],
    data: [
        {
            title: "Some text",
            textData: ["bla bla bla", "lalala", "omg"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA", "Obama", "Obama", "Obama"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA", "Obama", "Biden"]
        }
    ],
    position: "top"
};

const data2 = {
    title: "Hello world",
    icon: <LaptopIcon />,
    iconColor: "rgb(1, 114, 100)",
    number: 2,
    data: [
        {
            title: "Some text",
            textData: ["bla bla bla", "lalala", "omg"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA", "Obama", "Obama", "Obama"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        }
    ],
    position: "center"
};

const data3 = {
    title: "Fly me to the Moon",
    icon: <TrashBinIcon />,
    iconColor: "rgb(188, 87, 73)",
    number: 3,
    data: [
        {
            title: "Some text",
            textData: ["bla bla bla", "lalala", "omg"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA", "Obama", "Obama", "Obama"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        },
        {
            title: "Great news",
            textData: ["Fly me to the moon", "USA"]
        }
    ],
    position: "bottom"
};

export default function BoardGridView() {
    return (
        <div className={styles.container}>
            <BoardGridViewItem {...data1} />
            <BoardGridViewItem {...data2} />
            <BoardGridViewItem {...data3} />
        </div>
    );
}
