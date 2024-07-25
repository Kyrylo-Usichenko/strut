"use client";

import { useState } from "react";

import AutoModeIcon from "~/components/icons/AutoModeIcon";
import DarkModeIcon from "~/components/icons/DarkModeIcon";
import DiscordIcon from "~/components/icons/DiscordIcon";
import DownloadIcon from "~/components/icons/DownloadIcon";
import LightModeIcon from "~/components/icons/LightModeIcon";
import SignOutIcon from "~/components/icons/SignOutIcon";
import Popup from "../../popup/Popup";
import styles from "./AccountMenu.module.css";

type Mode = "light" | "dark" | "auto";

type Props = {
    isOpened: boolean;
};

export default function AccountPopup({ isOpened }: Props) {
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
        <Popup
            isOpened={isOpened}
            borderRadius={12}
            position={{
                top: "36px",
                right: "0"
            }}
        >
            <div className={styles.inner}>
                <div className={styles.toggler}>
                    <button className={styles.mod} onClick={() => handleModeChange("light")}>
                        <LightModeIcon />
                        <p className={styles.togglerTitle}>Light</p>
                    </button>
                    <button className={styles.mod} onClick={() => handleModeChange("dark")}>
                        <DarkModeIcon />
                        <p className={styles.togglerTitle}>Dark</p>
                    </button>
                    <button className={styles.mod} onClick={() => handleModeChange("auto")}>
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
        </Popup>
    );
}
