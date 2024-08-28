import { ThemeType } from "~/context/themeContext";

class LocalStorage {
    static setTheme = (value: ThemeType): void => {
        localStorage.setItem("theme", value);
    };
    static getTheme = (): string | null => {
        return localStorage.getItem("theme");
    };
    static setTaskContent = (value: string): void => {
        localStorage.setItem("taskContent", value);
        window.dispatchEvent(new CustomEvent("taskContentChanged"));
    };

    static getTaskContent = (): string | null => {
        return localStorage.getItem("taskContent");
    };

    static removeTaskContent = (): void => {
        localStorage.removeItem("taskContent");
    };
}
export default LocalStorage;
