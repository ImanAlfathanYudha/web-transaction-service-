
import { Transaction } from "../../../type/type";

interface Props {
  nonSuccessTransaction: Transaction[];
}

import styles from "./style.module.css";

export default function TransactionViewer({ nonSuccessTransaction }: Props) {

  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableMain}>
        <thead className={styles.tableThead}>
          <tr>
            <th className={styles.tableTH}>Name</th>
            <th className={styles.tableTH}>Type</th>
            <th className={styles.tableTH}>Amount</th>
            <th className={styles.tableTH}>Status</th>
            <th className={styles.tableTH}>Description</th>
          </tr>
        </thead>
        <tbody className={styles.tableTbody}>
          {nonSuccessTransaction.map((t, i) => (
            <tr key={i}>
              <td className={styles.tableTD}>{t.name}</td>
              <td className={styles.tableTD}>{t.type}</td>
              <td className={styles.tableTD}>
                {t.amount.toLocaleString("id-ID")}
              </td>
              <td
                className={`${styles.tableTD} ${t.status === "FAILED" ? styles.statusFailed : styles.statusPending
                  }`}
              >
                {t.status === "FAILED" ? "⚠️" : "❌"} {t.status}
              </td>
              <td className={styles.tableTD}>{t.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
