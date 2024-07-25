"use client";
import { FC, useState } from "react";
import SidebarIcon from "~/components/icons/SidebarIcon";
import { Sidebar } from "./_components/Sidebar";
import styles from "./styles.module.css";
import "~/styles/global.css";
import { Tooltip } from "../Tooltip/Tooltip";

function SidebarPage() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={toggleSidebar}>
                <Tooltip label="Open Sidebar" keys={["CTRL", "`"]} direction="bottom" display="flex">
                    <SidebarIcon />
                </Tooltip>
            </button>
            <Sidebar isOpen={isOpen} />
        </div>
    );
};

export default SidebarPage;
