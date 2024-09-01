"use client";

import ShopBagIcon from "~/components/icons/ShopBagIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import BoardListViewItem from "~/components/shared/BoardListViewItem/BoardListViewItem";
import styles from "./styles.module.css";
import { Tags } from "../label-menu/LabelMenu";
import { ReactElement, useCallback, useState } from "react";

export const tags = [
    { text: "done", isChecked: false },
    { text: "in proggress", isChecked: true },
    { text: "to do", isChecked: false },
    { text: "review", isChecked: true },
    { text: "today", isChecked: false },
    { text: "someday", isChecked: false }
];

const cloneTags = (tags: Tags) => tags.map((tag) => ({ ...tag }));

type TextData = {
    text: string;
    tags: Tags;
};

type Column = {
    status: string;
    icon: ReactElement;
    iconColor: string;
    textData: TextData[];
    position: string;
};

export type ActiveCard = {
    index: number;
    status: string;
    content: TextData;
} | null;

const initialData = [
    {
        status: "Some text",
        icon: <ShopBagIcon />,
        iconColor: "rgb(255, 181, 70)",
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
        position: "top"
    },
    {
        status: "Hello world",
        icon: <LaptopIcon />,
        iconColor: "rgb(1, 114, 100)",
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
    },
    {
        status: "Fly me to the Moon",
        icon: <TrashBinIcon />,
        iconColor: "rgb(188, 87, 73)",
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
    }
];

export default function BoardListView() {
    const [data, setData] = useState<Column[]>(initialData);
    const [activeCard, setActiveCard] = useState<ActiveCard>(null);

    const onTagChecked = (tags: Tags, status: string, index: number) => {
        setData((prevData) => {
            return prevData.map((column) => {
                if (column.status === status) {
                    const newTextData = [...column.textData];
                    newTextData[index] = {
                        ...newTextData[index],
                        tags: tags
                    };
                    return { ...column, textData: newTextData };
                }
                return column;
            });
        });
    };

    const onDrop = useCallback(
        (toStatus: string, position: number) => {
            if (activeCard) {
                const { index: fromIndex, status: fromStatus, content } = activeCard;

                setData((prevData) => {
                    const newData = JSON.parse(JSON.stringify(prevData)) as Column[];

                    const fromColumn = newData.find((col) => col.status === fromStatus);
                    const toColumn = newData.find((col) => col.status === toStatus);

                    if (fromColumn && toColumn) {
                        fromColumn.textData.splice(fromIndex, 1);
                        toColumn.textData.splice(position, 0, content);
                    }

                    return newData;
                });

                setActiveCard(null);
            }
        },
        [activeCard, setData, setActiveCard]
    );
    return (
        <div className={styles.wrapper}>
            {data.map((item, index) => (
                <BoardListViewItem
                    key={index}
                    status={item.status}
                    icon={item.icon}
                    iconColor={item.iconColor}
                    number={item.textData.length}
                    textData={item.textData}
                    position={item.position}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    onTagChecked={onTagChecked}
                />
            ))}
        </div>
    );
}
