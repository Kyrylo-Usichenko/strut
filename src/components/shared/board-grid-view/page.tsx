"use client";

import styles from "./styles.module.css";
import ShopBagIcon from "~/components/icons/ShopBagIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import BoardGridViewItem from "~/components/shared/BoardGridViewItem/BoardGridViewItem";
import { Tags } from "~/components/shared/label-menu/LabelMenu";
import { tags } from "~/components/shared/board-list-view/page";
import { ReactElement, useState } from "react";
import { ActiveCard } from "../kanban-view/page";
import CreateStageForListAndBoardView from "../CreateStageForListAndBoardView/CreateStageForListAndBoardView";

const cloneTags = (tags: Tags) => tags.map((tag) => ({ ...tag }));

const initialData = [
    {
        status: "Some text",
        icon: <ShopBagIcon />,
        iconColor: "rgb(255, 181, 70)",
        data: [
            {
                title: "Some text1",
                textData: ["bla bla bla", "lalala", "omg"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news2",
                textData: ["Fly me to the moon", "USA", "Obama", "Obama", "Obama"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news3",
                textData: ["Fly me to the moon", "USA"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news4",
                textData: ["Fly me to the moon", "USA", "Obama", "Biden"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news5",
                textData: ["Fly me to the moon", "USA", "Obama", "Biden"],
                tags: cloneTags(tags)
            }
        ]
    },
    {
        status: "Hello world",
        icon: <LaptopIcon />,
        iconColor: "rgb(1, 114, 100)",
        data: [
            {
                title: "Some text1",
                textData: ["bla bla bla", "lalala", "omg"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news2",
                textData: ["Fly me to the moon", "USA", "Obama", "Obama", "Obama"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news3",
                textData: ["Fly me to the moon", "USA"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news4",
                textData: ["Fly me to the moon", "USA", "Obama", "Biden"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news5",
                textData: ["Fly me to the moon", "USA", "Obama", "Biden"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news6",
                textData: ["Fly me to the moon", "USA", "Obama", "Biden"],
                tags: cloneTags(tags)
            }
        ]
    },
    {
        status: "Fly me to the Moon",
        icon: <TrashBinIcon />,
        iconColor: "rgb(188, 87, 73)",
        data: [
            {
                title: "Some text",
                textData: ["bla bla bla", "lalala", "omg"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news",
                textData: ["Fly me to the moon", "USA", "Obama", "Obama", "Obama", "Fly me to the moon"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news",
                textData: ["Fly me to the moon", "USA"],
                tags: cloneTags(tags)
            },
            {
                title: "Great news",
                textData: ["Fly me to the moon", "USA", "Fly me to the moon", "Fly me to the moon"],
                tags: cloneTags(tags)
            }
        ]
    }
];

type ColumnItem = { title: string; textData: string[]; tags: Tags };

type InitialData = {
    status: string;
    icon: ReactElement;
    iconColor: string;
    data: ColumnItem[];
};

export default function BoardGridView() {
    const [data, setData] = useState<InitialData[]>(initialData);
    const [activeCard, setActiveCard] = useState<ActiveCard>(null);

    function onTagChecked(tags: Tags, status: string, title?: string, index?: number) {
        setData((prevData) =>
            prevData.map((column) => {
                if (column.status === status) {
                    return {
                        ...column,
                        data: column.data.map((item) => {
                            if (item.title === title) {
                                return { ...item, tags: tags };
                            }
                            return item;
                        })
                    };
                }
                return column;
            })
        );
    }

    function onDrop(position: string, targetStatus: string, targetTitle: string) {
        if (!activeCard) return;

        setData((prevData: InitialData[]) => {
            const sourceColumnIndex = prevData.findIndex((column) => column.status === activeCard.status);
            if (sourceColumnIndex === -1) return prevData;

            const sourceColumn = prevData[sourceColumnIndex];
            const sourceCardIndex = sourceColumn.data.findIndex((item) => item.title === activeCard.content.header);
            if (sourceCardIndex === -1) return prevData;

            const newData = prevData.map((column, index) =>
                index === sourceColumnIndex
                    ? { ...column, data: column.data.filter((_, i) => i !== sourceCardIndex) }
                    : column
            );

            const targetColumnIndex = newData.findIndex((column) => column.status === targetStatus);
            if (targetColumnIndex === -1) return prevData;

            const targetColumn = newData[targetColumnIndex];
            const targetCardIndex = targetColumn.data.findIndex((item) => item.title === targetTitle);

            const newColumnItem: ColumnItem = {
                title: activeCard.content.header,
                textData: activeCard.content.data,
                tags: activeCard.content.tags
            };

            const updatedTargetColumn = {
                ...targetColumn,
                data: [
                    ...targetColumn.data.slice(0, position === "top" ? targetCardIndex : targetCardIndex + 1),
                    newColumnItem,
                    ...targetColumn.data.slice(position === "top" ? targetCardIndex : targetCardIndex + 1)
                ]
            };

            return newData.map((column, index) => (index === targetColumnIndex ? updatedTargetColumn : column));
        });

        setActiveCard(null);
    }

    function createStage(title: string, icon: React.ReactElement, iconColor: string) {
        const parsedTitle = title.trim() ? title : "Untitled";
        setData((prevData) => [
            ...prevData,
            {
                status: parsedTitle,
                icon,
                iconColor,
                data: []
            }
        ]);
    }

    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <BoardGridViewItem
                    key={index}
                    title={item.status}
                    icon={item.icon}
                    iconColor={item.iconColor}
                    number={item.data.length}
                    data={item.data}
                    position={index === 0 ? "top" : index === data.length - 1 ? "bottom" : "center"}
                    onTagChecked={onTagChecked}
                    setActiveCard={setActiveCard}
                    onDrop={onDrop}
                    activeCard={activeCard}
                />
            ))}
            <CreateStageForListAndBoardView createStage={createStage} />
        </div>
    );
}
