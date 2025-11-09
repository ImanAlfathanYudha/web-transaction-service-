interface Props {
    totalBalance: number;
}

import styles from "./style.module.css";

export default function TotalBalanceSection({ totalBalance }: Props) {
    return (
        <div className={styles.balance}>
            <strong>Total Balance:</strong> {totalBalance?.toLocaleString()}
        </div>
    )
}