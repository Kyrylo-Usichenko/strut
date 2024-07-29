import s from "./styles.module.css";

type Props = {
    children: JSX.Element;
    isOpened: boolean;
    borderRadius?: number;
    position?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
};

function Popup({ children, isOpened, borderRadius = 24, position }: Props) {
    console.log("Popup -> isOpened", isOpened);

    function getPosition() {
        const finalPosition = {};
        if (position) {
            if (position.top) {
                finalPosition["top"] = position.top;
            }
            if (position.right) {
                finalPosition["right"] = position.right;
            }
            if (position.bottom) {
                finalPosition["bottom"] = position.bottom;
            }
            if (position.left) {
                finalPosition["left"] = position.left;
            }
        }
        return finalPosition;
    }

    console.log("Popup -> getPosition -> finalPosition", getPosition());
    

    return (
        <div
            className={s.wrapper}
            style={{
                display: isOpened ? "block" : "none",
                borderRadius,
                ...getPosition()
            }}
        >
            {children}
        </div>
    );
}

export default Popup;
