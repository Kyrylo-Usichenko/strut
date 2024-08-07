import { ThemeType } from "~/context/themeContext";

class LocalStorage {
    static setTheme = (value: ThemeType): void => {
        localStorage.setItem("theme", value);
    };
    static getTheme = (): string | null => {
        return localStorage.getItem("theme");
    };
}
export default LocalStorage;
