"use client";

import React, { useState } from "react";
import styles from "./CreateStageForListAndBoardView.module.css";
import PlusIcon from "~/components/icons/PlusIcon";
import Button from "../button/Button";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";
import StageInput from "../stage-input/StageInput";

type Props = {
    createStage: (title: string, icon: React.ReactElement, iconColor: string) => void;
};

export default function CreateStageForListAndBoardView({ createStage }: Props) {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    function handleCreateStage(title: string, icon: React.ReactElement, iconColor: string) {
        setIsMenuOpened(false);
        createStage(title, icon, iconColor);
    }

    return (
        <div className={styles.container}>
            {isMenuOpened ? (
                <StageInput
                    viewMode="list"
                    isCreated={true}
                    createStage={handleCreateStage}
                    onCancelClick={() => setIsMenuOpened(false)}
                />
            ) : (
                <button className={styles.createBtn} onClick={() => setIsMenuOpened(true)}>
                    <PlusIcon width={12} height={12} /> Add a Stage
                </button>
            )}
        </div>
    );
}
