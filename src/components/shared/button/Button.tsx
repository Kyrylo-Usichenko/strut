import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";

type ButtonProps = {
    icon?: ReactNode;
    text: string;
    tooltipLabel?: string;
    onClick: () => void;
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

export default function Button({ icon, text, tooltipLabel, onClick }: ButtonProps) {
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
            >
                {icon && <>{icon}</>}
                <p className={styles.text}>{text}</p>
                {tooltipLabel && show && <Tooltip label={tooltipLabel} direction="bottom" />}
            </button>
        </>
    );
}
