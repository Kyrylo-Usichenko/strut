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
    onClick?: () => void;
};

// export default function Button({ icon, text, tooltipLabel, onClick }: ButtonProps) {
//     const buttonContent = (
//         <button className={styles.button} onClick={onClick}>
//             {icon && <>{icon}</>}
//             <p className={styles.text}>{text}</p>
//         </button>
//     );

//     // return tooltipLabel ? (
//     //     <Tooltip label={tooltipLabel} direction="bottom">
//     //         {buttonContent}
//     //     </Tooltip>
//     // ) : (
//     //     buttonContent
//     // );
// }

export default function Button({ icon, text, tooltipLabel, tooltipKeys, withoutBackground, onClick }: ButtonProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <button
                className={withoutBackground? styles.buttonNoBackground: styles.button}
                onClick={onClick}
                onPointerEnter={() => {
                    if (tooltipLabel) {
                        setShow(true);
                    }
                }}
                onPointerLeave={() => {
                    setShow(false);
                }}
            >
                {icon && <>{icon}</>}
                <p className={styles.text}>{text}</p>
                {tooltipLabel && show && <Tooltip label={tooltipLabel || ''} keys={tooltipKeys} direction="bottom" />}
            </button>
        </>
    );
}
