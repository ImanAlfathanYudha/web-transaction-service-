import styles from "./style.module.css";

interface Props {
  message: string;
}

export default function EmptyState({ message }: Props) {
  return (
    <div className={styles.emptyContainer}>
      <p className={styles.emptyText}>
        {message}
      </p>
    </div>
  );
}
