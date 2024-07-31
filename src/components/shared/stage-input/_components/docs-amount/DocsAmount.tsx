import styles from "./DocsAmount.module.css";
import { DocsAmountProps } from "./DocsAmount.types";

export default function DocsAmount({ amount, styleMode }: DocsAmountProps) {
    return (
        <p className={styles.pAmount} style={{ marginLeft: styleMode === "kanban" ? "132px" : undefined }}>
            {amount}
        </p>
    );
}
