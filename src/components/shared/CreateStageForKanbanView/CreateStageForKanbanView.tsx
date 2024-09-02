"use client";

import React, { useState } from "react";
import styles from "./CreateStageForKanbanView.module.css";
import PlusIcon from "~/components/icons/PlusIcon";
import Button from "../button/Button";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";

type Props = {
    createStage: (title: string, icon: React.ReactElement, iconColor: string) => void;
};

export default function CreateStageForKanbanView({ createStage }: Props) {
    const [title, setTitle] = useState<string>("Untitled");
    const [icon, setIcon] = useState<React.ReactElement>(<DashedCircleIcon />);
    const [color, setColor] = useState<string>("rgba(255, 255, 255, 0.5)");
    const [isBottomMenuOpened, setIsBottomMenuOpened] = useState<boolean>(false);

    function handleCreateStage() {
        setIsBottomMenuOpened(false);
        createStage(title, icon, color);
    }

    return (
        <div className={styles.container}>
            {!isBottomMenuOpened ? (
                <button className={styles.addStageBtn} onClick={() => setIsBottomMenuOpened(true)}>
                    <PlusIcon width={12} height={12} /> Add a Stage
                </button>
            ) : (
                <div className={styles.bottomMenu}>
                    <div className={styles.btnContainer}>
                        <Button text="Create" onClick={handleCreateStage} />
                        <Button text="Cancel" onClick={() => setIsBottomMenuOpened(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}
