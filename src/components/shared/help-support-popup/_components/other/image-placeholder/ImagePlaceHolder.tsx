import styles from "./ImagePlaceholder.module.css";

export default function ImagePlaceholder({
    className,
    letter,
    size
}: {
    className?: string;
    letter: string;
    size?: "small" | "big";
}) {
    return (
        <div className={className ? className : size === "big" ? styles.bigImagePlaceholder : styles.imagePlaceholder}>
            <span>{letter}</span>
        </div>
    );
}
