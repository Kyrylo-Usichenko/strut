import styles from "./ImagePlaceholder.module.css";

export default function ImagePlaceholder({ letter, size }: { letter: string; size?: "small" | "big" }) {
    return <div className={size === "big" ? styles.bigImagePlaceholder : styles.imagePlaceholder}>{letter}</div>;
}
