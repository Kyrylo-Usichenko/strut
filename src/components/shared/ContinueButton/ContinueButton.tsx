import React from "react";
import styles from "./ContinueButton.module.css";

export default function ContinueButton() {
    return (
        <button type="submit" className={styles.contBtn}>
            Continue
        </button>
    );
}
