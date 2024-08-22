import styles from "./NavigationButton.module.css";
import CrossIcon from "~/components/icons/CrossIconThin";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";

export default function NavigationButton({
    styleMode,
    icon,
    onClick,
    position
}: {
    styleMode?: "dark" | "light";
    icon?: "cross" | "arrow";
    onClick?: () => void;
    position?: "left" | "right";
}) {
    return (
        <button
            className={`${styleMode === "light" ? styles.navigationButtonLight : styles.navigationButton} ${
                position === "left" ? styles.left : styles.right
            }`}
            onClick={onClick}
        >
            {icon === "arrow" ? (
                <SmallArrowIcon
                    style={{ minWidth: "12px", height: "12px", width: "auto", transform: "rotate(180deg)" }}
                />
            ) : (
                <CrossIcon style={{ minWidth: "12px", height: "12px", width: "auto" }} />
            )}
        </button>
    );
}
