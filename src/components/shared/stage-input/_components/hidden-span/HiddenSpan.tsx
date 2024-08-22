import { useEffect, useRef } from "react";
import styles from "./HiddenSpan.module.css";
import { HiddenSpanProps } from "./HiddenSpan.types";

export default function HiddenSpan({ text, setWidth }: HiddenSpanProps) {
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.textContent = text;
            const textWidth = Math.ceil(spanRef.current.getBoundingClientRect().width);
            setWidth(textWidth);
        }
    }, [text, setWidth]);

    return <span ref={spanRef} className={styles.hiddenSpan}></span>;
}
