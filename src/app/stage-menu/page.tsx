"use client";
import React, { FC, useState } from "react";
import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import ArrowIcon from "~/components/icons/ArrowIcon";
import styles from "~/components/shared/PopupMenu/menu.module.css";

const items = [
    { icon: <ArrowIcon direction="up" />, label: "Move Stage Up", link: "" },
    { icon: <ArrowIcon direction="down" />, label: "Move Stage Down", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];

const StageMenuPage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
                    <ThreeDotsIcon />
                </button>
                {isOpen && <PopupMenu items={items} direction="bottom" />}
            </div>
        </div>
    );
};

export default StageMenuPage;
