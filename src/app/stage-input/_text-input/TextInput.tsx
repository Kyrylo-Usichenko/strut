import styles from "./TextInput.module.css";
import { TextInputProps } from "./TextInput.types";
import HiddenSpan from "../_hidden-span/HiddenSpan";

export default function TextInput({ value, width, styleMode, onChange, setWidth }: TextInputProps) {
    if (styleMode === "kanban") {
        return (
            <input
                className={styles.kanbanInput}
                type="text"
                placeholder="Untitled"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        );
    }
    return (
        <>
            <HiddenSpan text={value || "Untitled"} setWidth={setWidth} />
            <input
                className={styles.input}
                type="text"
                placeholder="Untitled"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{ width: `${width}px`}}
            />
        </>
    );
}
