"use client";
import React, { FC, useState } from "react";
import { Sidebar } from "./_components/Sidebar";
import SidebarIcon from "../../components/icons/SidebarIcon";
import styles from "./sidebar.module.css";
import "../../styles/global.css";

const SidebarPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="container">
            <button className={styles.button} onClick={toggleSidebar}>
                <SidebarIcon />
            </button>
            <Sidebar isOpen={isOpen} />
        </div>
    );
};

export default SidebarPage;
