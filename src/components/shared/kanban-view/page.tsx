"use client";

import KanbanItem from "~/components/shared/KanbanItem/KanbanItem";
import styles from "./KanbanView.module.css";
import PersonIcon from "~/components/icons/AvatarIcon";
import CalendarIcon from "~/components/icons/CalendarIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import { Tags } from "~/components/shared/label-menu/LabelMenu";
import { tags } from "~/components/shared/board-list-view/page";
import React, { useState } from "react";
import CreateStageForKanbanView from "../CreateStageForKanbanView/CreateStageForKanbanView";

const cloneTags = (tags: Tags) => tags.map((tag) => ({ ...tag }));

type Task = {
    header: string;
    data: string[];
    tags: Tags;
};

type Column = {
    status: string;
    icon: React.ReactElement;
    color: string;
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
        icon: <PersonIcon />,
        color: "rgb(1, 114, 100)",
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
        icon: <CalendarIcon />,
        color: "rgb(255, 181, 70)",
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
        icon: <LaptopIcon />,
        color: "rgb(188, 87, 73)",
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
    const [onDragEnterColumn, setOnDragEnterColumn] = useState<string | null>(null);

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
                const newData = prevData.map((column) => ({
                    ...column,
                    taskData: column.taskData.map((task) => ({
                        ...task,
                        tags: cloneTags(task.tags)
                    }))
                }));

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

    function createStage(title: string, icon: React.ReactElement, iconColor: string) {
        const parsedTitle = title.trim() ? title : "Untitled";

        setData((prevData) => [
            ...prevData,
            {
                status: parsedTitle,
                icon,
                color: iconColor,
                taskData: []
            }
        ]);
    }

    return (
        <div className={styles.wrapper}>
            {data.map((column, index) => (
                <KanbanItem
                    key={column.status}
                    icon={column.icon}
                    number={column.taskData.length}
                    title={column.status}
                    position={index === 0 ? "left" : index === 1 ? "center" : "right"}
                    dataHeader={column.taskData}
                    color={column.color}
                    setActiveCard={setActiveCard}
                    activeCard={activeCard}
                    onDrop={onDrop}
                    onTagChecked={onTagChecked}
                    onDragEnterColumn={onDragEnterColumn}
                    setOnDragEnterColumn={setOnDragEnterColumn}
                />
            ))}
            <CreateStageForKanbanView createStage={createStage} />
        </div>
    );
}
