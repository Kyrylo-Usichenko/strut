"use client";
import { FC, useState } from "react";
import SidebarIcon from "~/components/icons/SidebarIcon";
import "~/styles/global.css";
import { Sidebar } from "./_components/Sidebar";
import styles from "./styles.module.css";

const SidebarPage: FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={toggleSidebar}>
                <SidebarIcon />
            </button>
            <Sidebar isOpen={isOpen} />
        </div>
    );
};

export default SidebarPage;
