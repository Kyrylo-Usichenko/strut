import styles from './DocsAmount.module.css';
import { DocsAmountProps } from './DocsAmount.types';

export default function DocsAmount({ amount }: DocsAmountProps) {
    return <p className={styles.pAmount}>{amount}</p>;
}