"use client";
import React, { FC, useState } from "react";
import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import styles from "~/components/shared/PopupMenu/menu.module.css";
import ExportIcon from "~/components/icons/ExportIcon";
import EyeIcon from "~/components/icons/EyeIcon";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";

const items = [
    { icon: <ExportIcon />, label: "Export to Markdown", link: "" },
    { icon: <EyeIcon />, label: "Hide from Sidebar", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" },
    { icon: <DuplicateIcon />, label: "Duplicate Workspace", link: "" }
];

const PopupMenuPage:FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.container}>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
                Open Menu
            </button>
            {isOpen && <PopupMenu items={items} direction="bottom" />}
        </div>
    );
};

export default PopupMenuPage;
