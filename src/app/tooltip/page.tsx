import React, { FC } from "react";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import styles from "~/components/shared/Tooltip/tooltip.module.css";

const TooltipPage:FC = () => {
    return (
        <div className={styles.container}>
            <Tooltip label="Some top text" direction="top">
                <button className={styles.button}>Top</button>
            </Tooltip>
            <Tooltip label="Some bottom text" direction="bottom">
                <button className={styles.button}>Bottom</button>
            </Tooltip>
            <Tooltip label="Some text" direction="left" keys={["Ctrl", "`"]}>
                <button className={styles.button}>Left</button>
            </Tooltip>
            <Tooltip label="Some text" direction="right" keys={["Alt", "Enter"]}>
                <button className={styles.button}>Right</button>
            </Tooltip>
        </div>
    );
};

export default TooltipPage;
