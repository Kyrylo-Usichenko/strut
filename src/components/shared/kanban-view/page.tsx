"use client";

import KanbanItem from "~/components/shared/KanbanItem/KanbanItem";
import styles from "./KanbanView.module.css";
import PersonIcon from "~/components/icons/AvatarIcon";
import CalendarIcon from "~/components/icons/CalendarIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import { Tags } from "~/components/shared/label-menu/LabelMenu";
import { tags } from "~/components/shared/board-list-view/page";
import { useState } from "react";

const cloneTags = (tags: Tags) => tags.map((tag) => ({ ...tag }));

type Task = {
    header: string;
    data: string[];
    tags: Tags;
};

type Column = {
    status: string;
    taskData: Task[];
};

export type ActiveCard = {
    index: number;
    status: string;
    content: Task;
} | null;

const initialData = [
    {
        status: "In process",
        taskData: [
            { header: "Task1", data: ["Prepare for exams", "Read book", "Make tea"], tags: cloneTags(tags) },
            {
                header: "Task2",
                data: ["Wake up"],
                tags: cloneTags(tags)
            }
        ]
    },

    {
        status: "TO DO",
        taskData: [
            {
                header: "To do",
                data: ["Programming", "sleep"],
                tags: cloneTags(tags)
            }
        ]
    },
    {
        status: "Something",
        taskData: [
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
        ]
    }
];

export default function KanbanView() {
    const [data, setData] = useState<Column[]>(initialData);
    const [activeCard, setActiveCard] = useState<ActiveCard>(null);

    function onTagChecked(tags: Tags, status: string, title?: string, index?: number) {
        setData((prevData) => {
            const newData = prevData.map((column) => {
                if (column.status === status) {
                    const newTaskData = column.taskData.map((task, taskIndex) => {
                        if (taskIndex === index) {
                            return { ...task, tags };
                        }
                        return task;
                    });
                    return { ...column, taskData: newTaskData };
                }
                return column;
            });
            return newData;
        });
    }

    const onDrop = (toStatus: string, position: number) => {
        if (activeCard) {
            const { index: fromIndex, status: fromStatus, content } = activeCard;

            setData((prevData) => {
                const newData = JSON.parse(JSON.stringify(prevData)) as Column[];

                const fromColumn = newData.find((col) => col.status === fromStatus);
                const toColumn = newData.find((col) => col.status === toStatus);

                if (fromColumn && toColumn) {
                    fromColumn.taskData.splice(fromIndex, 1);
                    toColumn.taskData.splice(position, 0, content);
                }
                setActiveCard(null);
                return newData;
            });
        }
        setActiveCard(null);
    };

    return (
        <div className={styles.wrapper}>
            {data.map((column, index) => (
                <KanbanItem
                    key={column.status}
                    icon={index === 0 ? <PersonIcon /> : index === 1 ? <CalendarIcon /> : <LaptopIcon />}
                    number={column.taskData.length}
                    title={column.status}
                    position={index === 0 ? "left" : index === 1 ? "center" : "right"}
                    dataHeader={column.taskData}
                    color={index === 0 ? "rgb(1, 114, 100)" : index === 1 ? "rgb(255, 181, 70)" : "rgb(188, 87, 73)"}
                    setActiveCard={setActiveCard}
                    activeCard={activeCard}
                    onDrop={onDrop}
                    onTagChecked={onTagChecked}
                />
            ))}
        </div>
    );
}
