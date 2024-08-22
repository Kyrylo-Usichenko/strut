import { TextInputProps } from "./TextInput.types";
import HiddenSpan from "../hidden-span/HiddenSpan";
import styles from "./TextInput.module.css";

export default function TextInput({ value, width, styleMode, onChange, setWidth, onBlur }: TextInputProps) {
    if (styleMode === "kanban") {
        return (
            <input
                className={styles.kanbanInput}
                type="text"
                placeholder="Untitled"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
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
                onBlur={() => onBlur?.()}
                style={{ width: `${width}px` }}
            />
        </>
    );
}
