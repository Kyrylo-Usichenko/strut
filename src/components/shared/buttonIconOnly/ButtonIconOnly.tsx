import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

type ButtonProps = {
    icon?: ReactNode;
    tooltipLabel?: string;
    color?: string;
    onClick?: () => void;
};

export default function ButtonIconOnly({ icon, tooltipLabel, color, onClick }: ButtonProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <button
                className={styles.button}
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
                <div className={styles.iconWrapper}>{icon && <>{icon}</>}</div>
                {tooltipLabel && show && <Tooltip label={tooltipLabel} direction="bottom" />}
            </button>
            
        </>
    );
}
