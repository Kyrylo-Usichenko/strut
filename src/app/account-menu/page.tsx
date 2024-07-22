"use client";

import { useState } from "react";
import styles from "./AccountMenu.module.css";
import LightModeIcon from "../../components/icons/LightModeIcon";
import DarkModeIcon from "../../components/icons/DarkModeIcon";
import AutoModeIcon from "../../components/icons/AutoModeIcon";
import DiscordIcon from "../../components/icons/DiscordIcon";
import DownloadIcon from "../../components/icons/DownloadIcon";
import SignOutIcon from "../../components/icons/SignOutIcon";

type Mode = 'light' | 'dark' | 'auto';

export default function AccountMenu() {
    const [mode, setMode] = useState('dark'); 

    const handleModeChange = (newMode: Mode) => {
        setMode(newMode);
    };

    const shadowClass = {
        light: styles.light,
        dark: styles.dark,
        auto: styles.auto
    }[mode];

    return (
        <div className={styles.div}>
            <div className={styles.toggler}>
                <div 
                    className={styles.mod}
                    onClick={() => handleModeChange('light')}
                >
                    <LightModeIcon />
                    <p className={styles.togglerTitle}>Light</p>
                </div>
                <div 
                    className={styles.mod}
                    onClick={() => handleModeChange('dark')}
                >
                    <DarkModeIcon />
                    <p className={styles.togglerTitle}>Dark</p>
                </div>
                <div 
                    className={styles.mod}
                    onClick={() => handleModeChange('auto')}
                >
                    <AutoModeIcon />
                    <p className={styles.togglerTitle}>Auto</p>
                </div>
                <div className={`${styles.shadow} ${shadowClass}`}></div>
            </div>

            <div className={styles.tools}>
                <div className={styles.item}>
                    <DiscordIcon />
                    <p className={styles.itemTitle}>Join us on Discord</p>
                </div>
                <div className={styles.item}>
                    <DownloadIcon />
                    <p className={styles.itemTitle}>Download Desktop App</p>
                </div>
                <div className={styles.item}>
                    <SignOutIcon />
                    <p className={styles.itemTitle}>Sign Out</p>
                </div>
            </div>
        </div>
    );
}
