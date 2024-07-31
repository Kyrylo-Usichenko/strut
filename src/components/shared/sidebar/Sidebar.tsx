"use client";
import { useState } from "react";
import SidebarIcon from "~/components/icons/SidebarIcon";
import "~/styles/global.css";
import { Sidebar } from "./_components/Sidebar";
import styles from "./styles.module.css";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";

function SidebarPage() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <ButtonIconOnly tooltipLabel="Open Sidebar" icon={<SidebarIcon />} onClick={toggleSidebar} className={styles.button}></ButtonIconOnly>
            <Sidebar isOpen={isOpen} />
        </div>
    );
}

export default SidebarPage;
