"use client";
import { useContext } from "react";
import AutoModeIcon from "~/components/icons/AutoModeIcon";
import DarkModeIcon from "~/components/icons/DarkModeIcon";
import DiscordIcon from "~/components/icons/DiscordIcon";
import DownloadIcon from "~/components/icons/DownloadIcon";
import LightModeIcon from "~/components/icons/LightModeIcon";
import SignOutIcon from "~/components/icons/SignOutIcon";
import { ThemeContext } from "~/context/themeContext";
import styles from "./styles.module.css";

export default function AccountMenu() {
    const { theme, setTheme } = useContext(ThemeContext);
    if (theme === null) return null;
    const shadowClass = {
        light: styles.light,
        dark: styles.dark,
        auto: styles.auto
    }[theme];

    return (
        <div className={styles.inner}>
            <div className={styles.toggler}>
                <button
                    className={`${theme === "light" ? styles.modActive : styles.mod}`}
                    onClick={() => {
                        setTheme("light");
                    }}
                >
                    <LightModeIcon />
                    <p className={styles.togglerTitle}>Light</p>
                </button>
                <button
                    className={`${theme === "dark" ? styles.modActive : styles.mod}`}
                    onClick={() => {
                        setTheme("dark");
                    }}
                >
                    <DarkModeIcon />
                    <p className={styles.togglerTitle}>Dark</p>
                </button>
                <button
                    className={`${theme === "auto" ? styles.modActive : styles.mod}`}
                    onClick={() => {
                        setTheme("auto");
                    }}
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
