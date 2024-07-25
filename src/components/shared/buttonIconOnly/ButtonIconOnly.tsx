import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

type ButtonProps = {
    icon: ReactNode;
    tooltipLabel?: string;
    onClick: () => void;
    disabled?: boolean;
    color?: string;
};

export default function ButtonIconOnly({ icon, tooltipLabel, onClick, disabled = false, color = 'currentColor' }: ButtonProps) {
    const [show, setShow] = useState<boolean>(false);

    const handleMouseEnter = () => {
        if (tooltipLabel && !disabled) {
            setShow(true);
        }
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

    return (
        <button
            className={styles.button}
            onClick={disabled ? undefined : onClick}
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
            disabled={disabled}
            style={{ color }}
        >
            {icon && <>{icon}</>}
            {tooltipLabel && show && !disabled && <Tooltip label={tooltipLabel} direction="bottom" />}
        </button>
    );
}
