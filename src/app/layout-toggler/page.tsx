"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import ListViewIcon from "~/components/icons/ListViewIcon";
import GridViewIcon from "~/components/icons/GridViewIcon";
import KanbanViewIcon from "~/components/icons/KanbanViewIcon";

export default function LayoutToggler() {
  const [active, setActive] = useState<string>('container1');

  return (
    <div className={styles.div}>
      <button
        className={styles.container1}
        onClick={() => setActive('container1')}
      >
        <ListViewIcon />
        <p className={styles.title1}>List View</p>
      </button>
      <button
        className={styles.container2}
        onClick={() => setActive('container2')}
      >
        <GridViewIcon />
        <p className={styles.title2}>Grid View</p>
      </button>
      <button
        className={styles.container3}
        onClick={() => setActive('container3')}
      >
        <KanbanViewIcon />
        <p className={styles.title3}>Kanban View</p>
      </button>

      <button
        className={`${styles.shadow} ${
          active === 'container2' ? styles.midle : ''
        } ${active === 'container3' ? styles.right : ''}`}
      ></button>
    </div>
  );
}
