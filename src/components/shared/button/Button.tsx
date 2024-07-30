"use client";
import { ReactNode, useState } from "react";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import styles from "./styles.module.css";

type ButtonProps = {
    icon?: ReactNode;
    text: string;
    tooltipLabel?: string;
    withoutBackground?: boolean;
    state?: "disabled" | "hovered" | "active";
    onClick?: () => void;
};

export default function Button({ icon, text, tooltipLabel, withoutBackground, state, onClick }: ButtonProps) {
    const [show, setShow] = useState<boolean>(state === "hovered");

    return (
        <>
            <button
                className={withoutBackground ? styles.buttonNoBackground : styles.button}
                onClick={onClick}
                disabled={state === "disabled"}
                onPointerEnter={() => {
                    if (tooltipLabel) {
                        setShow(true);
                    }
                }}
                onPointerLeave={() => {
                    setShow(false);
                }}
                style={{
                    transform: state === "active" ? "scale(0.95)" : undefined,
                    color: state === "hovered" ? "rgba(255, 255, 255, 0.8)" : undefined,
                    backgroundColor: state === "hovered" ? "rgba(255, 255, 255, 0.1)" : undefined
                }}
            >
                {icon && <>{icon}</>}
                <p className={styles.text}>{text}</p>
                {tooltipLabel && show && <Tooltip label={tooltipLabel} direction="bottom" />}
            </button>
        </>
    );
}
