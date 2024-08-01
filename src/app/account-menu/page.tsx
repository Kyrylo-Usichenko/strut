"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import AutoModeIcon from "~/components/icons/AutoModeIcon";
import DarkModeIcon from "~/components/icons/DarkModeIcon";
import DiscordIcon from "~/components/icons/DiscordIcon";
import DownloadIcon from "~/components/icons/DownloadIcon";
import LightModeIcon from "~/components/icons/LightModeIcon";
import SignOutIcon from "~/components/icons/SignOutIcon";

type Mode = "light" | "dark" | "auto";

export default function AccountMenu() {
    const [mode, setMode] = useState("dark");

    const handleModeChange = (newMode: Mode) => {
        setMode(newMode);
    };

    const shadowClass = {
        light: styles.light,
        dark: styles.dark,
        auto: styles.auto
    }[mode];

    return (
        <div className={styles.inner}>
            <div className={styles.toggler}>
                <button
                    className={`${mode === "light" ? styles.modActive : styles.mod}`}
                    onClick={() => handleModeChange("light")}
                >
                    <LightModeIcon />
                    <p className={styles.togglerTitle}>Light</p>
                </button>
                <button
                    className={`${mode === "dark" ? styles.modActive : styles.mod}`}
                    onClick={() => handleModeChange("dark")}
                >
                    <DarkModeIcon />
                    <p className={styles.togglerTitle}>Dark</p>
                </button>
                <button
                    className={`${mode === "auto" ? styles.modActive : styles.mod}`}
                    onClick={() => handleModeChange("auto")}
                >
                    <AutoModeIcon />
                    <p className={styles.togglerTitle}>Auto</p>
                </button>
                <div className={`${styles.shadow} ${shadowClass}`}></div>
            </div>

            <div className={styles.tools}>
                <a className={styles.item}>
                    <DiscordIcon />
                    <p className={styles.itemTitle}>Join us on Discord</p>
                </a>
                <a className={styles.item}>
                    <DownloadIcon />
                    <p className={styles.itemTitle}>Download Desktop App</p>
                </a>
                <a className={styles.item}>
                    <SignOutIcon />
                    <p className={styles.itemTitle}>Sign Out</p>
                </a>
            </div>
        </div>
    );
}
