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
                className={`${styles.button}`}
                onClick={() => {
                    onClick && onClick();
                    setActiveState(!activeState);
                }}
                style={{
                    color: activeState ? "white" : undefined,
                    backgroundColor: activeState ? "rgba(255, 255, 255, 0.5)" : undefined,
                    border: activeState ? "none" : undefined
                }}
            >
                {activeState && <SmallCheckIcon />}
            </button>
        </>
    );
}
