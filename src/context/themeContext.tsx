"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import LocalStorage from "~/storage/LocalStorage";

export type ThemeType = "light" | "dark" | "auto";
type Props = {
    theme: ThemeType | null;
    setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<Props>({
    theme: null,
    setTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType | null>(null);

    const handleThemeChange = (newTheme: ThemeType) => {
        setTheme(newTheme);
        LocalStorage.setTheme(newTheme);
    };

    useEffect(() => {
        const savedTheme = LocalStorage.getTheme();
        const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        switch (savedTheme) {
            case "light":
                setTheme("light");
                break;
            case "dark":
                setTheme("dark");
                break;
            case "auto":
                setTheme("auto");
                break;
            default:
                handleThemeChange(deviceTheme);
                break;
        }
    }, []);

    useEffect(() => {
        if (!theme) return;
        const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        if (theme === "auto") {
            document.documentElement.setAttribute("data-theme", deviceTheme);
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

    if (!theme) return null;
    return <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
