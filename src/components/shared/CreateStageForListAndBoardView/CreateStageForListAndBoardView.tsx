"use client";

import React, { useState } from "react";
import styles from "./CreateStageForListAndBoardView.module.css";
import PlusIcon from "~/components/icons/PlusIcon";
import Button from "../button/Button";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";

type Props = {
    createStage: (title: string, icon: React.ReactElement, iconColor: string) => void;
};

export default function CreateStageForListAndBoardView({ createStage }: Props) {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("Untitled");
    const [icon, setIcon] = useState<React.ReactElement>(<DashedCircleIcon />);
    const [color, setColor] = useState<string>("rgba(255, 255, 255, 0.5)");

    function handleCreateStage() {
        setIsMenuOpened(false);
        createStage(title, icon, color);
    }

    return (
        <div className={styles.container}>
            {isMenuOpened ? (
                <div className={styles.menu}>
                    <Button text="Create" onClick={handleCreateStage} />
                    <Button text="Cancel" onClick={() => setIsMenuOpened(false)} />
                </div>
            ) : (
                <button className={styles.createBtn} onClick={() => setIsMenuOpened(true)}>
                    <PlusIcon width={12} height={12} /> Add a Stage
                </button>
            )}
        </div>
    );
}
