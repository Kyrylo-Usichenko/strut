"use client";

import React, { useState } from "react";
import styles from "./CreateStageForKanbanView.module.css";
import PlusIcon from "~/components/icons/PlusIcon";
import Button from "../button/Button";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";
import StageInput from "../stage-input/StageInput";

type Props = {
    createStage: (title: string, icon: React.ReactElement, iconColor: string) => void;
};

export default function CreateStageForKanbanView({ createStage }: Props) {
    const [isBottomMenuOpened, setIsBottomMenuOpened] = useState<boolean>(false);

    function handleCreateStage(title: string, icon: React.ReactElement, iconColor: string) {
        createStage(title, icon, iconColor);
        setIsBottomMenuOpened(false);
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
                        <StageInput
                            viewMode="kanban"
                            isCreated={true}
                            createStage={handleCreateStage}
                            onCancelClick={() => setIsBottomMenuOpened(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
