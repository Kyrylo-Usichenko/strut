"use client";
import { useState } from "react";
import SidebarIcon from "~/components/icons/SidebarIcon";
import { Sidebar } from "./_components/Sidebar";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import styles from "./styles.module.css";

function SidebarPage() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <ButtonIconOnly
                tooltipLabel="Open Sidebar"
                tooltipKeys={["CTRL", "`"]}
                icon={<SidebarIcon />}
                onClick={toggleSidebar}
                className={styles.button}
            ></ButtonIconOnly>
            <Sidebar isOpen={isOpen} />
        </div>
    );
}

export default SidebarPage;
