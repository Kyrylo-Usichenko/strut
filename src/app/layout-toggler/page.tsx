"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import ListViewIcon from "~/components/icons/ListViewIcon";
import GridViewIcon from "~/components/icons/GridViewIcon";
import KanbanViewIcon from "~/components/icons/KanbanViewIcon";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

export default function LayoutToggler() {
    const [active, setActive] = useState<string>("container1");

    return (
        <div className={styles.div}>
            <Tooltip label="List View" direction="bottom">
                <button className={`${active === "container1" ? styles.container : styles.container1}`} onClick={() => setActive("container1")}>
                    <ListViewIcon />
                    {/* <p className={styles.title1}>List View</p> */}
                </button>
            </Tooltip>
            <Tooltip label="Grid View" direction="bottom">
                <button className={`${active === "container2" ? styles.container : styles.container2}`} onClick={() => setActive("container2")}>
                    <GridViewIcon />
                    {/* <p className={styles.title2}></p> */}
                </button>
            </Tooltip>
            <Tooltip label="Kanban View" direction="bottom">
                <button className={`${active === "container3" ? styles.container : styles.container3}`} onClick={() => setActive("container3")}>
                    <KanbanViewIcon />
                    {/* <p className={styles.title3}>Kanban View</p> */}
                </button>
            </Tooltip>

            <button
                className={`${styles.shadow} ${
                    active === "container2" ? styles.midle : ""
                } ${active === "container3" ? styles.right : ""}`}
            ></button>
        </div>
    );
}
