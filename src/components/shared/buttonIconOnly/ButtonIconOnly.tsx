import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

type ButtonProps = {
    icon: ReactNode;
    tooltipLabel?: string;
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
    tooltipVisible = true,
    tooltipDirection = "bottom",
    onClick,
    className
}: ButtonProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <button
                className={`${styles.button} ${className}`}
                onClick={onClick}
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
                {tooltipLabel && show && <Tooltip label={tooltipLabel} direction={tooltipDirection} visible={tooltipVisible}/>}
            </button>
        </>
    );
}
