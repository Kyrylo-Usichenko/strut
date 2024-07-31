import s from "./styles.module.css";
import { getPosition, Position } from "./utils/getPosition";

type Props = {
    children: JSX.Element;
    isOpened: boolean;
    borderRadius?: number;
    position?: Position;
    width?: number;
};

function Popup({
    children,
    isOpened,
    borderRadius = 12,
    width = 232,
    position = {
        top: "0px"
    }
}: Props) {
    return (
        <div
            className={s.wrapper}
            style={{
                display: isOpened ? "block" : "none",
                borderRadius,
                width: `${width}px`,
                ...getPosition(position)
            }}
        >
            {children}
        </div>
    );
}

export default Popup;
