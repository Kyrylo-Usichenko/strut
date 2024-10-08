"use client";
import { ReactNode, useState } from "react";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import styles from "./styles.module.css";

type ButtonProps = {
    icon: ReactNode;
    tooltipLabel?: string;
    tooltipKeys?: string[];
    color?: string;
    onClick?: () => void;
    className?: string;
    tooltipVisible?: boolean;
    tooltipDirection?: "top" | "bottom" | "left" | "right";
};

export default function ButtonIconOnly({
    icon,
    tooltipLabel,
    color,
    onClick,
    tooltipVisible = true,
    tooltipDirection = "bottom",
    tooltipKeys,
    className
}: ButtonProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <button
                className={`${styles.button} ${className}`}
                onClick={() => {
                    setShow(false);
                    if (onClick) {
                        onClick();
                    }
                }}
                onPointerEnter={() => {
                    if (tooltipLabel) {
                        setShow(true);
                    }
                }}
                onPointerLeave={() => {
                    setShow(false);
                }}
                {...(color && { style: { color } })}
            >
                {icon}
                {tooltipLabel && show && (
                    <Tooltip
                        label={tooltipLabel}
                        keys={tooltipKeys}
                        direction={tooltipDirection}
                        visible={tooltipVisible}
                    />
                )}
            </button>
        </>
    );
}
