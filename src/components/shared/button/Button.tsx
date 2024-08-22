"use client";
import { ReactNode, useState } from "react";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import styles from "./styles.module.css";

type ButtonProps = {
    icon?: ReactNode;
    text: string;
    tooltipLabel?: string;
    tooltipKeys?: string[];
    withoutBackground?: boolean;
    state?: "disabled" | "hovered" | "active";
    onClick?: () => void;
};

export default function Button({
    icon,
    text,
    tooltipLabel,
    tooltipKeys,
    withoutBackground,
    state,
    onClick
}: ButtonProps) {
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
                    color: state === "hovered" ? "var(--text-hover-color)" : undefined,
                    backgroundColor: state === "hovered" ? "var(--button-hover-color)" : undefined
                }}
            >
                {icon && <>{icon}</>}
                <p className={styles.text}>{text}</p>
                {tooltipLabel && show && <Tooltip label={tooltipLabel || ""} keys={tooltipKeys} direction="bottom" />}
            </button>
        </>
    );
}
