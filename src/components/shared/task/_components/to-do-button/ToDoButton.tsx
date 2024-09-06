import { useState } from "react";
import styles from "./styles.module.css";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";

type ButtonProps = {
    state?: boolean;
    onClick?: () => void;
};

export default function ToDoButton({ state, onClick }: ButtonProps) {
    const [activeState, setActiveState] = useState<boolean>(state || false);

    return (
        <>
            <button
                className={`${styles.button} ${activeState ? styles.active : ""}`}
                onClick={() => {
                    onClick && onClick();
                    setActiveState(!activeState);
                }}
            >
                {activeState && <SmallCheckIcon />}
            </button>
        </>
    );
}
